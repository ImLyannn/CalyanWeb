/* ================================================================
   KATALOG PRODUK — satu sumber data buat index.js & product.js
   Tinggal edit array ini kalau mau nambah/ubah produk.
   icon: nama file svg di folder /gambar
================================================================= */

const PRODUCTS = [
  {
    id: 1,
    title: "Mouse Gaming RGB",
    price: 700000,
    icon: "mouse",
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
    id: 2,
    title: "Keyboard Mechanical",
    price: 350000,
    icon: "keyboard",
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
    id: 3,
    title: "Headset Surround",
    price: 250000,
    icon: "headset",
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
    id: 4,
    title: "Speaker Desktop",
    price: 150000,
    icon: "speaker",
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
    id: 5,
    title: "Mousepad Gaming",
    price: 90000,
    icon: "mousepad",
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
    id: 6,
    title: "Monitor Full HD",
    price: 2000000,
    icon: "monitor",
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
];

/* Format angka jadi Rupiah, misal 700000 -> "Rp700.000" */
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

/* Cari produk dari id (string atau number) */
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}