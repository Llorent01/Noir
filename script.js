/* ============================================================
   NOIR — script.js
   Reemplaza WHATSAPP_NUMBER por tu número real (con indicativo,
   sin +, sin espacios). Ej: Colombia = 57 3001234567
   ============================================================ */
const WHATSAPP_NUMBER = "573205104511";

/* ============================================================
   DATOS DE PRODUCTOS
   full100: null  -> esa fragancia solo existe en decant
   ============================================================ */
const PRODUCTS = [
  {
    id: 1, image: "img/Perfume 100ml/Night out.jpg", name: "9PM Night Out", brand: "Afnan", gender: "Hombre",
    family: "Oriental Especiado", familyTag: "Oriental",
    notes: "Pitahaya, bergamota, coñac, lavanda, manzana, cardamomo, Mahonial, gamuza, toffee, cedro, haba tonka, Akigalawood, Ambrofix y pachulí",
    desc: "Un oriental especiado intenso y magnético, creado para la noche. Su salida frutal y licorosa evoluciona hacia un corazón cálido de cardamomo, gamuza y toffee, sobre un fondo amaderado de haba tonka y pachulí.",
    price5: 25000, price10: 45000, full100: 320000,
    bestSeller: true, inStock: true
  },
  {
  id: 2, image: "img/Perfume 100ml/Hawas Fire.jpg", name: "Hawas Fire", brand: "Rasasi", gender: "Hombre",

  family: "Amaderado Especiado", familyTag: "Amaderado",

  notes: "Canela, mandarina, pimienta rosa, lavanda, incienso, flor de azahar, vainilla, ámbar y maderas",

  desc: "Una fragancia intensa y moderna con una combinación cálida de especias, notas aromáticas y un fondo amaderado. Su carácter envolvente y llamativo la convierte en una excelente opción para la noche y ocasiones especiales.",

  price5: 25000, price10: 45000, full100: 0,

  bestSeller: false, inStock: true
  },
  {
  id: 3, image: "img/Perfume 100ml/Khamrah dukhan.jpg", name: "Khamrah Dukhan", brand: "Lattafa", gender: "Unisex",

  family: "Ambarado Especiado", familyTag: "Ambarado",

  notes: "Canela, pimienta, mandarina, tabaco, incienso, cítricos, haba tonka, ámbar, benjuí y maderas",

  desc: "Una fragancia cálida, especiada y envolvente con un carácter dulce y ahumado. Su combinación de tabaco, especias y notas ambaradas crea un aroma intenso y sofisticado, ideal para la noche y ocasiones especiales.",

  price5: 25000, price10: 45000, full100: 0,

  bestSeller: false, inStock: true
  },
  {
    id: 8, image: "img/Perfume 100ml/9pm.jpg", name: "9PM", brand: "Afnan", gender: "Hombre",
    family: "Oriental Especiado", familyTag: "Oriental",
    notes: "Manzana, canela, vainilla, ámbar",
    desc: "Cálido, dulce y envolvente. Una fragancia oriental pensada para las noches donde quieres dejar huella.",
    price5: 25000, price10: 45000, full100: 220000,
    bestSeller: false, inStock: false
  },
  {
    id: 9, image: "img/Perfume 100ml/Intense man.jpg", name: "Club de Nuit Intense Man", brand: "Afnan", gender: "Hombre",
    family: "Aromático Amaderado", familyTag: "Amaderado",
    notes: "Piña, manzana, abedul, almizcle",
    desc: "Fresco, afrutado y con una estela amaderada intensa. Un clásico moderno con una relación calidad-precio excepcional.",
    price5: 25000, price10: 45000, full100: 195000,
    bestSeller: false, inStock: true
  },
  {
    id: 10, image: "img/Perfume 100ml/9am dive.jpg", name: "9AM Dive", brand: "Afnan", gender: "Hombre",
    family: "Acuático Fresco", familyTag: "Fresco",
    notes: "Bergamota, sal marina, ámbar, almizcle",
    desc: "Fresco y acuático, inspirado en la brisa del mar. Ideal para el uso diario en climas cálidos.",
    price5: 25000, price10: 45000, full100: 210000,
    bestSeller: false, inStock: true
  }
];

