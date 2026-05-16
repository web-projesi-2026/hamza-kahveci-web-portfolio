// =============================================
// COMPONENTS.JS — Tekrarlayan HTML Bileşenleri
// Her sayfaya nav, mobile-menu ve footer'ı
// otomatik olarak enjekte eder.
// =============================================

(function () {
  // Sayfanın kök dizinde mi (index.html) yoksa
  // alt klasörde mi (pages/*.html) olduğunu tespit et
  const isSubPage = window.location.pathname.includes('/pages/');
  const root = isSubPage ? '../' : '';

  // ── NAV HTML ──────────────────────────────────────────
  const navHTML = `
    <nav>
      <a class="nav-logo" href="${root}index.html">HK<span>.</span></a>
      <ul class="nav-links">
        <li><a href="${root}index.html#hakkimda">Hakkımda</a></li>
        <li><a href="${root}index.html#beceriler">Beceriler</a></li>
        <li><a href="${root}index.html#hobiler">Hobiler</a></li>
        <li><a href="${root}pages/projects.html">Projeler</a></li>
        <li><a href="${root}pages/contact.html">İletişim</a></li>
      </ul>
      <div class="nav-right">
        <button class="theme-toggle" id="theme-toggle">
          <span class="dot"></span>
          <span id="theme-label">Koyu Tema</span>
        </button>
        <button class="hamburger" id="hamburger" aria-label="Menüyü aç">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>`;

  // ── MOBİL MENÜ HTML ───────────────────────────────────
  const mobileMenuHTML = `
    <div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Navigasyon Menüsü">
      <a href="${root}index.html#hakkimda">Hakkımda</a>
      <a href="${root}index.html#beceriler">Beceriler</a>
      <a href="${root}index.html#hobiler">Hobiler</a>
      <a href="${root}pages/projects.html">Projeler</a>
      <a href="${root}pages/contact.html">İletişim</a>
    </div>`;

  // ── FOOTER HTML ───────────────────────────────────────
  const footerHTML = `
    <footer>
      <p>© 2026 Hamza Kahveci — Tüm hakları saklıdır.</p>
    </footer>`;

  // ── ENJEKTE ET ────────────────────────────────────────
  // Nav'ı <body>'nin en başına ekle
  document.body.insertAdjacentHTML('afterbegin', mobileMenuHTML);
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Footer'ı <body>'nin en sonuna ekle
  // (Mevcut footer varsa onu kaldır, yoksa ekle)
  const existingFooter = document.querySelector('footer');
  if (existingFooter) {
    existingFooter.remove();
  }
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
