/* ================================================================
   KATALOG LAYANAN — satu sumber data buat index.js, product.js & catalog.js
   Tinggal edit array ini kalau mau nambah/ubah layanan.
   icon    : nama file svg di folder /gambar
   category: dipakai buat filter di modal "Katalog Lengkap"
================================================================= */

/* urutan tetap: dipakai buat render tombol filter kategori */
const CATEGORIES = [
  { key: "semua", label: "Semua" },
  { key: "hand-printing", label: "Hand Printing" },
  { key: "dying", label: "Dying" },
  { key: "sublimation", label: "Sublimation" },
  { key: "design", label: "Design" },
  { key: "film", label: "Film" },
  { key: "screen-printing", label: "Screen Printing" },
];

const PRODUCTS = [

  /* ================= HAND PRINTING ================= */
  {
    id: 1,
    title: "Sablon Manual Rubber Ink",
    price: 35000,
    icon: "mouse",
    category: "hand-printing",
    tag: "Best Seller",
    description:
      "Sablon manual pakai tinta rubber yang elastis dan nutup rapat di kain gelap maupun terang. Hasil solid, gak gampang retak walau sering dicuci.",
    specs: [
      { label: "Teknik", value: "Manual screen printing" },
      { label: "Tinta", value: "Rubber ink" },
      { label: "Media", value: "Kaos katun combed" },
      { label: "Minimal order", value: "12 pcs" },
    ],
  },
  {
    id: 7,
    title: "Sablon Manual Plastisol",
    price: 45000,
    icon: "mouse",
    category: "hand-printing",
    tag: "Reguler",
    description:
      "Tinta plastisol dengan hasil warna tebal dan detail lebih tajam, cocok buat desain full color atau gradasi sederhana di atas kain.",
    specs: [
      { label: "Teknik", value: "Manual screen printing" },
      { label: "Tinta", value: "Plastisol" },
      { label: "Media", value: "Kaos, hoodie" },
      { label: "Minimal order", value: "12 pcs" },
    ],
  },
  {
    id: 8,
    title: "Sablon Manual Tote Bag",
    price: 30000,
    icon: "mouse",
    category: "hand-printing",
    tag: "Reguler",
    description:
      "Sablon manual khusus tote bag kanvas, pas buat merchandise event, seminar, atau totebag branding usaha kecil.",
    specs: [
      { label: "Teknik", value: "Manual screen printing" },
      { label: "Tinta", value: "Rubber ink" },
      { label: "Media", value: "Kanvas tote bag" },
      { label: "Minimal order", value: "20 pcs" },
    ],
  },
  {
    id: 9,
    title: "Sablon Manual Topi",
    price: 40000,
    icon: "mouse",
    category: "hand-printing",
    tag: "Reguler",
    description:
      "Sablon di permukaan topi yang melengkung, dikerjakan pakai jig khusus biar posisi desain tetap presisi dan rapi.",
    specs: [
      { label: "Teknik", value: "Manual screen printing" },
      { label: "Tinta", value: "Rubber ink" },
      { label: "Media", value: "Topi trucker/baseball" },
      { label: "Minimal order", value: "12 pcs" },
    ],
  },
  {
    id: 10,
    title: "Sablon Manual Multi Warna",
    price: 60000,
    icon: "mouse",
    category: "hand-printing",
    tag: "Reguler",
    description:
      "Sablon manual sampai 4 warna dalam satu desain, tiap warna dicetak lewat screen terpisah biar hasil rapi dan presisi.",
    specs: [
      { label: "Teknik", value: "Manual screen printing" },
      { label: "Jumlah warna", value: "2 - 4 warna" },
      { label: "Media", value: "Kaos katun combed" },
      { label: "Minimal order", value: "12 pcs" },
    ],
  },

  /* ================= DYING ================= */
  {
    id: 2,
    title: "Pencelupan Tie Dye",
    price: 55000,
    icon: "speaker",
    category: "dying",
    tag: "Best Seller",
    description:
      "Pencelupan kain dengan pola tie dye spiral, swirl, atau ombre. Warna dikunci pakai fiksasi biar gak gampang luntur pas dicuci.",
    specs: [
      { label: "Teknik", value: "Ikat celup (tie dye)" },
      { label: "Pewarna", value: "Reactive dye" },
      { label: "Media", value: "Kaos katun putih" },
      { label: "Durasi", value: "3 - 5 hari kerja" },
    ],
  },
  {
    id: 11,
    title: "Pencelupan Warna Custom",
    price: 40000,
    icon: "speaker",
    category: "dying",
    tag: "Reguler",
    description:
      "Ganti warna dasar kain sesuai permintaan, cocok buat yang mau seragam komunitas atau merchandise dengan warna khusus.",
    specs: [
      { label: "Teknik", value: "Celup rata satu warna" },
      { label: "Pewarna", value: "Reactive dye" },
      { label: "Media", value: "Kain katun / rayon" },
      { label: "Durasi", value: "2 - 4 hari kerja" },
    ],
  },
  {
    id: 12,
    title: "Pencelupan Ombre Gradasi",
    price: 65000,
    icon: "speaker",
    category: "dying",
    tag: "Reguler",
    description:
      "Efek gradasi warna dari gelap ke terang (atau sebaliknya) yang dicelup bertahap, hasilnya smooth dan gak ada garis tegas.",
    specs: [
      { label: "Teknik", value: "Celup gradasi (ombre)" },
      { label: "Pewarna", value: "Reactive dye" },
      { label: "Media", value: "Kaos, dress katun" },
      { label: "Durasi", value: "3 - 5 hari kerja" },
    ],
  },
  {
    id: 13,
    title: "Pencelupan Batik Celup",
    price: 70000,
    icon: "speaker",
    category: "dying",
    tag: "Reguler",
    description:
      "Motif ala batik dengan teknik ikat dan lipat sebelum dicelup, tiap lembar hasilnya unik dan gak ada yang identik.",
    specs: [
      { label: "Teknik", value: "Ikat lipat + celup" },
      { label: "Pewarna", value: "Naphtol / reactive dye" },
      { label: "Media", value: "Kain mori / katun" },
      { label: "Durasi", value: "4 - 6 hari kerja" },
    ],
  },
  {
    id: 14,
    title: "Pencelupan Bulk Order",
    price: 25000,
    icon: "speaker",
    category: "dying",
    tag: "Reguler",
    description:
      "Harga per meter buat pencelupan warna polos dalam jumlah besar, cocok buat kebutuhan produksi seragam atau konveksi.",
    specs: [
      { label: "Satuan", value: "Per meter kain" },
      { label: "Pewarna", value: "Reactive dye" },
      { label: "Minimal order", value: "50 meter" },
      { label: "Durasi", value: "5 - 7 hari kerja" },
    ],
  },

  /* ================= SUBLIMATION ================= */
  {
    id: 3,
    title: "Sublimasi Kaos Full Print",
    price: 85000,
    icon: "headset",
    category: "sublimation",
    tag: "Best Seller",
    description:
      "Cetak desain full satu badan kaos, warna tajam dan gak mudah pudar karena tinta meresap langsung ke serat kain.",
    specs: [
      { label: "Teknik", value: "Sublimasi full print" },
      { label: "Media", value: "Kaos polyester" },
      { label: "Resolusi cetak", value: "1440 dpi" },
      { label: "Minimal order", value: "1 pcs" },
    ],
  },
  {
    id: 15,
    title: "Sublimasi Mug Custom",
    price: 35000,
    icon: "headset",
    category: "sublimation",
    tag: "Reguler",
    description:
      "Foto atau desain custom yang dicetak permanen di permukaan mug keramik, pas buat gift atau merchandise personal.",
    specs: [
      { label: "Teknik", value: "Sublimasi mug press" },
      { label: "Media", value: "Mug keramik putih" },
      { label: "Kapasitas", value: "11 oz" },
      { label: "Minimal order", value: "1 pcs" },
    ],
  },
  {
    id: 16,
    title: "Sublimasi Jersey Olahraga",
    price: 95000,
    icon: "headset",
    category: "sublimation",
    tag: "Reguler",
    description:
      "Jersey full print buat tim futsal, basket, atau esport. Bahan dry-fit adem dan warna tetap cerah walau sering dipakai main.",
    specs: [
      { label: "Teknik", value: "Sublimasi full print" },
      { label: "Media", value: "Kain dry-fit" },
      { label: "Custom nama/nomor", value: "Bisa" },
      { label: "Minimal order", value: "5 pcs" },
    ],
  },
  {
    id: 17,
    title: "Sublimasi Merchandise Custom",
    price: 45000,
    icon: "headset",
    category: "sublimation",
    tag: "Reguler",
    description:
      "Cetak sublim di berbagai media promosi kecil seperti gantungan kunci, piring, atau plakat akrilik lapis khusus.",
    specs: [
      { label: "Teknik", value: "Sublimasi media custom" },
      { label: "Media", value: "Akrilik / keramik lapis" },
      { label: "Ukuran", value: "Sesuai media" },
      { label: "Minimal order", value: "1 pcs" },
    ],
  },
  {
    id: 18,
    title: "Sublimasi Bantal Custom",
    price: 60000,
    icon: "headset",
    category: "sublimation",
    tag: "Reguler",
    description:
      "Sarung bantal dengan desain atau foto custom full print, cocok buat kado ulang tahun atau merchandise komunitas.",
    specs: [
      { label: "Teknik", value: "Sublimasi full print" },
      { label: "Media", value: "Kain kanvas / satin" },
      { label: "Ukuran", value: "40 x 40 cm" },
      { label: "Minimal order", value: "1 pcs" },
    ],
  },

  /* ================= DESIGN ================= */
  {
    id: 4,
    title: "Jasa Desain Logo Brand",
    price: 150000,
    icon: "monitor",
    category: "design",
    tag: "Best Seller",
    description:
      "Desain logo dari nol sesuai konsep dan warna brand, lengkap dengan file siap cetak dan siap dipakai buat kebutuhan sablon.",
    specs: [
      { label: "Revisi", value: "3x revisi" },
      { label: "File akhir", value: "AI, PNG, PDF" },
      { label: "Durasi", value: "2 - 4 hari kerja" },
      { label: "Konsultasi", value: "Gratis via WhatsApp" },
    ],
  },
  {
    id: 19,
    title: "Jasa Desain Kaos Custom",
    price: 75000,
    icon: "monitor",
    category: "design",
    tag: "Reguler",
    description:
      "Desain grafis buat kaos, mulai dari ilustrasi sampai tipografi, disesuaikan sama tema komunitas atau event.",
    specs: [
      { label: "Revisi", value: "2x revisi" },
      { label: "File akhir", value: "PNG, PDF siap sablon" },
      { label: "Durasi", value: "1 - 3 hari kerja" },
      { label: "Konsultasi", value: "Gratis via WhatsApp" },
    ],
  },
  {
    id: 20,
    title: "Jasa Desain Kemasan Produk",
    price: 200000,
    icon: "monitor",
    category: "design",
    tag: "Reguler",
    description:
      "Desain kemasan produk UMKM biar tampil lebih profesional di rak toko maupun marketplace online.",
    specs: [
      { label: "Revisi", value: "3x revisi" },
      { label: "File akhir", value: "AI, PDF, dieline" },
      { label: "Durasi", value: "3 - 5 hari kerja" },
      { label: "Konsultasi", value: "Gratis via WhatsApp" },
    ],
  },
  {
    id: 21,
    title: "Jasa Desain Ilustrasi Custom",
    price: 250000,
    icon: "monitor",
    category: "design",
    tag: "Reguler",
    description:
      "Ilustrasi digital detail buat karya seni cetak, poster, atau desain kaos edisi terbatas dengan gaya bebas sesuai request.",
    specs: [
      { label: "Revisi", value: "3x revisi" },
      { label: "File akhir", value: "PNG resolusi tinggi" },
      { label: "Durasi", value: "4 - 7 hari kerja" },
      { label: "Konsultasi", value: "Gratis via WhatsApp" },
    ],
  },
  {
    id: 22,
    title: "Jasa Desain Ulang (Revisi Besar)",
    price: 100000,
    icon: "monitor",
    category: "design",
    tag: "Reguler",
    description:
      "Buat yang udah punya desain tapi mau dirapikan ulang, ganti warna, atau disesuaikan ukurannya biar siap cetak.",
    specs: [
      { label: "Revisi", value: "2x revisi" },
      { label: "File akhir", value: "PNG, PDF siap cetak" },
      { label: "Durasi", value: "1 - 2 hari kerja" },
      { label: "Konsultasi", value: "Gratis via WhatsApp" },
    ],
  },

  /* ================= FILM ================= */
  {
    id: 5,
    title: "Separasi Film Sablon 1 Warna",
    price: 25000,
    icon: "mousepad",
    category: "film",
    tag: "Best Seller",
    description:
      "Pisah desain jadi film transparan siap afdruk buat satu warna sablon. Hasil pekat dan presisi biar screen gampang nyerap.",
    specs: [
      { label: "Jumlah warna", value: "1 warna" },
      { label: "Media", value: "Kalkir / film transparan" },
      { label: "Ukuran", value: "A4" },
      { label: "Durasi", value: "Same day" },
    ],
  },
  {
    id: 23,
    title: "Separasi Film Sablon Multi Warna",
    price: 50000,
    icon: "mousepad",
    category: "film",
    tag: "Reguler",
    description:
      "Pemisahan warna buat desain kompleks sampai 4 lapis film, tiap lapis udah pas register biar gampang pas afdruk.",
    specs: [
      { label: "Jumlah warna", value: "2 - 4 warna" },
      { label: "Media", value: "Kalkir / film transparan" },
      { label: "Ukuran", value: "A4 - A3" },
      { label: "Durasi", value: "1 hari kerja" },
    ],
  },
  {
    id: 24,
    title: "Cetak Film Positif A3",
    price: 20000,
    icon: "mousepad",
    category: "film",
    tag: "Reguler",
    description:
      "Cetak film positif ukuran A3 buat desain sablon berukuran besar, hasil hitam pekat dan tepi tajam.",
    specs: [
      { label: "Ukuran", value: "A3" },
      { label: "Media", value: "Kalkir / film transparan" },
      { label: "Resolusi", value: "1200 dpi" },
      { label: "Durasi", value: "Same day" },
    ],
  },
  {
    id: 25,
    title: "Cetak Film Positif A4",
    price: 15000,
    icon: "mousepad",
    category: "film",
    tag: "Reguler",
    description:
      "Ukuran standar buat kebutuhan desain sablon skala kecil, ekonomis buat produksi jumlah terbatas.",
    specs: [
      { label: "Ukuran", value: "A4" },
      { label: "Media", value: "Kalkir / film transparan" },
      { label: "Resolusi", value: "1200 dpi" },
      { label: "Durasi", value: "Same day" },
    ],
  },
  {
    id: 26,
    title: "Paket Film + Afdruk Screen",
    price: 65000,
    icon: "mousepad",
    category: "film",
    tag: "Reguler",
    description:
      "Paket komplit dari cetak film sampai afdruk screen, screen langsung siap dipakai buat sablon manual.",
    specs: [
      { label: "Termasuk", value: "Film + afdruk screen" },
      { label: "Jumlah warna", value: "1 - 2 warna" },
      { label: "Ukuran screen", value: "30 x 40 cm" },
      { label: "Durasi", value: "1 - 2 hari kerja" },
    ],
  },

  /* ================= SCREEN PRINTING ================= */
  {
    id: 6,
    title: "Afdruk Screen Sablon Standar",
    price: 45000,
    icon: "keyboard",
    category: "screen-printing",
    tag: "Best Seller",
    description:
      "Afdruk screen dari film desain yang udah jadi, hasil emulsi rata dan tahan buat ratusan kali tarikan sablon.",
    specs: [
      { label: "Ukuran screen", value: "30 x 40 cm" },
      { label: "Mesh", value: "T61 - T77" },
      { label: "Emulsi", value: "Photo emulsion" },
      { label: "Durasi", value: "1 hari kerja" },
    ],
  },
  {
    id: 27,
    title: "Afdruk Screen Ukuran Besar",
    price: 65000,
    icon: "keyboard",
    category: "screen-printing",
    tag: "Reguler",
    description:
      "Buat desain full jumbo di kaos atau spanduk kecil, screen ukuran besar dengan hasil afdruk yang tetap presisi.",
    specs: [
      { label: "Ukuran screen", value: "50 x 60 cm" },
      { label: "Mesh", value: "T61 - T77" },
      { label: "Emulsi", value: "Photo emulsion" },
      { label: "Durasi", value: "1 - 2 hari kerja" },
    ],
  },
  {
    id: 28,
    title: "Sewa Screen Frame Aluminium",
    price: 30000,
    icon: "keyboard",
    category: "screen-printing",
    tag: "Reguler",
    description:
      "Sewa frame screen aluminium buat yang mau nyablon sendiri, ringan dan gak gampang melengkung dipakai berkali-kali.",
    specs: [
      { label: "Bahan frame", value: "Aluminium" },
      { label: "Ukuran", value: "30 x 40 cm" },
      { label: "Satuan", value: "Per hari" },
      { label: "Minimal sewa", value: "1 hari" },
    ],
  },
  {
    id: 29,
    title: "Paket Screen Printing Full Set",
    price: 350000,
    icon: "keyboard",
    category: "screen-printing",
    tag: "Reguler",
    description:
      "Paket lengkap buat mulai usaha sablon sendiri: screen, rakel, meja sablon mini, dan tinta rubber dasar.",
    specs: [
      { label: "Termasuk", value: "Screen, rakel, meja mini, tinta" },
      { label: "Ukuran screen", value: "30 x 40 cm" },
      { label: "Cocok untuk", value: "Pemula usaha sablon" },
      { label: "Garansi", value: "Konsultasi pemakaian" },
    ],
  },
  {
    id: 30,
    title: "Screen Printing Produksi Massal",
    price: 20000,
    icon: "keyboard",
    category: "screen-printing",
    tag: "Reguler",
    description:
      "Harga per pcs buat produksi sablon dalam jumlah besar, cocok buat konveksi atau clothing line yang butuh output cepat.",
    specs: [
      { label: "Satuan", value: "Per pcs" },
      { label: "Minimal order", value: "100 pcs" },
      { label: "Jumlah warna", value: "1 warna" },
      { label: "Durasi", value: "5 - 7 hari kerja" },
    ],
  },
];

