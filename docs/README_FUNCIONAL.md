# Portal Emergência — Loja funcional com Google Sheets

## O que foi adicionado

- Login e registo funcional
- Carrinho de compras
- Produtos com stock vindo da base de dados
- Encomendas registadas no Google Sheets
- Redução automática de stock quando a encomenda é confirmada
- Página `shop/carrinho.html`
- Página `account/minhas-encomendas.html`
- Ficheiro `assets/js/config.js`
- Backend em `google-apps-script/Code.gs`, caso este ficheiro seja incluído na versão funcional do projeto

## 1. Criar a base de dados

1. Abre Google Sheets.
2. Cria uma folha nova.
3. Dá-lhe o nome: `Portal Emergência DB`.

## 2. Criar a API

1. No Google Sheets, vai a `Extensões > Apps Script`.
2. Apaga o código que aparece.
3. Cola o conteúdo de `google-apps-script/Code.gs`.
4. Guarda o projeto.
5. No editor do Apps Script, escolhe a função `setup`.
6. Clica em `Executar`.
7. Autoriza as permissões.
8. A Sheet fica criada com estas folhas:
   - Produtos
   - Utilizadores
   - Encomendas
   - ItensEncomenda
   - Sessoes

## 3. Publicar a Web App

1. No Apps Script, clica em `Implementar > Nova implementação`.
2. Tipo: `Aplicação Web`.
3. Executar como: `Eu`.
4. Quem tem acesso: `Qualquer pessoa`.
5. Clica em `Implementar`.
6. Copia o URL da Web App.

## 4. Ligar o site à API

Abre o ficheiro:

```js
assets/js/config.js
```

Substitui:

```js
window.PE_API_URL = "COLOCA_AQUI_O_URL_DA_WEB_APP";
```

pelo URL da tua Web App:

```js
window.PE_API_URL = "https://script.google.com/macros/s/XXXX/exec";
```

## 5. Como testar

1. Abre `account/login.html`.
2. Cria conta.
3. Vai à loja.
4. Adiciona produtos ao carrinho.
5. Vai a `shop/carrinho.html`.
6. Confirma a encomenda.
7. Abre o Google Sheets.
8. Confirma que a encomenda apareceu e que o stock baixou.

## Notas importantes

- Esta versão não faz pagamento real.
- As encomendas ficam com estado `Pendente`.
- Podes alterar stock, preços, imagens e produtos diretamente no Google Sheets.
- Não guardes dados bancários no Google Sheets.
- Para projeto académico, esta solução é suficiente e funcional.


## Correção para erro “Load failed”

Esta versão usa JSONP em vez de `fetch()` normal, porque o Google Apps Script pode bloquear pedidos por CORS quando o site é aberto localmente.

Depois de colares o novo `Code.gs`, faz obrigatoriamente:

1. Guarda o Apps Script.
2. Executa novamente `setup`.
3. Vai a `Implementar > Gerir implementações`.
4. Edita a implementação existente ou cria uma nova.
5. Publica uma nova versão.
6. Copia novamente o URL terminado em `/exec`.
7. Cola esse URL em `assets/js/config.js`.

Para testar a API, abre no browser:

`TEU_URL_DA_WEB_APP?action=listProducts`

Se estiver tudo certo, aparecem produtos em JSON.
