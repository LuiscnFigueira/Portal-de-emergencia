
function cleanupDuplicateProductUi() {
  document.querySelectorAll("a.pe-product-link").forEach(function(card) {
    var stocks = card.querySelectorAll(".pe-product-stock");
    stocks.forEach(function(el, idx) {
      if (idx > 0) el.remove();
    });
    var buttons = card.querySelectorAll(".pe-add-cart");
    buttons.forEach(function(el, idx) {
      if (idx > 0) el.remove();
    });
  });
}


window.PE_API_URL = window.PE_API_URL || "https://script.google.com/macros/s/AKfycbxIjwJvOm8dgDhebab9Z7YziJslALUW7wwhMu2Sj5RKBu-AKEZC_bcTcMfv8rilyxxB/exec";
window.PE_FALLBACK_PRODUCTS = [
{"id": "kit-emergencia-uniao-europeia", "nome": "Kit de Emergência União Europeia", "preco": 35, "stock": 30, "imagem": "https://media.canva.com/v2/image-resize/format:PNG/height:530/quality:100/uri:ifs%3A%2F%2FM%2F5f5e5802-287f-439f-a694-4423862ef36b/watermark:F/width:550?csig=AAAAAAAAAAAAAAAAAAAAAGKPWwGZZXLplpfXGwA0p1qr_xigZey2c_MOQ7OfbPH7&exp=1777427728&osig=AAAAAAAAAAAAAAAAAAAAAIZstzu_pFSeOw1eodXHlSQM4CCzAUpzBhXOeFGxG8ax&signer=media-rpc&x-canva-quality=thumbnail_large", "categoria": "kit", "cor": "azul", "ativo": true},
{"id": "kit-emergencia-luz", "nome": "Kit de Emergência Luz", "preco": 80, "stock": 30, "imagem": "https://www.image2url.com/r2/default/images/1777415239356-bb388f34-03d0-46be-9b26-60c25c866a7d.png", "categoria": "kit", "cor": "amarelo", "ativo": true},
{"id": "kit-emergencia-digital", "nome": "Kit de Emergência Digital", "preco": 70, "stock": 30, "imagem": "https://img.sanishtech.com/u/b0d5a836b5d55951b989317d2c1190a7.png", "categoria": "kit", "cor": "preto", "ativo": true},
{"id": "kit-ferramentas-essencial", "nome": "Kit de Ferramentas Essencial", "preco": 55, "stock": 30, "imagem": "https://img.sanishtech.com/u/fc3afd1c04acd54b3a66568ba71671dd.png", "categoria": "kit", "cor": "laranja", "ativo": true},
{"id": "kit-automovel", "nome": "Kit de Emergência Automóvel", "preco": 45, "stock": 30, "imagem": "https://www.image2url.com/r2/default/images/1777396346442-e107bc64-2e16-4990-86e5-575fe80edbff.png", "categoria": "kit", "cor": "laranja", "ativo": true},{"id": "dom-peq", "nome": "Kit Domiciliar Pequeno", "preco": 22.0, "stock": 20, "imagem": "https://image2url.com/r2/default/images/1773138750357-b009af68-49ed-4b58-8f4f-26c0f49bb4a2.png", "ativo": true}, {"id": "dom-med", "nome": "Kit Domiciliar Médio", "preco": 33.0, "stock": 15, "imagem": "https://image2url.com/r2/default/images/1773139058111-b47ca3da-5fb5-4bfb-8a3c-bfb234a15f4c.png", "ativo": true}, {"id": "dom-grande", "nome": "Kit Domiciliar Grande", "preco": 55.0, "stock": 12, "imagem": "https://image2url.com/r2/default/images/1773139128021-88286589-f596-41eb-8680-4f53f8daaaba.png", "ativo": true}, {"id": "radio-portatil", "nome": "Rádio Portátil", "preco": 9.0, "stock": 40, "imagem": "https://image2url.com/r2/default/images/1773161745023-202a6427-af48-48de-80f3-a395e00c5480.png", "ativo": true}, {"id": "lanterna-led", "nome": "Lanterna LED", "preco": 10.0, "stock": 35, "imagem": "https://image2url.com/r2/default/images/1773162008235-9f2c024a-4733-4a2e-b240-d6b788d7d517.png", "ativo": true}, {"id": "apito-sinalizador", "nome": "Apito de Sinalização", "preco": 2.0, "stock": 100, "imagem": "https://image2url.com/r2/default/images/1773162197823-6742322c-412a-4e88-be25-3f7a700c5576.png", "ativo": true}, {"id": "empresa-pequeno", "nome": "Kit Básico Empresarial", "preco": 50.0, "stock": 10, "imagem": "https://image2url.com/r2/default/images/1773162502550-e1938297-ae7a-4ed7-89af-1881bd240696.png", "ativo": true}, {"id": "empresa-medio", "nome": "Kit Intermédio Empresarial", "preco": 90.25, "stock": 8, "imagem": "https://image2url.com/r2/default/images/1773162573643-fdac529c-0a28-49e2-a647-8f99fd07ce77.png", "ativo": true}, {"id": "empresa-grande", "nome": "Kit Completo Empresarial", "preco": 145.0, "stock": 5, "imagem": "https://image2url.com/r2/default/images/1773162615795-b9e75c33-f470-4dbc-8c0d-e8f71f96cdee.png", "ativo": true}, {"id": "escola", "nome": "Kit de Emergência Escolar", "preco": 119.99, "stock": 7, "imagem": "https://image2url.com/r2/default/images/1773163083608-c0ea3420-b493-4a22-b5b5-643d385d471b.png", "ativo": true}, {"id": "garrafa", "nome": "Garrafa Dobrável 500ml", "preco": 4.99, "stock": 60, "imagem": "https://image2url.com/r2/default/images/1773163454053-96f53f2b-4d19-4192-8b19-af132a449054.png", "ativo": true}, {"id": "pulseira", "nome": "Pulseira Multifunções", "preco": 5.0, "stock": 45, "imagem": "https://image2url.com/r2/default/images/1773163421437-f1c13840-fe8b-436b-9c92-327072663414.png", "ativo": true}, {"id": "estojo", "nome": "Estojo Primeiros Socorros", "preco": 9.35, "stock": 30, "imagem": "https://image2url.com/r2/default/images/1773165415214-7d3f488b-3a98-40e9-bfe9-199d3724443b.png", "ativo": true}, {"id": "saco", "nome": "Saco de Cama Impermeável", "preco": 5.0, "stock": 25, "imagem": "https://image2url.com/r2/default/images/1773164365622-b2981598-f441-495c-8949-f7280f5548b9.png", "ativo": true}, {"id": "canivete-multifuncoes", "nome": "Canivete Multifunções", "preco": 8.0, "stock": 30, "imagem": "https://image2url.com/r2/default/images/1773171943550-8d0dc670-d054-4003-8dd4-92325a623c97.png", "ativo": true}, {"id": "manta-termica", "nome": "Manta Térmica de Uso Único", "preco": 2.4, "stock": 80, "imagem": "https://image2url.com/r2/default/images/1773172014864-9e71bb1d-3de5-430e-9308-35952133d697.png", "ativo": true}, {"id": "tarp", "nome": "Tarp", "preco": 21.0, "stock": 18, "imagem": "https://image2url.com/r2/default/images/1773172469509-1f239380-c285-48f3-9a48-98b002547c59.png", "ativo": true}, {"id": "out-bas", "nome": "Kit Outdoor Básico", "preco": 20.0, "stock": 14, "imagem": "https://image2url.com/r2/default/images/1773172373775-e901a41d-7092-4ff2-bfcd-25a642df5c6b.png", "ativo": true}, {"id": "out-per", "nome": "Kit Outdoor Pernoite", "preco": 55.0, "stock": 10, "imagem": "https://image2url.com/r2/default/images/1773172773430-e6718b27-973c-45bc-bc22-e62f58074558.png", "ativo": true}, {"id": "fogao-portatil", "nome": "Fogão Portátil", "preco": 25.0, "stock": 16, "imagem": "https://image2url.com/r2/default/images/1773173098621-74b7dab7-4722-4b96-9f95-a31ea3b59db8.png", "ativo": true}];

