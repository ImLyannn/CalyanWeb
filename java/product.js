const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const produk = getProductById(id);

const productDetail = document.getElementById("productDetail");

if (!produk) {

    productDetail.innerHTML = `
        <div class="product-info">
            <p class="card-stock">UNIT TIDAK DITEMUKAN</p>
            <h1>Produk tidak ditemukan</h1>
            <p>Link yang lu buka sepertinya salah atau produknya udah gak ada di katalog.</p>
            <a class="hero-cta" href="../index.html#product">Kembali ke Katalog</a>
        </div>
    `;

} else {

    document.title = produk.title + " — RAK GEAR";

    const pImage = document.getElementById("pImage");
    const pStock = document.getElementById("pStock");
    const pTitle = document.getElementById("pTitle");
    const pPrice = document.getElementById("pPrice");
    const pDescription = document.getElementById("pDescription");
    const pSpecs = document.getElementById("pSpecs");
    const pOrder = document.getElementById("pOrder");

    pImage.src = "../gambar/" + produk.icon + ".svg";
    pImage.alt = produk.title;
    pStock.textContent = "UNIT-" + String(produk.id).padStart(3, "0");
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
    pOrder.href = `https://wa.me/6281234567890?text=${pesan}`;

    /* ================= REKOMENDASI ================= */

    const recommendContainer = document.getElementById("recommendContainer");

    const rekomendasi = PRODUCTS
        .filter((p) => p.id !== produk.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

    recommendContainer.innerHTML = rekomendasi
        .map(
            (p) => `
                <div class="card recommend-card">
                    <a href="product.html?id=${p.id}">
                        <span class="card-stock">UNIT-${String(p.id).padStart(3, "0")}</span>
                        <div class="card-image-wrap">
                            <img class="card-image" src="../gambar/${p.icon}.svg" alt="${p.title}" loading="lazy">
                        </div>
                        <h3>${p.title}</h3>
                        <span class="card-price">${formatRupiah(p.price)}</span>
                    </a>
                </div>
            `
        )
        .join("");
}
