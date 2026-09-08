/* ================= JAM OPERASIONAL ================= */
window.SITE_BASE = { img: "gambar/", productPage: "html/product.html" };

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

    if (jamStatus) {
        jamStatus.textContent = buka ? "Buka sekarang" : "Tutup — buka lagi jam 08:00";
        jamStatus.classList.toggle("status-buka", buka);
        jamStatus.classList.toggle("status-tutup", !buka);
    }
}

updateJamBuka();

/* ================= ACAK URUTAN ================= */
/* Fisher-Yates shuffle — dipakai biar urutan layanan yang tampil
   di "Best Seller" dan "Layanan Lainnya" gak keliatan berurutan
   sesuai id, tiap kali halaman di-reload urutannya beda lagi. */
function shuffleArray(arr) {
    const hasil = [...arr];
    for (let i = hasil.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [hasil[i], hasil[j]] = [hasil[j], hasil[i]];
    }
    return hasil;
}

/* ================= KARTU LAYANAN ================= */
/* Jumlah maksimal kartu yang ditampilkan di baris "Layanan Lainnya"
   sebelum kartu "Lihat Lebih Lengkap" muncul di ujung baris. */
const LAINNYA_LIMIT = 6;

const bestSellerContainer = document.getElementById("bestSellerContainer");
const productContainer = document.getElementById("productContainer");

if (bestSellerContainer) {
    const bestSellers = shuffleArray(PRODUCTS.filter((p) => p.tag === "Best Seller"));
    bestSellerContainer.innerHTML = bestSellers.map((p) => buildProductCard(p)).join("");
}

if (productContainer) {
    const lainnya = shuffleArray(PRODUCTS.filter((p) => p.tag !== "Best Seller")).slice(0, LAINNYA_LIMIT);
    productContainer.innerHTML = lainnya.map((p) => buildProductCard(p)).join("") + buildMoreCard();
}
