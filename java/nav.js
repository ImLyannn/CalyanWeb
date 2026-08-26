/* ================================================================
   NAV TOGGLE (MOBILE) — tombol panah di navbar hp
   Tap panah -> muncul bar menu horizontal tipis di bawah navbar,
   panah berputar jadi mengarah ke atas. Tap salah satu link -> nutup lagi.
================================================================= */

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const toggle = document.getElementById("navToggle");
    if (!nav || !toggle) return;

    function setOpen(open) {
      nav.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("nav-open"));
    });

    /* nutup otomatis begitu salah satu link menu dipilih */
    nav.querySelectorAll(".nav-menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        setOpen(false);
      });
    });

    /* nutup kalau tap di luar bar menu */
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("nav-open")) return;
      if (nav.contains(e.target)) return;
      setOpen(false);
    });
  });
})();

/* ================================================================
   SCROLLSPY — navbar nunjukkin kita lagi di section mana
   Nge-track section yang lagi paling keliatan di layar pakai
   IntersectionObserver, terus nyalain class "active" di link +
   li terkait (dot teal nyala + teks amber, di mobile jadi chip amber).
================================================================= */

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = Array.from(document.querySelectorAll(".nav-menu a[href^='#']"));
    if (!navLinks.length) return;

    const sections = navLinks
      .map(function (a) {
        const id = a.getAttribute("href").slice(1);
        const section = document.getElementById(id);
        return section ? { id: id, el: section, link: a, li: a.closest("li") } : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    function setActive(id) {
      sections.forEach(function (s) {
        const isActive = s.id === id;
        s.link.classList.toggle("active", isActive);
        if (s.li) s.li.classList.toggle("active", isActive);
      });
    }

    /* klik link -> langsung nyala duluan, nggak nunggu scroll kelar */
    navLinks.forEach(function (a) {
      a.addEventListener("click", function () {
        setActive(a.getAttribute("href").slice(1));
      });
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          const visible = entries
            .filter(function (e) { return e.isIntersecting; })
            .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });

          if (visible.length) {
            setActive(visible[0].target.id);
          }
        },
        {
          /* pita tipis di sekitar 35%-45% tinggi layar dari atas —
             section yang lewat situ dianggap "yang lagi diliat" */
          rootMargin: "-35% 0px -55% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1]
        }
      );

      sections.forEach(function (s) { observer.observe(s.el); });
    }

    /* default aktif pas pertama kali kebuka */
    setActive(sections[0].id);
  });
})();
