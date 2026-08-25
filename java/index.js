/* ================= JAM OPERASIONAL ================= */
        window.SITE_BASE = { img: "gambar/", productPage: "html/product.html" };

        // ================= PRELOADER & ENTRANCE LOGIC =================
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            
            // Beri sedikit jeda agar animasi loading bar terlihat sempurna
            setTimeout(() => {
                preloader.classList.add('hidden');
                
                // Opsional: hapus dari DOM setelah transisi selesai untuk menghemat memori
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 600); // Sesuai dengan durasi transition di CSS (0.6s)
            }, 1200); // Total waktu preloader tampil (1.2 detik)
        });

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
/* Jumlah maksimal kartu yang ditampilkan di baris "Produk Lainnya"
   sebelum kartu "Lihat Lebih Lengkap" muncul di ujung baris. */
const LAINNYA_LIMIT = 6;

const bestSellerContainer = document.getElementById("bestSellerContainer");
const productContainer = document.getElementById("productContainer");

if (bestSellerContainer) {
    const bestSellers = PRODUCTS.filter((p) => p.tag === "Best Seller");
    bestSellerContainer.innerHTML = bestSellers.map((p) => buildProductCard(p)).join("");
}

if (productContainer) {
    const lainnya = PRODUCTS.filter((p) => p.tag !== "Best Seller").slice(0, LAINNYA_LIMIT);
    productContainer.innerHTML = lainnya.map((p) => buildProductCard(p)).join("") + buildMoreCard();
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
