/* ================= THEME TOGGLE (night mode / light mode) ================= */
/* Tema awal sudah di-set lebih dulu lewat inline script di <head> biar nggak
   ada kedipan warna pas halaman baru load. Di sini tinggal urus tombolnya. */

(function () {
    var STORAGE_KEY = 'calyanprint-theme';

    function getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem(STORAGE_KEY, theme);

        var btn = document.getElementById('themeToggle');
        if (btn) {
            btn.setAttribute(
                'aria-label',
                theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'
            );
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('themeToggle');
        if (!btn) return;

        // set label awal sesuai tema yang sudah aktif
        setTheme(getCurrentTheme());

        btn.addEventListener('click', function () {
            setTheme(getCurrentTheme() === 'light' ? 'dark' : 'light');
        });
    });
})();
