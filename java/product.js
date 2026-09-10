const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const produk = getProductById(id);

const productDetail = document.getElementById("productDetail");

if (!produk) {

    productDetail.innerHTML = `
        <div class="product-info">
            <p class="card-stock">Layanan tidak ditemukan</p>
            <h1>Sepertinya link ini sudah tidak berlaku</h1>
            <p>Layanan yang dicari mungkin sudah dipindah atau link-nya salah ketik. Coba kembali ke katalog untuk melihat layanan yang tersedia.</p>
            <a class="hero-cta" href="../index.html#product">Kembali ke katalog</a>
        </div>
    `;

} else {

    document.title = produk.title + " — KUBU BALI PRINTING";

    const pImage = document.getElementById("pImage");
    const pStock = document.getElementById("pStock");
    const pTitle = document.getElementById("pTitle");
    const pPrice = document.getElementById("pPrice");
    const pDescription = document.getElementById("pDescription");
    const pSpecs = document.getElementById("pSpecs");
    const pOrder = document.getElementById("pOrder");

    const productImageWrap = pImage.closest(".product-image");
    if (typeof isPlaceholderImage === "function" && isPlaceholderImage(produk.image)) {
        pImage.remove();
        productImageWrap.innerHTML = `<div class="card-image-wrap card-image-wrap--swatch"><span>${produk.category.replace(/-/g, " ")}</span></div>`;
    } else {
        pImage.src = "../gambar/" + produk.image;
        pImage.alt = produk.title;
    }

    pStock.textContent = produk.category.replace(/-/g, " ");
    pTitle.textContent = produk.title;
    pPrice.textContent = formatRupiah(produk.price);
    pDescription.textContent = produk.description;

    pSpecs.innerHTML = produk.specs
        .map(
            (spec) => `
                <div class="spec-row">
                    <span>${spec.label}</span>
                    <span>${spec.value}</span>
                </div>
            `
        )
        .join("");

    const pesan = encodeURIComponent(`Halo, saya mau tanya soal ${produk.title} (${formatRupiah(produk.price)}).`);
    pOrder.href = `https://wa.me/6285934242157?text=${pesan}`;

    /* ================= REKOMENDASI ================= */
    /* Urutan stabil: layanan lain di kategori yang sama duluan,
       baru sisanya, biar rekomendasi gak berubah-ubah tiap reload. */

    const recommendContainer = document.getElementById("recommendContainer");

    const lainnya = PRODUCTS.filter((p) => p.id !== produk.id);
    const kategoriSama = lainnya.filter((p) => p.category === produk.category);
    const kategoriLain = lainnya.filter((p) => p.category !== produk.category);
    const rekomendasi = kategoriSama.concat(kategoriLain).slice(0, 9);

    recommendContainer.innerHTML =
        rekomendasi.map((p) => buildProductCard(p)).join("") + buildMoreCard();
}
