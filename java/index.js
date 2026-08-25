/* ================= JAM OPERASIONAL ================= */

function updateJamBuka() {

    const sekarang = new Date();
    const jam = sekarang.getHours();
    const buka = jam >= 8 && jam < 17;

    const teksJam = "08:00 - 17:00";
    const statusHtml = buka
        ? `${teksJam} <span class="status-buka">● Buka</span>`
        : `${teksJam} <span class="status-tutup">● Tutup</span>`;

    const jamBuka = document.getElementById("jamBuka");
    const jamBukaAbout = document.getElementById("jamBukaAbout");
    const jamStatus = document.getElementById("jamStatus");

    if (jamBuka) jamBuka.innerHTML = statusHtml;
    if (jamBukaAbout) jamBukaAbout.innerHTML = statusHtml;
    if (jamStatus) jamStatus.textContent = buka ? "Buka sekarang" : "Tutup — buka lagi jam 08:00";
}

updateJamBuka();

/* ================= KARTU PRODUK ================= */

function buildCard(produk, { compact = false } = {}) {

    const stockNo = "UNIT-" + String(produk.id).padStart(3, "0");

    return `
        <div class="card">
            <a href="html/product.html?id=${produk.id}">
                <span class="card-stock">${stockNo}</span>
                <div class="card-image-wrap">
                    <img class="card-image" src="gambar/${produk.icon}.svg" alt="${produk.title}" loading="lazy">
                </div>
                <h3>${produk.title}</h3>
                <span class="card-tag">${produk.tag}</span>
                <span class="card-price">${formatRupiah(produk.price)}</span>
            </a>
        </div>
    `;
}

const bestSellerContainer = document.getElementById("bestSellerContainer");
const productContainer = document.getElementById("productContainer");

if (bestSellerContainer) {
    const bestSellers = PRODUCTS.filter((p) => p.tag === "Best Seller");
    bestSellerContainer.innerHTML = bestSellers.map((p) => buildCard(p)).join("");
}

if (productContainer) {
    const lainnya = PRODUCTS.filter((p) => p.tag !== "Best Seller");
    productContainer.innerHTML = lainnya.map((p) => buildCard(p, { compact: true })).join("");
}

/* ================= SPEC TICKER ================= */

const tickerTrack = document.getElementById("tickerTrack");

if (tickerTrack) {

    const highlights = PRODUCTS.map(
        (p) => `<span><b>${p.title}</b> — ${p.specs[0].value}</span>`
    ).join("");

    // digandakan biar animasi looping-nya mulus tanpa jeda
    tickerTrack.innerHTML = highlights + highlights;
}