const TICKER_MESSAGES = [
  "Perfumes 100% originales", "Decants de 5 ML y 10 ML",
  "Envíos a toda Colombia", "Empaque discreto y cuidado",
  "Prueba antes de comprar el frasco completo", "Fraccionado artesanal"
];

/* ============================================================
   HELPERS
   ============================================================ */
const fmt = n => "$" + Number(n).toLocaleString("es-CO");
const byId = id => PRODUCTS.find(p => p.id === id);

function waLink(message){
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

function svgDecant(){
  return `<svg class="ripple-svg" viewBox="0 0 120 160"><g class="bottle">
    <rect x="30" y="40" width="60" height="105" rx="5"/>
    <rect x="48" y="16" width="24" height="26" rx="2"/>
    <rect x="42" y="4" width="36" height="14" rx="3" class="bottle-cap"/>
    <line x1="38" y1="72" x2="82" y2="72" stroke-width=".6"/>
    <line x1="38" y1="92" x2="82" y2="92" stroke-width=".6"/>
    <line x1="38" y1="112" x2="82" y2="112" stroke-width=".6"/>
  </g></svg>`;
}
function svgFull(){
  return `<svg class="ripple-svg" viewBox="0 0 120 170"><g class="bottle">
    <rect x="18" y="46" width="84" height="112" rx="6"/>
    <rect x="44" y="14" width="32" height="34" rx="3"/>
    <rect x="36" y="2" width="48" height="14" rx="3" class="bottle-cap"/>
    <line x1="28" y1="82" x2="92" y2="82" stroke-width=".6"/>
    <line x1="28" y1="102" x2="92" y2="102" stroke-width=".6"/>
    <line x1="28" y1="122" x2="92" y2="122" stroke-width=".6"/>
  </g></svg>`;
}

/* ============================================================
   STATE
   ============================================================ */
let cart = []; // {id, size:'5'|'10'|'100', qty}
let selectedSize = {}; // productId -> '5' | '10'  (per card selection)
let modalProductId = null;
let modalSize = "5";

/* ============================================================
   DOM REFS
   ============================================================ */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

const featuredGrid   = $("#featuredGrid");
const bestsellerRail = $("#bestsellerRail");
const catalogGrid    = $("#catalogGrid");
const p100Grid       = $("#p100Grid");

/* ============================================================
   CARD BUILDERS
   ============================================================ */
function sizeToggleHTML(p, size){
  return `
  <div class="size-toggle" data-id="${p.id}">
    <button type="button" class="size-opt ${size==='5'?'active':''}" data-size="5">5 ML</button>
    <button type="button" class="size-opt ${size==='10'?'active':''}" data-size="10">10 ML</button>
  </div>`;
}

function priceFor(p, size){
  return size === "10" ? p.price10 : p.price5;
}

function decantCard(p, mode){
  // mode: 'full' -> add to cart + whatsapp buttons (featured / bestsellers)
  // mode: 'catalog' -> "Ver fragancia" button
  const size = selectedSize[p.id] || "5";
  const price = priceFor(p, size);
  const badge = p.bestSeller ? `<span class="card-badge">Más vendido</span>` : (!p.inStock ? `<span class="card-badge badge-outline">Agotado</span>` : "");

  const actions = mode === "full"
    ? `<div class="card-actions">
         <button type="button" class="btn btn-primary btn-sm add-cart-btn" data-id="${p.id}" ${!p.inStock?"disabled":""}>Agregar al carrito</button>
         <a class="btn btn-whatsapp btn-sm quick-wa-btn" data-id="${p.id}" target="_blank" rel="noopener">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 12a8 8 0 1 1-3.8-6.8L20 4l-1.1 3.9A7.96 7.96 0 0 1 20 12Z"/><path d="M8.5 9.5c.3 2.8 2.7 5.2 5.5 5.5"/></svg>
           Comprar por WhatsApp
         </a>
       </div>`
    : `<div class="card-actions">
         <button type="button" class="btn btn-outline btn-sm btn-block view-btn" data-id="${p.id}">Ver fragancia</button>
       </div>`;

  return `
  <article class="card" data-card-id="${p.id}">
    <div class="card-media">
      ${badge}
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="card-body">
      <span class="card-brand">${p.brand}</span>
      <h3 class="card-name">${p.name}</h3>
      <span class="card-family">${p.family}</span>
      ${sizeToggleHTML(p, size)}
      <div class="card-price">${fmt(price)}<small>/ ${size} ML</small></div>
      ${actions}
    </div>
  </article>`;
}

function fullCard(p){
  return `
  <article class="card card-100" data-card-id="${p.id}">
    <div class="card-media">
      ${p.bestSeller ? `<span class="card-badge">Más vendido</span>` : ""}
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="card-body">
      <span class="card-brand">${p.brand}</span>
      <h3 class="card-name">${p.name}</h3>
      <span class="card-family">100 ML</span>
      <div class="card-price">${fmt(p.full100)}</div>
      <div class="card-actions">
        <button type="button" class="btn btn-primary btn-sm add-cart-100-btn" data-id="${p.id}">Agregar al carrito</button>
      </div>
    </div>
  </article>`;
}

/* ============================================================
   RENDER
   ============================================================ */
function renderFeatured(){
  const items = PRODUCTS.filter(p => p.bestSeller).slice(0, 4);
  featuredGrid.innerHTML = items.map(p => decantCard(p, "full")).join("");
}

function renderBestsellers(){
  const items = PRODUCTS.filter(p => p.bestSeller);
  bestsellerRail.innerHTML = items.map(p => decantCard(p, "full")).join("");
}

function renderCatalog(list){
  catalogGrid.innerHTML = list.length
    ? list.map(p => decantCard(p, "catalog")).join("")
    : `<p class="empty-state">No encontramos fragancias con esos filtros. Intenta ajustar tu búsqueda.</p>`;
  $("#filtersCount").textContent = list.length ? `${list.length} fragancias` : "";
}

function renderP100(){
  const items = PRODUCTS.filter(p => p.full100 !== null);
  p100Grid.innerHTML = items.map(fullCard).join("");
}

function renderTicker(){
  const seq = [...TICKER_MESSAGES, ...TICKER_MESSAGES];
  $("#tickerTrack").innerHTML = seq.map(t => `<span class="ticker-item">${t}</span>`).join("");
}

function populateFilters(){
  const brands = [...new Set(PRODUCTS.map(p => p.brand))].sort();
  const families = [...new Set(PRODUCTS.map(p => p.familyTag))].sort();
  const brandSel = $("#filterBrand");
  const familySel = $("#filterFamily");
  brands.forEach(b => brandSel.insertAdjacentHTML("beforeend", `<option value="${b}">${b}</option>`));
  families.forEach(f => familySel.insertAdjacentHTML("beforeend", `<option value="${f}">${f}</option>`));
}

/* ============================================================
   FILTERS
   ============================================================ */
let bestsellerOnly = false;
let stockOnly = false;

function applyFilters(){
  const brand = $("#filterBrand").value;
  const gender = $("#filterGender").value;
  const family = $("#filterFamily").value;
  const priceRange = $("#filterPrice").value;
  const query = $("#catalogSearch").value.trim().toLowerCase();

  let list = PRODUCTS.filter(p => {
    if (brand && p.brand !== brand) return false;
    if (gender && p.gender !== gender) return false;
    if (family && p.familyTag !== family) return false;
    if (bestsellerOnly && !p.bestSeller) return false;
    if (stockOnly && !p.inStock) return false;
    if (query && !(p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query))) return false;
    if (priceRange){
      const [min, max] = priceRange.split("-").map(Number);
      if (p.price5 < min || p.price5 > max) return false;
    }
    return true;
  });

  renderCatalog(list);
  attachCatalogCardEvents();
}

