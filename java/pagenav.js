/* ================================================================
   PAGE NAVIGATOR — titik + panah di kanan layar
   Nunjukin section mana yang lagi keliatan (Home/Katalog/Favorit/
   Tentang) pakai IntersectionObserver, sama kayak scrollspy navbar
   di nav.js. Titik yang aktif jadi pill amber lebih panjang. Titik
   dan panah atas-bawah bisa diklik buat lompat langsung ke section
   lain, scroll-nya halus karena html udah punya scroll-behavior:smooth.
================================================================= */

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const nav = document.getElementById("pageNav");
        if (!nav) return;

        const dots = Array.from(nav.querySelectorAll(".page-nav-dot"));
        const btnUp = document.getElementById("pageNavUp");
        const btnDown = document.getElementById("pageNavDown");

        const sections = dots
            .map(function (dot) {
                const el = document.getElementById(dot.getAttribute("data-target"));
                return el ? { el: el, dot: dot } : null;
            })
            .filter(Boolean);

        /* kalau section-nya nggak ketemu semua (misal dipasang di
           halaman lain yang beda struktur), navigator disembunyikan
           aja daripada nampilin titik yang nggak nyambung */
        if (sections.length < 2) {
            nav.style.display = "none";
            return;
        }

        let currentIndex = 0;

        function setActiveIndex(index) {
            currentIndex = index;
            sections.forEach(function (s, i) {
                s.dot.classList.toggle("active", i === index);
            });
            if (btnUp) btnUp.classList.toggle("is-disabled", index === 0);
            if (btnDown) btnDown.classList.toggle("is-disabled", index === sections.length - 1);
        }

        function goToIndex(index) {
            const clamped = Math.max(0, Math.min(sections.length - 1, index));
            sections[clamped].el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        dots.forEach(function (dot, i) {
            dot.addEventListener("click", function () {
                goToIndex(i);
            });
        });

        if (btnUp) {
            btnUp.addEventListener("click", function () {
                goToIndex(currentIndex - 1);
            });
        }

        if (btnDown) {
            btnDown.addEventListener("click", function () {
                goToIndex(currentIndex + 1);
            });
        }

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                function (entries) {
                    const visible = entries
                        .filter(function (e) { return e.isIntersecting; })
                        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });

                    if (visible.length) {
                        const idx = sections.findIndex(function (s) { return s.el === visible[0].target; });
                        if (idx !== -1) setActiveIndex(idx);
                    }
                },
                {
                    rootMargin: "-35% 0px -55% 0px",
                    threshold: [0, 0.25, 0.5, 0.75, 1]
                }
            );

            sections.forEach(function (s) { observer.observe(s.el); });
        }

        setActiveIndex(0);
    });
})();
