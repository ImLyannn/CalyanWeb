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