/* ============================================================
   CART LOGIC
   ============================================================ */
function addToCart(id, size, qty = 1){
  const existing = cart.find(c => c.id === id && c.size === size);
  if (existing){ existing.qty += qty; }
  else { cart.push({ id, size, qty }); }
  renderCart();
  const p = byId(id);
  showToast(`${p.name} — ${size} ML agregado al carrito`);
}

function removeFromCart(id, size){
  cart = cart.filter(c => !(c.id === id && c.size === size));
  renderCart();
}

function changeQty(id, size, delta){
  const item = cart.find(c => c.id === id && c.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){ removeFromCart(id, size); return; }
  renderCart();
}

function cartTotal(){
  return cart.reduce((sum, c) => {
    const p = byId(c.id);
    const price = c.size === "100" ? p.full100 : (c.size === "10" ? p.price10 : p.price5);
    return sum + price * c.qty;
  }, 0);
}

function variantLabel(size){
  return size === "100" ? "Perfume completo — 100 ML" : `Decant — ${size} ML`;
}

function renderCart(){
  const countEl = $("#cartCount");
  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  countEl.textContent = totalQty;

  const itemsEl = $("#cartItems");
  if (!cart.length){
    itemsEl.innerHTML = `<div class="cart-empty">Tu carrito está vacío.<br>Explora nuestros decants y encuentra tu próxima fragancia.</div>`;
  } else {
    itemsEl.innerHTML = cart.map(c => {
      const p = byId(c.id);
      const price = c.size === "100" ? p.full100 : (c.size === "10" ? p.price10 : p.price5);
      return `
      <div class="cart-item" data-id="${c.id}" data-size="${c.size}">
        <div class="cart-item-media">${c.size === "100" ? svgFull() : svgDecant()}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-variant">${variantLabel(c.size)}</div>
          <div class="cart-item-row">
            <div class="qty-control">
              <button type="button" class="qty-minus">−</button>
              <span>${c.qty}</span>
              <button type="button" class="qty-plus">+</button>
            </div>
            <div class="cart-item-price">${fmt(price * c.qty)}</div>
          </div>
          <button type="button" class="cart-item-remove">Eliminar</button>
        </div>
      </div>`;
    }).join("");
  }

  $("#cartSubtotal").textContent = fmt(cartTotal());

  const waMsg = buildCartWhatsappMessage();
  $("#cartWhatsappBtn").href = waLink(waMsg);

  attachCartItemEvents();
}

