/* ================================================================
   LOKASI CABANG — pola sama kayak PRODUCTS di data.js,
   tinggal tambah/kurang item di array ini kalau ada cabang baru.
================================================================= */

const LOKASI = [
  { nama: "RAK GEAR — Denpasar", lat: -8.6705, lng: 115.2126 },
  { nama: "RAK GEAR — Surabaya", lat: -7.2575, lng: 112.7521 },
  { nama: "RAK GEAR — Yogyakarta", lat: -7.7956, lng: 110.3695 },
  { nama: "RAK GEAR — Jakarta", lat: -6.2088, lng: 106.8456 },
  { nama: "RAK GEAR — Bandung", lat: -6.9175, lng: 107.6191 },
];

const mapCanvas = document.getElementById("leafletMap");

if (mapCanvas) {

  const map = L.map("leafletMap", {
    scrollWheelZoom: false,
  }).setView([-7.5, 111], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(map);

  // marker custom warna amber biar kontras sama warna peta (biru/hijau)
  const pinIcon = L.divIcon({
    className: "",
    html: '<div class="pin"></div>',
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });

  LOKASI.forEach((loc) => {
    L.marker([loc.lat, loc.lng], { icon: pinIcon })
      .addTo(map)
      .bindPopup(`<b>${loc.nama}</b>`);
  });

  // peta suka salah ukur kalau di-init sebelum layout/font kelar render,
  // ini biar dia ngukur ulang setelah halaman fully loaded
  window.addEventListener("load", () => {
    setTimeout(() => map.invalidateSize(), 100);
  });
}
