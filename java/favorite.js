/* ================================================================
   FAVORIT — pin barang disukai pengguna, disimpan di localStorage
   Dipakai bareng oleh index.js, product.js & catalog.js karena semua
   kartu produk (buildProductCard) sudah menyertakan tombol hati ini.
================================================================= */

const FAVORITES_KEY = "calyanprint-favorites";

/* ---------- baca / simpan daftar id favorit ---------- */

function getFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(list) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
  } catch (e) {
    /* localStorage penuh / diblokir browser — abaikan diam-diam */
  }
}

function isFavorite(id) {
  return getFavorites().includes(Number(id));
}

/* tambah/hapus id dari daftar favorit, kembalikan status barunya (true = tersimpan) */
function toggleFavorite(id) {
  const numId = Number(id);
  const favs = getFavorites();
  const idx = favs.indexOf(numId);
  let aktif;

  if (idx === -1) {
    favs.push(numId);
    aktif = true;
  } else {
    favs.splice(idx, 1);
    aktif = false;
  }

  saveFavorites(favs);
  return aktif;
}

/* ---------- render ulang seksi "Favorit Saya" (kalau ada di halaman) ---------- */

function renderFavoritesSection() {

  const container = document.getElementById("favoriteContainer");
  const emptyState = document.getElementById("favoriteEmpty");
  const countLabel = document.getElementById("favoriteCount");
  if (!container) return;

  const favIds = getFavorites();
  const favProduk = favIds
    .map((id) => (typeof getProductById === "function" ? getProductById(id) : null))
    .filter(Boolean);

  if (countLabel) {
    countLabel.textContent = favProduk.length + " LAYANAN DISIMPAN";
  }

  if (favProduk.length === 0) {
    container.innerHTML = "";
    container.style.display = "none";
    if (emptyState) emptyState.style.display = "flex";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  container.style.display = "";
  container.innerHTML = favProduk.map((p) => buildProductCard(p)).join("");
}

/* ---------- update semua tombol hati yang punya id sama di halaman ---------- */

function syncFavButtons(id, aktif) {
  document.querySelectorAll('.card-fav-btn[data-id="' + id + '"]').forEach((el) => {
    el.classList.toggle("active", aktif);
    el.setAttribute("aria-pressed", aktif ? "true" : "false");

    const label = el.querySelector("span");
    if (label) label.textContent = aktif ? "Tersimpan" : "Favorit";
  });
}

/* ---------- delegasi klik — nempel di semua tombol .card-fav-btn ---------- */

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-fav-btn");
  if (!btn) return;

  e.preventDefault();
  e.stopPropagation();

  const id = Number(btn.dataset.id);
  const aktif = toggleFavorite(id);

  syncFavButtons(id, aktif);
  renderFavoritesSection();
});

document.addEventListener("DOMContentLoaded", renderFavoritesSection);