function buildCartWhatsappMessage(){
  if (!cart.length){
    return "Hola, quiero conocer más sobre las fragancias de Noir.";
  }
  let msg = "Hola, quiero realizar este pedido:\n\n";
  cart.forEach(c => {
    const p = byId(c.id);
    const price = c.size === "100" ? p.full100 : (c.size === "10" ? p.price10 : p.price5);
    msg += `Perfume: ${p.name}\nPresentación: ${c.size === "100" ? "100 ML (frasco completo)" : c.size + " ML (decant)"}\nCantidad: ${c.qty}\nPrecio: ${fmt(price * c.qty)}\n\n`;
  });
  msg += `Total del pedido: ${fmt(cartTotal())}`;
  return msg;
}

function attachCartItemEvents(){
  $$(".cart-item").forEach(el => {
    const id = Number(el.dataset.id);
    const size = el.dataset.size;
    el.querySelector(".qty-minus").addEventListener("click", () => changeQty(id, size, -1));
    el.querySelector(".qty-plus").addEventListener("click", () => changeQty(id, size, 1));
    el.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(id, size));
  });
}

/* ============================================================
   CARD EVENTS (size toggle, add to cart, quick whatsapp, view)
   ============================================================ */
function attachSizeToggleEvents(scopeEl){
  scopeEl.querySelectorAll(".size-toggle").forEach(toggle => {
    const id = Number(toggle.dataset.id);
    toggle.querySelectorAll(".size-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedSize[id] = btn.dataset.size;
        toggle.querySelectorAll(".size-opt").forEach(b => b.classList.toggle("active", b === btn));
        const card = toggle.closest(".card");
        const p = byId(id);
        const price = priceFor(p, btn.dataset.size);
        const priceEl = card.querySelector(".card-price");
        priceEl.innerHTML = `${fmt(price)}<small>/ ${btn.dataset.size} ML</small>`;
      });
    });
  });
}