/* Format angka jadi Rupiah, misal 35000 -> "Rp35.000" */
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

/* Cari layanan dari id (string atau number) */
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

/* ================================================================
   BUILDER KARTU LAYANAN — dipakai bareng oleh index.js, product.js,
   dan catalog.js biar markup kartu konsisten di semua tempat.
   Butuh window.SITE_BASE = { img: "...", productPage: "..." }
   yang didefinisikan di masing-masing halaman HTML.
================================================================= */

function buildProductCard(produk) {

  const base = window.SITE_BASE || { img: "gambar/", productPage: "html/product.html" };
  const stockNo = "PRINT-" + String(produk.id).padStart(3, "0");
  const favAktif = typeof isFavorite === "function" && isFavorite(produk.id);

  return `
    <div class="card">
      <button
        type="button"
        class="card-fav-btn${favAktif ? " active" : ""}"
        data-id="${produk.id}"
        aria-label="Simpan ke favorit"
        aria-pressed="${favAktif ? "true" : "false"}"
      >
        <svg viewBox="0 0 24 24"><path d="M12 21s-7.6-4.7-10-9.4C0.3 8.3 2 4.4 5.8 4c2-.2 3.8.7 6.2 3 2.4-2.3 4.2-3.2 6.2-3 3.8.4 5.5 4.3 3.8 7.6C19.6 16.3 12 21 12 21Z"/></svg>
      </button>
      <a href="${base.productPage}?id=${produk.id}">
        <span class="card-stock">${stockNo}</span>
        <div class="card-image-wrap">
          <img class="card-image" src="${base.img}${produk.icon}.svg" alt="${produk.title}" loading="lazy">
        </div>
        <h3>${produk.title}</h3>
        <span class="card-tag">${produk.tag}</span>
        <span class="card-price">${formatRupiah(produk.price)}</span>
      </a>
    </div>
  `;
}

/* kartu pemicu "Lihat Lebih Lengkap" — dipasang di ujung baris scroll */
function buildMoreCard() {
  return `
    <div class="card more-card" id="moreCatalogTrigger" role="button" tabindex="0">
      <div class="more-card-inner">
        <span class="more-card-plus">＋</span>
        <h3>Lihat Lebih Lengkap</h3>
        <span class="card-tag">Buka katalog penuh</span>
      </div>
    </div>
  `;
}
