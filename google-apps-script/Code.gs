
/*
ATUALIZAÇÃO PARA CUPÕES E MÉTODO DE PAGAMENTO

Na folha Encomendas, os cabeçalhos esperados são:
id | userId | nomeCliente | email | telefone | morada | notas | subtotal | desconto | codigoDesconto | total | metodoPagamento | estado | data

Se já tens o Code.gs completo anterior, substitui as funções fixOrderHeaders, createOrder e myOrders pelas versões abaixo.
*/

function fixOrderHeaders() {
  const s = sheet(SHEET_NAMES.encomendas);
  const headers = ['id','userId','nomeCliente','email','telefone','morada','notas','subtotal','desconto','codigoDesconto','total','metodoPagamento','estado','data'];
  s.getRange(1, 1, 1, headers.length).setValues([headers]);
  s.setFrozenRows(1);
}

function createOrder(body) {
  const user = userFromToken(body.token);
  const cliente = body.cliente || {};
  const items = body.items || [];
  const descontoInfo = body.desconto || {};
  const metodoPagamento = String(body.metodoPagamento || '').trim();

  if (!items.length) throw new Error('Carrinho vazio.');
  if (!metodoPagamento) throw new Error('Seleciona um método de pagamento.');

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const produtosSheet = sheet(SHEET_NAMES.produtos);
    const produtos = rowsToObjects(produtosSheet);

    let subtotal = 0;
    const orderItems = [];

    items.forEach(item => {
      const produto = produtos.find(p => String(p.id) === String(item.produtoId));
      if (!produto) throw new Error('Produto não encontrado: ' + item.produtoId);

      const quantidade = Number(item.quantidade || 0);
      if (quantidade <= 0) throw new Error('Quantidade inválida.');

      const stock = Number(produto.stock);
      if (stock < quantidade) throw new Error('Stock insuficiente para: ' + produto.nome);

      const preco = Number(produto.preco);
      const linhaSubtotal = preco * quantidade;
      subtotal += linhaSubtotal;

      orderItems.push({ produto, quantidade, preco, subtotal: linhaSubtotal });
    });

    let desconto = Number(descontoInfo.amount || 0);
    if (desconto < 0) desconto = 0;
    if (desconto > subtotal) desconto = subtotal;

    const codigoDesconto = String(descontoInfo.code || '');
    const total = subtotal - desconto;

    orderItems.forEach(item => {
      produtosSheet.getRange(item.produto._row, 4)
        .setValue(Number(item.produto.stock) - item.quantidade);
    });

    const orderId = makeId('enc');

    fixOrderHeaders();

    sheet(SHEET_NAMES.encomendas).appendRow([
      orderId,
      user.id,
      cliente.nome || user.nome,
      cliente.email || user.email,
      cliente.telefone || '',
      cliente.morada || '',
      cliente.notas || '',
      subtotal,
      desconto,
      codigoDesconto,
      total,
      metodoPagamento,
      'Pendente',
      new Date()
    ]);

    const itensSheet = sheet(SHEET_NAMES.itens);

    orderItems.forEach(item => {
      itensSheet.appendRow([
        makeId('item'),
        orderId,
        item.produto.id,
        item.produto.nome,
        item.quantidade,
        item.preco,
        item.subtotal
      ]);
    });

    return { ok: true, orderId, subtotal, desconto, total, metodoPagamento };

  } finally {
    lock.releaseLock();
  }
}

function myOrders(body) {
  const user = userFromToken(body.token);

  const ordersSheet = sheet(SHEET_NAMES.encomendas);
  const values = ordersSheet.getDataRange().getValues();
  const rows = values.slice(1).filter(row => row.some(cell => cell !== ''));

  const itemsSheet = sheet(SHEET_NAMES.itens);
  const itemValues = itemsSheet.getDataRange().getValues();
  const itemHeaders = itemValues.shift();

  const items = itemValues
    .filter(row => row.some(cell => cell !== ''))
    .map(row => {
      const obj = {};
      itemHeaders.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });

  const result = rows
    .filter(row => String(row[1]) === String(user.id))
    .map(row => {
      const orderId = row[0];

      return {
        id: orderId,
        userId: row[1],
        nomeCliente: row[2],
        email: row[3],
        telefone: row[4],
        morada: row[5],
        notas: row[6],
        subtotal: Number(row[7] || 0),
        desconto: Number(row[8] || 0),
        codigoDesconto: row[9] || '',
        total: Number(row[10] || 0),
        metodoPagamento: row[11] || '',
        estado: row[12] || '',
        data: row[13],
        items: items
          .filter(i => String(i.encomendaId) === String(orderId))
          .map(i => ({
            produtoId: i.produtoId,
            nomeProduto: i.nomeProduto,
            quantidade: Number(i.quantidade),
            precoUnitario: Number(i.precoUnitario),
            subtotal: Number(i.subtotal)
          }))
      };
    })
    .reverse();

  return { ok: true, orders: result };
}