function attachAddCartEvents(scopeEl){
  scopeEl.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const size = selectedSize[id] || "5";
      addToCart(id, size, 1);
      openCart();
    });
  });
  scopeEl.querySelectorAll(".add-cart-100-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      addToCart(id, "100", 1);
      openCart();
    });
  });
  scopeEl.querySelectorAll(".quick-wa-btn").forEach(btn => {
    const id = Number(btn.dataset.id);
    const size = selectedSize[id] || "5";
    const p = byId(id);
    const price = priceFor(p, size);
    const msg = `Hola, quiero realizar este pedido:\n\nPerfume: ${p.name}\nPresentación: ${size} ML (decant)\nCantidad: 1\nPrecio: ${fmt(price)}`;
    btn.href = waLink(msg);
  });
}

function attachViewEvents(scopeEl){
  scopeEl.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => openModal(Number(btn.dataset.id)));
  });
  scopeEl.querySelectorAll(".card-name").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      const card = el.closest("[data-card-id]");
      if (card) openModal(Number(card.dataset.cardId));
    });
  });
}

function attachAllCardEvents(scopeEl){
  attachSizeToggleEvents(scopeEl);
  attachAddCartEvents(scopeEl);
  attachViewEvents(scopeEl);
}

function attachCatalogCardEvents(){ attachAllCardEvents(catalogGrid); }

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id){
  modalProductId = id;
  modalSize = "5";
  const p = byId(id);

  $("#modalMedia").querySelector("svg")?.remove();
  $("#modalMedia").insertAdjacentHTML("beforeend", svgDecant());
  $("#modalBrand").textContent = p.brand;
  $("#modalName").textContent = p.name;
  $("#modalDesc").textContent = p.desc;
  $("#modalNotes").textContent = p.notes;

  renderModalSize();

  const fullNote = $("#modalFullNote");
  if (p.full100){
    fullNote.innerHTML = `<p>¿Quieres el perfume completo?</p><a href="#perfumes-100" id="modalFullLink">Ver presentación 100 ML</a>`;
    fullNote.querySelector("#modalFullLink").addEventListener("click", () => closeModal());
  } else {
    fullNote.innerHTML = `<p>Esta fragancia está disponible exclusivamente en decant.</p>`;
  }

  $("#modalAddCart").onclick = () => { addToCart(p.id, modalSize, 1); };
  $("#modalAddCart").disabled = !p.inStock;

  $("#modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderModalSize(){
  const p = byId(modalProductId);
  const toggle = $("#modalSizeToggle");
  toggle.innerHTML = `
    <button type="button" class="size-opt ${modalSize==='5'?'active':''}" data-size="5">5 ML</button>
    <button type="button" class="size-opt ${modalSize==='10'?'active':''}" data-size="10">10 ML</button>`;
  toggle.querySelectorAll(".size-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      modalSize = btn.dataset.size;
      renderModalSize();
      updateModalPrice();
    });
  });
  updateModalPrice();
}

function updateModalPrice(){
  const p = byId(modalProductId);
  const price = priceFor(p, modalSize);
  $("#modalPrice").innerHTML = `${fmt(price)} <small style="font-family:var(--font-body); font-size:.62rem; color:var(--muted); letter-spacing:.1em;">/ ${modalSize} ML</small>`;
  const msg = `Hola, quiero realizar este pedido:\n\nPerfume: ${p.name}\nPresentación: ${modalSize} ML (decant)\nCantidad: 1\nPrecio: ${fmt(price)}`;
  $("#modalWhatsapp").href = waLink(msg);
}

