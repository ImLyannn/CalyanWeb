/* ================================================================
   HERO BACKGROUND — background section Home (gambar ATAU video),
   BEDA FILE UNTUK HP vs LAPTOP/TABLET
   ------------------------------------------------------------
   Isi window.HERO_BACKGROUND di bawah ini pakai 2 slot:

     desktop : dipakai buat laptop DAN tablet/iPad (device-nya lebar,
               jadi cukup satu file — ukurannya otomatis menyesuaikan
               lewat object-fit:cover, nggak perlu file kedua per iPad)
     mobile  : dipakai kalau lebar layar <= breakpoint (default 640px,
               kira-kira lebar HP dalam posisi potret)

   Tiap slot isinya:
     type   : "image" | "video" | "none"
     src    : path ke file, contoh "gambar/hero-bg-desktop.mp4"
     poster : (khusus video, opsional) gambar preview sebelum video
              selesai dimuat

   Video otomatis dikasih autoplay + muted + loop + playsinline biar
   langsung jalan sendiri (di HP juga) tanpa perlu diklik dulu.

   Kalau "mobile" nggak diisi / dibiarkan "none", HP bakal ikut pakai
   versi "desktop". Kalau kedua slot "none"/src kosong, Home tetap
   tampil normal pakai gradient bawaan di style.css.
================================================================= */

window.HERO_BACKGROUND = window.HERO_BACKGROUND || {
    breakpoint: 640, // px — lebar layar di bawah ini dianggap "hp"

    desktop: {
        type: "video",
        src: "gambar/homedesktop.mp4",
        poster: "gambar/home.jpeg"

        // Contoh pakai gambar buat laptop/iPad:
        // type: "image",
        // src: "gambar/hero-bg-desktop.jpg"

        // Contoh pakai video autoplay buat laptop/iPad:
        // type: "video",
        // src: "gambar/hero-bg-desktop.mp4",
        // poster: "gambar/hero-bg-desktop-poster.jpg"
    },

    mobile: {
        type: "video",
        src: "gambar/homemobile.mp4",
        poster: "gambar/home.jpeg"

        // Contoh khusus HP (biar file-nya lebih ringan / rasio potret):
        // type: "video",
        // src: "gambar/hero-bg-mobile.mp4",
        // poster: "gambar/hero-bg-mobile-poster.jpg"
    }
};

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const wrap = document.getElementById("heroBg");
        if (!wrap) return;

        const root = window.HERO_BACKGROUND || {};
        const breakpoint = typeof root.breakpoint === "number" ? root.breakpoint : 640;

        let currentMode = null; // "mobile" | "desktop" — biar nggak bangun ulang elemen tiap resize kalau kategorinya sama aja

        function pickConfig() {
            const isMobile = window.innerWidth <= breakpoint;
            const mobileCfg = root.mobile;
            const desktopCfg = root.desktop;

            // kalau slot mobile kosong/none, HP ikut fallback ke desktop
            if (isMobile && mobileCfg && mobileCfg.type && mobileCfg.type !== "none" && mobileCfg.src) {
                return { mode: "mobile", cfg: mobileCfg };
            }
            return { mode: "desktop", cfg: desktopCfg };
        }

        function clearMedia() {
            const old = wrap.querySelector(".hero-bg-media");
            if (old) old.remove();
        }

        function buildMedia(cfg) {
            if (!cfg || !cfg.type || cfg.type === "none" || !cfg.src) return null;

            if (cfg.type === "video") {
                const media = document.createElement("video");
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

                // sebagian browser mobile tetap butuh play() dipanggil
                // manual begitu metadata-nya kebaca
                media.addEventListener("loadedmetadata", function () {
                    const p = media.play();
                    if (p && typeof p.catch === "function") p.catch(function () {});
                });

                return media;
            }

            if (cfg.type === "image") {
                const media = document.createElement("img");
                media.className = "hero-bg-media";
                media.src = cfg.src;
                media.alt = "";
                media.addEventListener("error", function () {
                    media.remove();
                });
                return media;
            }

            return null;
        }

        function applyForViewport() {
            const picked = pickConfig();
            if (picked.mode === currentMode) return; // kategori sama, nggak usah bangun ulang

            currentMode = picked.mode;
            clearMedia();

            const media = buildMedia(picked.cfg);
            if (media) wrap.insertBefore(media, wrap.firstChild);
        }

        applyForViewport();

        // debounce ringan biar nggak bangun ulang elemen puluhan kali
        // pas lagi di-drag resize (misal browser laptop dilebar-kecilin)
        let resizeTimer = null;
        window.addEventListener("resize", function () {
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = setTimeout(applyForViewport, 200);
        });
    });
})();
