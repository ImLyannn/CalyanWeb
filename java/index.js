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

/* ================= KARTU LAYANAN ================= */
/* Jumlah maksimal kartu yang ditampilkan di baris "Layanan Lainnya"
   sebelum kartu "Lihat Lebih Lengkap" muncul di ujung baris. */
const LAINNYA_LIMIT = 6;

const bestSellerContainer = document.getElementById("bestSellerContainer");
const productContainer = document.getElementById("productContainer");

if (bestSellerContainer) {
    const layananUnggulan = PRODUCTS.filter((p) => p.tag === "Unggulan");
    bestSellerContainer.innerHTML = layananUnggulan.map((p) => buildProductCard(p)).join("");
}

if (productContainer) {
    const lainnya = PRODUCTS.filter((p) => p.tag !== "Unggulan").slice(0, LAINNYA_LIMIT);
    productContainer.innerHTML = lainnya.map((p) => buildProductCard(p)).join("") + buildMoreCard();
}
