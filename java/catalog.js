/* ================================================================
   CATALOG MODAL — "Lihat Lebih Lengkap"
   Modal katalog penuh dengan filter kategori (semua, mouse, keyboard,
   headset, speaker, mousepad, monitor). Dipasang sekali lewat script
   ini, dipanggil dari index.js maupun product.js.
================================================================= */

let activeCategory = "semua";

/* ---------- bangun markup modal & suntikkan ke body ---------- */

function injectCatalogModal() {

  if (document.getElementById("catalogModal")) return;

  const filterButtons = CATEGORIES.map(
    (cat) => `
      <button
        type="button"
        class="filter-btn${cat.key === "semua" ? " active" : ""}"
        data-category="${cat.key}"
      >${cat.label}</button>
    `
  ).join("");

  const modal = document.createElement("div");
  modal.className = "catalog-modal";
  modal.id = "catalogModal";
  modal.innerHTML = `
    <div class="catalog-modal-inner">
      <div class="catalog-modal-header">
        <div>
          <span class="section-index">KATALOG LENGKAP</span>
          <h2>Semua Layanan</h2>
        </div>
        <button type="button" class="modal-close" id="catalogModalClose" aria-label="Tutup katalog">✕</button>
      </div>

      <div class="category-filters" id="categoryFilters">
        ${filterButtons}
      </div>

      <div class="modal-grid" id="modalGrid"></div>
    </div>
  `;

  document.body.appendChild(modal);

  /* tutup modal */
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeCatalogModal();
  });

  document.getElementById("catalogModalClose").addEventListener("click", closeCatalogModal);

  /* filter kategori */
  document.getElementById("categoryFilters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    activeCategory = btn.dataset.category;

    document
      .querySelectorAll(".filter-btn")
      .forEach((el) => el.classList.toggle("active", el === btn));

    renderCatalogGrid();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCatalogModal();
  });
}

/* ---------- render grid produk sesuai kategori aktif ---------- */

function renderCatalogGrid() {

  const grid = document.getElementById("modalGrid");
  if (!grid) return;

  const produkTampil =
    activeCategory === "semua"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  grid.innerHTML = produkTampil.map((p) => buildProductCard(p)).join("");
}

/* ---------- buka / tutup ---------- */

function openCatalogModal(category = "semua") {

  injectCatalogModal();

  activeCategory = category;
  document
    .querySelectorAll(".filter-btn")
    .forEach((el) => el.classList.toggle("active", el.dataset.category === category));

  renderCatalogGrid();

  const modal = document.getElementById("catalogModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCatalogModal() {
  const modal = document.getElementById("catalogModal");
  if (!modal) return;

  modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- pasang trigger di kartu "Lihat Lebih Lengkap" ---------- */

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("#moreCatalogTrigger");
  if (trigger) openCatalogModal("semua");
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  if (e.target.id === "moreCatalogTrigger") {
    e.preventDefault();
    openCatalogModal("semua");
  }
});