function closeModal(){
  $("#modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================================
   CART DRAWER OPEN / CLOSE
   ============================================================ */
function openCart(){
  $("#cartDrawer").classList.add("open");
  $("#overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart(){
  $("#cartDrawer").classList.remove("open");
  $("#overlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast(text){
  const toast = $("#toast");
  $("#toastText").textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ============================================================
   MOBILE NAV / SEARCH
   ============================================================ */
function initNav(){
  $("#navToggle").addEventListener("click", () => $("#mobileNav").classList.add("open"));
  $("#navClose").addEventListener("click", () => $("#mobileNav").classList.remove("open"));
  $$("#mobileNav a").forEach(a => a.addEventListener("click", () => $("#mobileNav").classList.remove("open")));

  $("#searchToggle").addEventListener("click", () => {
    $("#searchWrap").classList.toggle("open");
    if ($("#searchWrap").classList.contains("open")) $("#searchInput").focus();
  });
  $("#searchInput").addEventListener("keydown", e => {
    if (e.key === "Enter"){
      $("#catalogSearch").value = $("#searchInput").value;
      document.getElementById("decants").scrollIntoView({ behavior: "smooth" });
      applyFilters();
    }
  });
  $("#mobileSearchInput").addEventListener("keydown", e => {
    if (e.key === "Enter"){
      $("#catalogSearch").value = $("#mobileSearchInput").value;
      $("#mobileNav").classList.remove("open");
      document.getElementById("decants").scrollIntoView({ behavior: "smooth" });
      applyFilters();
    }
  });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal(){
  const els = $$(".reveal");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
}

/* ============================================================
   INIT
   ============================================================ */
function initWhatsappLinks(){
  const generalMsg = "Hola, quiero conocer más sobre las fragancias de Noir.";
  $("#headerWhatsapp").href = waLink(generalMsg);
  $("#fabWhatsapp").href = waLink(generalMsg);
  $("#contactWhatsappBtn").href = waLink(generalMsg);
  $("#contactWhatsappText").textContent = "+" + WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}

function init(){
  populateFilters();
  renderTicker();
  renderFeatured();
  renderBestsellers();
  renderCatalog(PRODUCTS);
  renderP100();
  renderCart();
  initWhatsappLinks();
  initNav();
  initReveal();

  attachAllCardEvents(featuredGrid);
  attachAllCardEvents(bestsellerRail);
  attachAllCardEvents(catalogGrid);
  attachAddCartEvents(p100Grid);

  // Filters
  ["filterBrand","filterGender","filterFamily","filterPrice"].forEach(id => {
    $("#" + id).addEventListener("change", applyFilters);
  });
  $("#catalogSearch").addEventListener("input", applyFilters);
  $("#filterBestseller").addEventListener("click", (e) => {
    bestsellerOnly = !bestsellerOnly;
    e.target.classList.toggle("active", bestsellerOnly);
    applyFilters();
  });
  $("#filterStock").addEventListener("click", (e) => {
    stockOnly = !stockOnly;
    e.target.classList.toggle("active", stockOnly);
    applyFilters();
  });

  // Cart drawer
  $("#cartToggle").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#overlay").addEventListener("click", () => { closeCart(); closeModal(); });

  // Modal
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalOverlay").addEventListener("click", (e) => { if (e.target.id === "modalOverlay") closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape"){ closeModal(); closeCart(); } });

  // Contact form (demo only — no backend)
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cfName").value;
    const msg = $("#cfMsg").value;
    const waMsg = `Hola, soy ${name}. ${msg}`;
    window.open(waLink(waMsg), "_blank");
    e.target.reset();
  });
}

document.addEventListener("DOMContentLoaded", init);
