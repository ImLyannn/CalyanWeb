/* ================================================================
   KATALOG PRODUK — satu sumber data buat index.js, product.js & catalog.js
   Tinggal edit array ini kalau mau nambah/ubah produk.
   icon    : nama file svg di folder /gambar
   category: dipakai buat filter di modal "Katalog Lengkap"
================================================================= */

/* urutan tetap: dipakai buat render tombol filter kategori */
const CATEGORIES = [
  { key: "semua", label: "Semua" },
  { key: "mouse", label: "Mouse" },
  { key: "keyboard", label: "Keyboard" },
  { key: "headset", label: "Headset" },
  { key: "speaker", label: "Speaker" },
  { key: "mousepad", label: "Mousepad" },
  { key: "monitor", label: "Monitor" },
];

const PRODUCTS = [

  /* ================= MOUSE ================= */
  {
    id: 1,
    title: "Mouse Gaming RGB",
    price: 700000,
    icon: "mouse",
    category: "mouse",
    tag: "Best Seller",
    description:
      "Mouse gaming dengan sensor 7200 DPI, 6 tombol programmable, dan pencahayaan RGB 16 juta warna. Cocok buat FPS maupun MOBA.",
    specs: [
      { label: "Sensor", value: "7200 DPI" },
      { label: "Tombol", value: "6 programmable" },
      { label: "Konektivitas", value: "USB kabel" },
      { label: "Berat", value: "85 gram" },
    ],
  },
  {
    id: 7,
    title: "Mouse Wireless Silent",
    price: 220000,
    icon: "mouse",
    category: "mouse",
    tag: "Reguler",
    description:
      "Mouse wireless dengan klik senyap, pas buat kerja di kantor atau kelas tanpa ganggu sekitar. Baterai tahan sampe 6 bulan pemakaian normal.",
    specs: [
      { label: "Sensor", value: "1600 DPI" },
      { label: "Klik", value: "Silent switch" },
      { label: "Konektivitas", value: "Wireless 2.4GHz" },
      { label: "Baterai", value: "±6 bulan" },
    ],
  },
  {
    id: 8,
    title: "Mouse Gaming Pro Max",
    price: 950000,
    icon: "mouse",
    category: "mouse",
    tag: "Reguler",
    description:
      "Versi flagship dengan sensor optik presisi tinggi dan bodi ultra-ringan buat gerakan cepat ala pro player. Kabel paracord biar minim drag.",
    specs: [
      { label: "Sensor", value: "26000 DPI" },
      { label: "Tombol", value: "8 programmable" },
      { label: "Berat", value: "62 gram" },
      { label: "Kabel", value: "Paracord fleksibel" },
    ],
  },
  {
    id: 9,
    title: "Mouse Ergonomic Vertical",
    price: 280000,
    icon: "mouse",
    category: "mouse",
    tag: "Reguler",
    description:
      "Desain vertikal yang bikin pergelangan tangan lebih rileks buat pemakaian seharian di depan komputer. Cocok buat kerja jangka panjang.",
    specs: [
      { label: "Sensor", value: "2400 DPI" },
      { label: "Bentuk", value: "Vertical ergonomic" },
      { label: "Konektivitas", value: "USB kabel" },
      { label: "Tombol", value: "5 tombol" },
    ],
  },
  {
    id: 10,
    title: "Mouse Gaming Lite",
    price: 130000,
    icon: "mouse",
    category: "mouse",
    tag: "Reguler",
    description:
      "Mouse entry-level buat yang baru mulai ngerakit setup gaming. Ringan di kantong tapi tetap responsif buat main harian.",
    specs: [
      { label: "Sensor", value: "3200 DPI" },
      { label: "Tombol", value: "4 tombol" },
      { label: "Konektivitas", value: "USB kabel" },
      { label: "Berat", value: "95 gram" },
    ],
  },

  /* ================= KEYBOARD ================= */
  {
    id: 2,
    title: "Keyboard Mechanical",
    price: 350000,
    icon: "keyboard",
    category: "keyboard",
    tag: "Best Seller",
    description:
      "Keyboard mechanical blue switch dengan feedback klik yang tegas. Backlight per-tombol dan bodi tahan lama buat pemakaian harian.",
    specs: [
      { label: "Switch", value: "Blue click" },
      { label: "Layout", value: "Full 104 key" },
      { label: "Lighting", value: "Single color" },
      { label: "Konektivitas", value: "USB kabel" },
    ],
  },
  {
    id: 11,
    title: "Keyboard TKL Red Switch",
    price: 420000,
    icon: "keyboard",
    category: "keyboard",
    tag: "Reguler",
    description:
      "Layout tenkeyless yang lebih ringkas biar mouse punya ruang gerak lebih luas. Red switch linear, empuk buat ditekan cepat berulang.",
    specs: [
      { label: "Switch", value: "Red linear" },
      { label: "Layout", value: "TKL 87 key" },
      { label: "Lighting", value: "RGB per-key" },
      { label: "Konektivitas", value: "USB kabel" },
    ],
  },
  {
    id: 12,
    title: "Keyboard 60% Compact",
    price: 380000,
    icon: "keyboard",
    category: "keyboard",
    tag: "Reguler",
    description:
      "Bodi mini tanpa numpad dan arrow key, cocok buat meja sempit atau yang suka gaya minimalis. Tetap full function lewat kombinasi tombol Fn.",
    specs: [
      { label: "Switch", value: "Brown tactile" },
      { label: "Layout", value: "60% 61 key" },
      { label: "Lighting", value: "RGB per-key" },
      { label: "Konektivitas", value: "USB-C" },
    ],
  },
  {
    id: 13,
    title: "Keyboard Wireless Silent",
    price: 300000,
    icon: "keyboard",
    category: "keyboard",
    tag: "Reguler",
    description:
      "Keyboard membrane wireless dengan suara ketikan halus, pas buat kerja remote atau meeting online. Praktis dibawa ke mana-mana.",
    specs: [
      { label: "Tipe", value: "Membrane silent" },
      { label: "Layout", value: "Full 104 key" },
      { label: "Konektivitas", value: "Wireless 2.4GHz" },
      { label: "Baterai", value: "±3 bulan" },
    ],
  },
  {
    id: 14,
    title: "Keyboard Mechanical RGB Full",
    price: 550000,
    icon: "keyboard",
    category: "keyboard",
    tag: "Reguler",
    description:
      "Full size mechanical dengan RGB per-tombol yang bisa diatur lewat software. Kaki keyboard adjustable buat sudut ketik yang pas.",
    specs: [
      { label: "Switch", value: "Blue click" },
      { label: "Layout", value: "Full 104 key" },
      { label: "Lighting", value: "RGB per-key" },
      { label: "Software", value: "Custom macro" },
    ],
  },

  /* ================= HEADSET ================= */
  {
    id: 3,
    title: "Headset Surround",
    price: 250000,
    icon: "headset",
    category: "headset",
    tag: "Best Seller",
    description:
      "Headset gaming dengan driver 50mm dan suara surround 7.1 virtual. Earcup empuk buat sesi main lama tanpa bikin telinga panas.",
    specs: [
      { label: "Driver", value: "50mm" },
      { label: "Suara", value: "Surround 7.1" },
      { label: "Mic", value: "Detachable" },
      { label: "Konektivitas", value: "Jack 3.5mm" },
    ],
  },
  {
    id: 15,
    title: "Headset Wireless Bass",
    price: 380000,
    icon: "headset",
    category: "headset",
    tag: "Reguler",
    description:
      "Bass tebal buat yang suka nonton film atau dengerin musik sambil main. Bebas kabel jadi lebih leluasa gerak.",
    specs: [
      { label: "Driver", value: "40mm bass boost" },
      { label: "Konektivitas", value: "Wireless 2.4GHz" },
      { label: "Baterai", value: "±20 jam" },
      { label: "Mic", value: "Built-in" },
    ],
  },
  {
    id: 16,
    title: "Headset Lightweight Esport",
    price: 300000,
    icon: "headset",
    category: "headset",
    tag: "Reguler",
    description:
      "Dirancang ringan buat turnamen esport, gak bikin kepala pegel walau dipakai berjam-jam. Footstep jadi lebih kedengeran jelas.",
    specs: [
      { label: "Berat", value: "220 gram" },
      { label: "Driver", value: "50mm" },
      { label: "Mic", value: "Noise-cancel" },
      { label: "Konektivitas", value: "Jack 3.5mm" },
    ],
  },
  {
    id: 17,
    title: "Headset Noise Cancelling",
    price: 480000,
    icon: "headset",
    category: "headset",
    tag: "Reguler",
    description:
      "Peredam bising aktif yang cocok buat fokus kerja atau main di lingkungan rame. Earcup memory foam biar makin nyaman.",
    specs: [
      { label: "Fitur", value: "Active noise cancel" },
      { label: "Driver", value: "45mm" },
      { label: "Konektivitas", value: "USB + jack 3.5mm" },
      { label: "Earcup", value: "Memory foam" },
    ],
  },
  {
    id: 18,
    title: "Headset RGB 7.1 Pro",
    price: 420000,
    icon: "headset",
    category: "headset",
    tag: "Reguler",
    description:
      "Versi pro dengan lighting RGB dan driver besar buat detail suara langkah kaki dan tembakan yang lebih jelas di game FPS.",
    specs: [
      { label: "Driver", value: "53mm" },
      { label: "Suara", value: "Surround 7.1 USB" },
      { label: "Lighting", value: "RGB dual zone" },
      { label: "Mic", value: "Detachable" },
    ],
  },

  /* ================= SPEAKER ================= */
  {
    id: 4,
    title: "Speaker Desktop",
    price: 150000,
    icon: "speaker",
    category: "speaker",
    tag: "Reguler",
    description:
      "Speaker meja portable dengan bass yang nendang buat ukurannya. Praktis buat nonton, dengerin musik, sampe nemenin kerja.",
    specs: [
      { label: "Daya", value: "10 Watt" },
      { label: "Konektivitas", value: "USB + jack 3.5mm" },
      { label: "Bentuk", value: "Sepasang (stereo)" },
      { label: "Kabel", value: "1.2 meter" },
    ],
  },
  {
    id: 19,
    title: "Speaker Bluetooth Portable",
    price: 180000,
    icon: "speaker",
    category: "speaker",
    tag: "Reguler",
    description:
      "Bisa dibawa ke mana-mana, tinggal sambungin Bluetooth dari HP atau laptop. Baterai internal tahan seharian penuh.",
    specs: [
      { label: "Daya", value: "8 Watt" },
      { label: "Konektivitas", value: "Bluetooth 5.0" },
      { label: "Baterai", value: "±10 jam" },
      { label: "Bentuk", value: "Single unit" },
    ],
  },
  {
    id: 20,
    title: "Speaker Soundbar Mini",
    price: 210000,
    icon: "speaker",
    category: "speaker",
    tag: "Reguler",
    description:
      "Bentuk memanjang yang pas diletakkan di bawah monitor, hemat tempat tapi suaranya tetap lantang buat kebutuhan harian.",
    specs: [
      { label: "Daya", value: "12 Watt" },
      { label: "Konektivitas", value: "USB + jack 3.5mm" },
      { label: "Bentuk", value: "Soundbar single" },
      { label: "Panjang", value: "40 cm" },
    ],
  },
  {
    id: 21,
    title: "Speaker 2.1 Subwoofer",
    price: 320000,
    icon: "speaker",
    category: "speaker",
    tag: "Reguler",
    description:
      "Paket lengkap dua satelit plus subwoofer buat bass yang lebih dalam. Cocok buat setup meja yang butuh suara lebih niat.",
    specs: [
      { label: "Daya", value: "20 Watt total" },
      { label: "Susunan", value: "2 satelit + 1 sub" },
      { label: "Konektivitas", value: "Jack 3.5mm" },
      { label: "Kontrol", value: "Volume + bass knob" },
    ],
  },
  {
    id: 22,
    title: "Speaker RGB Desktop",
    price: 165000,
    icon: "speaker",
    category: "speaker",
    tag: "Reguler",
    description:
      "Lighting RGB yang nyala mengikuti irama musik, bikin meja setup makin hidup. Suara tetap jernih buat pemakaian harian.",
    specs: [
      { label: "Daya", value: "10 Watt" },
      { label: "Lighting", value: "RGB reaktif musik" },
      { label: "Konektivitas", value: "USB + jack 3.5mm" },
      { label: "Bentuk", value: "Sepasang (stereo)" },
    ],
  },

  /* ================= MOUSEPAD ================= */
  {
    id: 5,
    title: "Mousepad Gaming",
    price: 90000,
    icon: "mousepad",
    category: "mousepad",
    tag: "Reguler",
    description:
      "Mousepad permukaan halus dengan jahitan anti-serat di pinggir biar gak gampang kelupas. Base karet anti-geser di segala permukaan meja.",
    specs: [
      { label: "Ukuran", value: "80 x 30 cm" },
      { label: "Permukaan", value: "Cloth halus" },
      { label: "Base", value: "Karet non-slip" },
      { label: "Tebal", value: "4 mm" },
    ],
  },
  {
    id: 23,
    title: "Mousepad XL Extended",
    price: 120000,
    icon: "mousepad",
    category: "mousepad",
    tag: "Reguler",
    description:
      "Ukuran extra besar sampe muat buat keyboard dan mouse sekaligus. Cocok buat yang suka gerakan tangan lebar pas main FPS.",
    specs: [
      { label: "Ukuran", value: "90 x 40 cm" },
      { label: "Permukaan", value: "Cloth speed" },
      { label: "Base", value: "Karet non-slip" },
      { label: "Tebal", value: "3 mm" },
    ],
  },
  {
    id: 24,
    title: "Mousepad RGB Illuminated",
    price: 160000,
    icon: "mousepad",
    category: "mousepad",
    tag: "Reguler",
    description:
      "Lighting RGB di pinggir mousepad buat nambah estetika setup. Tetap presisi buat tracking sensor mouse sehari-hari.",
    specs: [
      { label: "Ukuran", value: "35 x 30 cm" },
      { label: "Lighting", value: "RGB tepi" },
      { label: "Konektivitas", value: "USB" },
      { label: "Base", value: "Karet non-slip" },
    ],
  },
  {
    id: 25,
    title: "Mousepad Hard Surface",
    price: 95000,
    icon: "mousepad",
    category: "mousepad",
    tag: "Reguler",
    description:
      "Permukaan keras dari plastik yang bikin gerakan mouse lebih cepat dan konsisten. Favorit buat gaya main sensitivitas rendah.",
    specs: [
      { label: "Ukuran", value: "45 x 40 cm" },
      { label: "Permukaan", value: "Hard plastic" },
      { label: "Base", value: "Anti-slip pad" },
      { label: "Tebal", value: "3 mm" },
    ],
  },
  {
    id: 26,
    title: "Mousepad Wrist Rest Combo",
    price: 110000,
    icon: "mousepad",
    category: "mousepad",
    tag: "Reguler",
    description:
      "Ada bantalan buat pergelangan tangan biar gak pegel pas dipakai kerja lama. Busa memory foam yang empuk dan gak gampang kempes.",
    specs: [
      { label: "Ukuran", value: "70 x 30 cm" },
      { label: "Fitur", value: "Wrist rest foam" },
      { label: "Permukaan", value: "Cloth halus" },
      { label: "Base", value: "Karet non-slip" },
    ],
  },

  /* ================= MONITOR ================= */
  {
    id: 6,
    title: "Monitor Full HD",
    price: 2000000,
    icon: "monitor",
    category: "monitor",
    tag: "Reguler",
    description:
      "Monitor 24 inci Full HD dengan refresh rate tinggi, gerakan lebih mulus buat kerja maupun main. Bezel tipis biar makin luas pandangan.",
    specs: [
      { label: "Ukuran layar", value: "24 inci" },
      { label: "Resolusi", value: "1920 x 1080" },
      { label: "Refresh rate", value: "100 Hz" },
      { label: "Port", value: "HDMI + VGA" },
    ],
  },
  {
    id: 27,
    title: "Monitor Curved 27 Inch",
    price: 2800000,
    icon: "monitor",
    category: "monitor",
    tag: "Reguler",
    description:
      "Layar melengkung yang bikin pandangan lebih imersif, enak buat main game atau nonton film jarak dekat.",
    specs: [
      { label: "Ukuran layar", value: "27 inci curved" },
      { label: "Resolusi", value: "1920 x 1080" },
      { label: "Refresh rate", value: "144 Hz" },
      { label: "Port", value: "HDMI + DisplayPort" },
    ],
  },
  {
    id: 28,
    title: "Monitor 144Hz Esport",
    price: 2400000,
    icon: "monitor",
    category: "monitor",
    tag: "Reguler",
    description:
      "Refresh rate tinggi dan response time cepat, dibikin khusus buat game kompetitif yang butuh reaksi kilat.",
    specs: [
      { label: "Ukuran layar", value: "24.5 inci" },
      { label: "Resolusi", value: "1920 x 1080" },
      { label: "Refresh rate", value: "144 Hz" },
      { label: "Response time", value: "1 ms" },
    ],
  },
  {
    id: 29,
    title: "Monitor 4K UHD",
    price: 4200000,
    icon: "monitor",
    category: "monitor",
    tag: "Reguler",
    description:
      "Resolusi 4K yang bikin detail gambar jauh lebih tajam, cocok buat editing, desain, atau sekadar nonton konten kualitas tinggi.",
    specs: [
      { label: "Ukuran layar", value: "27 inci" },
      { label: "Resolusi", value: "3840 x 2160" },
      { label: "Refresh rate", value: "60 Hz" },
      { label: "Port", value: "HDMI + DisplayPort" },
    ],
  },
  {
    id: 30,
    title: "Monitor Portable USB-C",
    price: 1800000,
    icon: "monitor",
    category: "monitor",
    tag: "Reguler",
    description:
      "Tipis dan ringan, tinggal colok kabel USB-C ke laptop buat nambah layar kerja di mana aja. Praktis dibawa traveling.",
    specs: [
      { label: "Ukuran layar", value: "15.6 inci" },
      { label: "Resolusi", value: "1920 x 1080" },
      { label: "Konektivitas", value: "USB-C" },
      { label: "Berat", value: "780 gram" },
    ],
  },
];

/* Format angka jadi Rupiah, misal 700000 -> "Rp700.000" */
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

/* Cari produk dari id (string atau number) */
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

/* ================================================================
   BUILDER KARTU PRODUK — dipakai bareng oleh index.js, product.js,
   dan catalog.js biar markup kartu konsisten di semua tempat.
   Butuh window.SITE_BASE = { img: "...", productPage: "..." }
   yang didefinisikan di masing-masing halaman HTML.
================================================================= */

function buildProductCard(produk) {

  const base = window.SITE_BASE || { img: "gambar/", productPage: "html/product.html" };
  const stockNo = "UNIT-" + String(produk.id).padStart(3, "0");
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