const PE = {
  cartKey: "pe_cart",
  userKey: "pe_user",
  discountKey: "pe_discount",

  money(value) {
    return Number(value || 0).toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
  },

  getCart() {
    try { return JSON.parse(localStorage.getItem(this.cartKey)) || []; } catch(e) { return []; }
  },

  saveCart(cart) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.updateCartCount();
  },

  clearCart() {
    localStorage.removeItem(this.cartKey);
    this.updateCartCount();
  },

  getUser() {
    try { return JSON.parse(localStorage.getItem(this.userKey)); } catch(e) { return null; }
  },

  saveUser(user) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.updateAuthUI();
  },

  logout() {
    localStorage.removeItem(this.userKey);
    this.updateAuthUI();
    location.href = "login.html";
  },

  updateCartCount() {
    const count = this.getCart().reduce((s, i) => s + Number(i.quantidade || 0), 0);
    document.querySelectorAll(".cart-count").forEach(el => el.textContent = count);
  },

  updateAuthUI() {
    const user = this.getUser();
    document.body.classList.toggle("pe-logged-in", !!(user && user.token));
    document.querySelectorAll("[data-user-name]").forEach(el => el.textContent = user ? user.nome : "");
  },

  jsonp(action, payload = {}, timeoutMs = 7000) {
    return new Promise((resolve, reject) => {
      const callback = "pe_cb_" + Date.now() + "_" + Math.floor(Math.random() * 100000);
      const script = document.createElement("script");
      const timer = setTimeout(() => {
        cleanup();
        reject(new Error("A API não respondeu."));
      }, timeoutMs);

      function cleanup() {
        clearTimeout(timer);
        if (script.parentNode) script.parentNode.removeChild(script);
        try { delete window[callback]; } catch(e) { window[callback] = undefined; }
      }

      window[callback] = function(data) {
        cleanup();
        if (!data || !data.ok) reject(new Error((data && data.error) || "Erro na API."));
        else resolve(data);
      };

      script.onerror = function() {
        cleanup();
        reject(new Error("Não foi possível carregar a API."));
      };

      const params = new URLSearchParams();
      params.set("action", action);
      params.set("callback", callback);
      params.set("payload", JSON.stringify(payload || {}));
      params.set("_t", Date.now());
      script.src = window.PE_API_URL + "?" + params.toString();
      document.body.appendChild(script);
    });
  },

  applyProducts(products, sourceLabel = "") {
    const byId = Object.fromEntries((products || []).map(p => [String(p.id), p]));
    cleanupDuplicateProductUi();
    const cards = document.querySelectorAll("[data-product-id]");

    cards.forEach(card => {
      const id = String(card.dataset.productId || "");
      const product = byId[id];
      const stockEl = card.matches("[data-stock]") ? card : card.querySelector("[data-stock]");
      const priceEl = card.matches("[data-price]") ? card : card.querySelector("[data-price]");
      const imgEl = card.matches("[data-product-image]") ? card : card.querySelector("[data-product-image]");
      const btn = card.matches("[data-add-cart]") ? card : card.querySelector("[data-add-cart]");

      if (!product) {
        if (stockEl) {
          stockEl.textContent = "Stock indisponível";
          stockEl.classList.add("out");
        }
        return;
      }

      const stock = Number(product.stock || 0);
      const price = Number(product.preco || 0);

      if (priceEl) priceEl.textContent = this.money(price);
      if (imgEl && product.imagem) imgEl.src = product.imagem;

      if (stockEl) {
        stockEl.textContent = stock > 0 ? "Stock: " + stock : "Sem stock";
        stockEl.classList.toggle("out", stock <= 0);
      }

      if (btn) {
        btn.disabled = stock <= 0;
        btn.classList.toggle("disabled", stock <= 0);
        btn.onclick = (ev) => {
          if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
          }
          if (stock <= 0) return;
          this.addToCart({
            id: String(product.id),
            nome: String(product.nome),
            preco: price,
            imagem: String(product.imagem || "")
          });
        };
      }
    });
  },

  async loadProductsIntoCards(forceRefresh = false) {
    // Mostra logo stock local para nunca ficar preso em "A carregar..."
    this.applyProducts(window.PE_FALLBACK_PRODUCTS || [], "fallback");

    // Depois tenta atualizar com Google Sheets
    try {
      const data = await this.jsonp("listProducts", {}, 2500);
      if (data && data.products && data.products.length) {
        this.applyProducts(data.products, "api");
      }
    } catch(err) {
      console.warn("Stock via API não carregou. Mantido fallback.", err.message);
    }
  },

  addToCart(product) {
    const cart = this.getCart();
    const found = cart.find(item => item.id === product.id);
    if (found) found.quantidade += 1;
    else cart.push({ ...product, quantidade: 1 });
    this.saveCart(cart);
    alert("Produto adicionado ao carrinho.");
  },


  prefillCheckoutForm() {
    const form = document.getElementById("checkout-form");
    if (!form) return;

    const user = this.getUser();

    if (!user || !user.token) {
      form.style.display = "none";
      const msg = document.getElementById("checkout-login-warning");
      if (msg) msg.style.display = "block";
      return;
    }

    form.style.display = "grid";
    const msg = document.getElementById("checkout-login-warning");
    if (msg) msg.style.display = "none";

    if (form.nome && !form.nome.value) form.nome.value = user.nome || "";
    if (form.email && !form.email.value) form.email.value = user.email || "";

    if (form.nome) form.nome.readOnly = true;
    if (form.email) form.email.readOnly = true;
  },


  getDiscount() {
    try { return JSON.parse(localStorage.getItem(this.discountKey)) || null; } catch(e) { return null; }
  },

  saveDiscount(discount) {
    if (discount) localStorage.setItem(this.discountKey, JSON.stringify(discount));
    else localStorage.removeItem(this.discountKey);
  },

  availableDiscounts() {
    return {
      "EMERGENCIA10": { type: "percent", value: 10, label: "10% de desconto" },
      "ISCAC15": { type: "percent", value: 15, label: "15% de desconto" },
      "PORTAL5": { type: "fixed", value: 5, label: "5€ de desconto" }
    };
  },

  applyDiscountCode() {
    const input = document.getElementById("discount-code");
    const msg = document.getElementById("discount-message");
    if (!input) return;

    const code = String(input.value || "").trim().toUpperCase();
    const discounts = this.availableDiscounts();

    if (!code) {
      this.saveDiscount(null);
      if (msg) {
        msg.textContent = "Código removido.";
        msg.className = "coupon-msg";
      }
      this.renderCart();
      return;
    }

    if (!discounts[code]) {
      this.saveDiscount(null);
      if (msg) {
        msg.textContent = "Código inválido.";
        msg.className = "coupon-msg err";
      }
      this.renderCart();
      return;
    }

    this.saveDiscount({ code, ...discounts[code] });
    if (msg) {
      msg.textContent = "Código aplicado: " + discounts[code].label;
      msg.className = "coupon-msg ok";
    }
    this.renderCart();
  },

  calculateDiscount(subtotal) {
    const discount = this.getDiscount();
    if (!discount) return { code: "", amount: 0, label: "" };

    let amount = 0;
    if (discount.type === "percent") {
      amount = subtotal * Number(discount.value || 0) / 100;
    } else if (discount.type === "fixed") {
      amount = Number(discount.value || 0);
    }

    amount = Math.max(0, Math.min(subtotal, amount));
    return { code: discount.code, amount, label: discount.label || "" };
  },

  renderCart() {
    const list = document.getElementById("cart-items");
    if (!list) return;

    const cart = this.getCart();
    const subtotalEl = document.getElementById("cart-subtotal");
    const totalEl = document.getElementById("cart-total");

    if (!cart.length) {
      list.innerHTML = `<div class="app-card"><p>O carrinho está vazio.</p><br><a class="btn-navy" href="loja.html">Ir para a loja</a></div>`;
      if (subtotalEl) subtotalEl.textContent = this.money(0);
      if (totalEl) totalEl.textContent = this.money(0);
      const discountEl = document.getElementById("cart-discount");
      if (discountEl) discountEl.textContent = this.money(0);
      return;
    }

    list.innerHTML = cart.map(item => `
      <article class="cart-item">
        <img src="${item.imagem || ""}" alt="${item.nome}">
        <div>
          <h3>${item.nome}</h3>
          <p>${this.money(item.preco)} / unidade</p>
          <div class="cart-qty">
            <button type="button" onclick="window.PE.changeQty('${item.id}', -1)">−</button>
            <strong>${item.quantidade}</strong>
            <button type="button" onclick="window.PE.changeQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="remove-cart" type="button" onclick="window.PE.removeFromCart('${item.id}')">Remover</button>
      </article>
    `).join("");

    const subtotal = cart.reduce((s, i) => s + Number(i.preco) * Number(i.quantidade), 0);
    const discountInfo = this.calculateDiscount(subtotal);
    const finalTotal = Math.max(0, subtotal - discountInfo.amount);
    const discountEl = document.getElementById("cart-discount");
    const codeInput = document.getElementById("discount-code");
    const savedDiscount = this.getDiscount();

    if (subtotalEl) subtotalEl.textContent = this.money(subtotal);
    if (discountEl) discountEl.textContent = "- " + this.money(discountInfo.amount);
    if (totalEl) totalEl.textContent = this.money(finalTotal);
    if (codeInput && savedDiscount && !codeInput.value) codeInput.value = savedDiscount.code || "";
  },

  changeQty(id, delta) {
    const cart = this.getCart().map(i => i.id === id ? { ...i, quantidade: Math.max(1, Number(i.quantidade) + delta) } : i);
    this.saveCart(cart);
    this.renderCart();
    this.prefillCheckoutForm();
  },

  removeFromCart(id) {
    this.saveCart(this.getCart().filter(i => i.id !== id));
    this.renderCart();
    this.prefillCheckoutForm();
  },

  async checkout(event) {
    event.preventDefault();
    const msg = document.getElementById("checkout-message");
    const user = this.getUser();

    if (!user || !user.token) {
      msg.className = "app-message err";
      msg.textContent = "Tens de iniciar sessão.";
      return;
    }

    const cart = this.getCart();
    const paymentMethod = document.getElementById("payment-method") ? document.getElementById("payment-method").value : "";
    if (!paymentMethod) {
      msg.className = "app-message err";
      msg.textContent = "Seleciona um método de pagamento.";
      return;
    }
    if (!cart.length) {
      msg.className = "app-message err";
      msg.textContent = "O carrinho está vazio.";
      return;
    }

    try {
      const data = await this.jsonp("createOrder", {
        token: user.token,
        cliente: {
          nome: event.target.nome.value,
          email: event.target.email.value,
          telefone: event.target.telefone.value,
          morada: event.target.morada.value,
          notas: event.target.notas.value
        },
        items: cart.map(i => ({ produtoId: i.id, quantidade: Number(i.quantidade) })),
        desconto: this.calculateDiscount(cart.reduce((s, i) => s + Number(i.preco) * Number(i.quantidade), 0)),
        metodoPagamento: document.getElementById("payment-method") ? document.getElementById("payment-method").value : ""
      }, 15000);

      this.clearCart();
      this.saveDiscount(null);
      this.renderCart();
    this.prefillCheckoutForm();
      msg.className = "app-message ok";
      msg.textContent = "Encomenda registada com sucesso: " + data.orderId;
      this.loadProductsIntoCards();
    } catch(err) {
      msg.className = "app-message err";
      msg.textContent = err.message;
    }
  },

  async renderUserArea() {
    const guest = document.getElementById("user-guest");
    const dashboard = document.getElementById("user-dashboard");
    const list = document.getElementById("orders-list");

    if (!guest || !dashboard) return;

    const user = this.getUser();
    if (!user || !user.token) {
      guest.style.display = "block";
      dashboard.style.display = "none";
      return;
    }

    guest.style.display = "none";
    dashboard.style.display = "grid";

    document.querySelectorAll("[data-profile-name]").forEach(el => el.textContent = user.nome);
    document.querySelectorAll("[data-profile-email]").forEach(el => el.textContent = user.email);
    document.querySelectorAll("[data-profile-id]").forEach(el => el.textContent = user.id);
    document.querySelectorAll("[data-profile-initial]").forEach(el => el.textContent = (user.nome || "U").charAt(0).toUpperCase());

    try {
      const data = await this.jsonp("myOrders", { token: user.token }, 15000);
      const orders = data.orders || [];

      const statOrders = document.getElementById("stat-orders");
      const statTotal = document.getElementById("stat-total");
      const statPending = document.getElementById("stat-pending");
      if (statOrders) statOrders.textContent = orders.length;
      if (statTotal) statTotal.textContent = this.money(orders.reduce((s,o)=>s+Number(o.total||0),0));
      if (statPending) statPending.textContent = orders.filter(o => String(o.estado).toLowerCase()==="pendente").length;

      if (!list) return;
      if (!orders.length) {
        list.innerHTML = "<p>Ainda não tens encomendas.</p>";
        return;
      }

      list.innerHTML = orders.map(o => `<article class="order-card"><h3>Encomenda ${o.id}</h3><p><strong>Data:</strong> ${o.data || ""}</p><p><strong>Estado:</strong> ${o.estado}</p><p><strong>Total:</strong> ${window.PE.money(o.total)}</p></article>`).join("");
    } catch(err) {
      if (list) list.innerHTML = `<div class="app-message err" style="display:block">${err.message}</div>`;
    }
  },

  init() {
    this.updateCartCount();
    this.updateAuthUI();
    this.loadProductsIntoCards();
    this.renderCart();
    this.prefillCheckoutForm();
    this.renderUserArea();
  }
};

window.PE = PE;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => window.PE.init());
} else {
  window.PE.init();
}






