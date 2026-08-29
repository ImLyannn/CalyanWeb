/* ================================================================
   HERO BACKGROUND — background section Home (gambar ATAU video)
   Ganti nilai HERO_BACKGROUND di bawah buat pasang media sendiri:

     type   : "image" | "video" | "none"
     src    : path ke file gambar/video, contoh "gambar/hero-bg.jpg"
              atau "gambar/hero-bg.mp4"
     poster : (khusus video, opsional) gambar preview sebelum video
              selesai dimuat

   Video otomatis dikasih autoplay + muted + loop + playsinline biar
   langsung jalan sendiri (di HP juga) tanpa perlu diklik dulu. Kalau
   type "none" atau src kosong, Home tetap tampil normal pakai
   gradient bawaan di style.css — nggak ada elemen media yang disuntik.
================================================================= */

window.HERO_BACKGROUND = window.HERO_BACKGROUND || {
    type: "none",
    src: "",
    poster: ""

    // Contoh pakai gambar:
    // type: "image",
    // src: "gambar/hero-bg.jpg"

    // Contoh pakai video autoplay:
    // type: "video",
    // src: "gambar/hero-bg.mp4",
    // poster: "gambar/hero-bg-poster.jpg"
};

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const wrap = document.getElementById("heroBg");
        if (!wrap) return;

        const cfg = window.HERO_BACKGROUND || {};
        if (!cfg.type || cfg.type === "none" || !cfg.src) return;

        let media = null;

        if (cfg.type === "video") {
            media = document.createElement("video");
            media.className = "hero-bg-media";
            media.autoplay = true;
            media.muted = true;
            media.loop = true;
            media.playsInline = true;
            media.setAttribute("autoplay", "");
            media.setAttribute("muted", "");
            media.setAttribute("loop", "");
            media.setAttribute("playsinline", "");
            if (cfg.poster) media.poster = cfg.poster;

            const source = document.createElement("source");
            source.src = cfg.src;
            media.appendChild(source);

            // kalau videonya gagal dimuat (path salah / belum diisi),
            // diem-diem disingkirin lagi biar balik ke gradient default
            media.addEventListener("error", function () {
                media.remove();
            });

            // sebagian browser mobile tetap butuh play() dipanggil manual
            // begitu metadata-nya kebaca
            media.addEventListener("loadedmetadata", function () {
                const p = media.play();
                if (p && typeof p.catch === "function") p.catch(function () {});
            });
        } else if (cfg.type === "image") {
            media = document.createElement("img");
            media.className = "hero-bg-media";
            media.src = cfg.src;
            media.alt = "";

            media.addEventListener("error", function () {
                media.remove();
            });
        }

        if (media) wrap.insertBefore(media, wrap.firstChild);
    });
})();
