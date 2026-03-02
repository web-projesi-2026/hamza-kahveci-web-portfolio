/* ============================================================
   PORTFOLIO jScript.js  – FIXED
   – Custom cursor (always visible, no blend-mode issues)
   – EN / TR language toggle (syntax-error-free strings)
   – Scroll reveal, counters, mobile nav, contact form
   ============================================================ */

(function () {
  'use strict';

  /* ── Language Definitions ── */
  var LANG = {
    en: {
      'nav.home':      'Main Page',
      'nav.projects':  'Projects',
      'nav.about':     'About Me',
      'nav.contact':   'Contact Me',
      'hero.eyebrow':  'Welcome to my portfolio',
      'hero.sub':      'I build <strong>modern digital experiences</strong> &mdash; clean, fast, and purposeful.',
      'hero.cta1':     'View Projects',
      'hero.cta2':     'Contact Me',
      'label.skills':   'What I do',
      'label.projects': 'Selected work',
      'label.about':    'Who I am',
      'label.contact':  'Get in touch',
      'title.skills':   'Skills &amp; Services',
      'title.projects': 'Projects',
      'title.about':    'About Me',
      'title.contact':  'Contact',
      'desc.skills':   'A curated set of tools and disciplines mastered over the years.',
      'desc.projects': 'A selection of the work I am most proud of.',
      'desc.about':    'A bit about my journey, passions, and how I work.',
      'desc.contact':  'Have a project in mind or just want to say hello?',
      'skill.1.title': 'Frontend Dev',
      'skill.1.desc':  'Building pixel-perfect, performant interfaces with modern frameworks.',
      'skill.2.title': 'Backend Dev',
      'skill.2.desc':  'Scalable APIs, databases and server-side logic.',
      'skill.3.title': 'UI/UX Design',
      'skill.3.desc':  'Crafting user experiences that are intuitive and beautiful.',
      'skill.4.title': 'DevOps',
      'skill.4.desc':  'Deployment pipelines, containers, CI/CD workflows.',
      'stat.projects': 'Projects',
      'stat.clients':  'Happy Clients',
      'stat.years':    'Years Experience',
      'stat.coffees':  'Coffees Drunk',
      'proj.tag.web':    'Web App',
      'proj.tag.mobile': 'Mobile',
      'proj.tag.design': 'Design',
      'proj.1.title': 'Project Alpha',
      'proj.1.desc':  'A full-stack web application with real-time data sync, dark-mode support, and a custom design system.',
      'proj.2.title': 'Project Beta',
      'proj.2.desc':  'E-commerce platform with headless CMS integration and custom checkout flow.',
      'proj.3.title': 'Project Gamma',
      'proj.3.desc':  'Cross-platform mobile application for task management with offline-first architecture.',
      'proj.4.title': 'Project Delta',
      'proj.4.desc':  'Brand identity and full design system for a fintech startup.',
      'proj.5.title': 'Project Epsilon',
      'proj.5.desc':  'Real-time dashboard with WebSocket feeds, custom charting and role-based access.',
      'proj.6.title': 'Project Zeta',
      'proj.6.desc':  'Open-source CLI tool for automating repetitive developer workflows.',
      'about.p1': 'I\'m a <strong>full-stack developer</strong> with a passion for creating elegant digital solutions. My journey started with curiosity about how things work on the internet and turned into a career building them.',
      'about.p2': 'I believe great software is the intersection of <strong>technical precision</strong> and <strong>human empathy</strong>. I care deeply about every detail &mdash; from database schema to micro-animation.',
      'about.p3': 'When I\'m not coding, you\'ll find me exploring new frameworks, contributing to open source, or hunting for the perfect cup of coffee.',
      'about.photo.label': "That's me",
      'tl.1.year':  '2019', 'tl.1.title': 'Started coding',
      'tl.1.desc':  'Built my first website and immediately got hooked.',
      'tl.2.year':  '2021', 'tl.2.title': 'First job',
      'tl.2.desc':  'Joined a startup as a junior developer. Shipped fast, learned faster.',
      'tl.3.year':  '2023', 'tl.3.title': 'Went freelance',
      'tl.3.desc':  'Started working with international clients on exciting projects.',
      'tl.4.year':  '2025', 'tl.4.title': 'Now',
      'tl.4.desc':  'Building ambitious things and always looking for the next challenge.',
      'contact.p':        'I\'m always open to new opportunities, collaborations, or just a good conversation. Drop me a line.',
      'contact.email':    'youremail@example.com',
      'contact.github':   'github.com/yourusername',
      'contact.linkedin': 'linkedin.com/in/yourprofile',
      'form.name':    'Full Name',
      'form.email':   'Email Address',
      'form.subject': 'Subject',
      'form.message': 'Message',
      'form.send':    'Send Message',
      'form.success': "Message sent! I'll get back to you soon.",
      'form.error':   'Something went wrong. Please try again.',
      'footer.copy':  '\u00a9 2025 Hamza Kahveci. All rights reserved.'
    },

    tr: {
      'nav.home':      'Ana Sayfa',
      'nav.projects':  'Projeler',
      'nav.about':     'Hakk\u0131mda',
      'nav.contact':   '\u0130leti\u015fim',
      'hero.eyebrow':  'Portfolyoma ho\u015f geldiniz',
      'hero.sub':      '<strong>Modern dijital deneyimler</strong> in\u015fa ediyorum &mdash; temiz, h\u0131zl\u0131 ve amaca y\u00f6nelik.',
      'hero.cta1':     'Projeleri G\u00f6r',
      'hero.cta2':     '\u0130leti\u015fim',
      'label.skills':   'Ne yap\u0131yorum',
      'label.projects': 'Se\u00e7ili \u00e7al\u0131\u015fmalar',
      'label.about':    'Ben kimim',
      'label.contact':  '\u0130leti\u015fime ge\u00e7',
      'title.skills':   'Beceriler &amp; Hizmetler',
      'title.projects': 'Projeler',
      'title.about':    'Hakk\u0131mda',
      'title.contact':  '\u0130leti\u015fim',
      'desc.skills':   'Y\u0131llar i\u00e7inde edinilen ara\u00e7lar ve disiplinlerin se\u00e7kisi.',
      'desc.projects': 'En gurur duydu\u011fum \u00e7al\u0131\u015fmalardan bir se\u00e7ki.',
      'desc.about':    'Yolculu\u011fum, tutkular\u0131m ve \u00e7al\u0131\u015fma \u015feklim hakk\u0131nda biraz bilgi.',
      'desc.contact':  'Akl\u0131nda bir proje mi var ya da sadece merhaba m\u0131 demek istiyorsun?',
      'skill.1.title': 'Frontend Geli\u015ftirme',
      'skill.1.desc':  'Modern frameworklerle piksel m\u00fckemmeliyetinde, performansl\u0131 aray\u00fczler.',
      'skill.2.title': 'Backend Geli\u015ftirme',
      'skill.2.desc':  '\u00d6l\u00e7eklenebilir APIler, veritabanlar\u0131 ve sunucu taraf\u0131 mant\u0131\u011f\u0131.',
      'skill.3.title': 'UI/UX Tasar\u0131m',
      'skill.3.desc':  'Sezgisel ve g\u00fczel kullan\u0131c\u0131 deneyimleri tasarlama.',
      'skill.4.title': 'DevOps',
      'skill.4.desc':  'Da\u011f\u0131t\u0131m s\u00fcre\u00e7leri, konteynerlar ve CI/CD i\u015f ak\u0131\u015flar\u0131.',
      'stat.projects': 'Proje',
      'stat.clients':  'Mutlu M\u00fc\u015fteri',
      'stat.years':    'Y\u0131l Deneyim',
      'stat.coffees':  'Kahve \u0130\u00e7ildi',
      'proj.tag.web':    'Web Uygulamas\u0131',
      'proj.tag.mobile': 'Mobil',
      'proj.tag.design': 'Tasar\u0131m',
      'proj.1.title': 'Proje Alfa',
      'proj.1.desc':  'Ger\u00e7ek zamanl\u0131 veri senkronizasyonu, karanl\u0131k mod ve \u00f6zel tasar\u0131m sistemi olan full-stack web uygulamas\u0131.',
      'proj.2.title': 'Proje Beta',
      'proj.2.desc':  'Headless CMS entegrasyonu ve \u00f6zel \u00f6deme ak\u0131\u015f\u0131 olan e-ticaret platformu.',
      'proj.3.title': 'Proje Gama',
      'proj.3.desc':  '\u00c7evrimd\u0131\u015f\u0131 \u00f6ncelikli mimariye sahip g\u00f6rev y\u00f6netimi i\u00e7in \u00e7apraz platform mobil uygulama.',
      'proj.4.title': 'Proje Delta',
      'proj.4.desc':  'Bir fintech giri\u015fimi i\u00e7in marka kimli\u011fi ve tam tasar\u0131m sistemi.',
      'proj.5.title': 'Proje Epsilon',
      'proj.5.desc':  'WebSocket beslemeleri, \u00f6zel grafik ve rol tabanl\u0131 eri\u015fim i\u00e7eren ger\u00e7ek zamanl\u0131 panel.',
      'proj.6.title': 'Proje Zeta',
      'proj.6.desc':  'Tekrarlayan geli\u015ftirici i\u015f ak\u0131\u015flar\u0131n\u0131 otomatikle\u015ftiren a\u00e7\u0131k kaynak CLI arac\u0131.',
      'about.p1': '<strong>Full-stack bir geli\u015ftirici</strong> olarak zarif dijital \u00e7\u00f6z\u00fcmler \u00fcretme tutku\u015fum var. Yolculu\u011fum, internetin nas\u0131l \u00e7al\u0131\u015ft\u0131\u011f\u0131na duydu\u011fum merakla ba\u015flad\u0131 ve onlar\u0131 in\u015fa etmek bir kariyere d\u00f6n\u00fc\u015ft\u00fc.',
      'about.p2': 'Harika yaz\u0131l\u0131m\u0131n <strong>teknik hassasiyet</strong> ile <strong>insan empatisi</strong>nin kesi\u015fiminde oldu\u011funa inan\u0131yorum. Veritaban\u0131 \u015femas\u0131ndan mikro animasyona kadar her detay\u0131 \u00f6nemsiyorum.',
      'about.p3': 'Kod yazmad\u0131\u011f\u0131m zamanlarda yeni frameworkler ke\u015ffediyor, a\u00e7\u0131k kayna\u011fa katk\u0131da bulunuyor ya da m\u00fckemmel bir kahve pe\u015finde ko\u015fuyorum.',
      'about.photo.label': 'Bu benim',
      'tl.1.year':  '2019', 'tl.1.title': 'Kodlamaya ba\u015flad\u0131m',
      'tl.1.desc':  '\u0130lk web sitemi yapt\u0131m ve hemen ba\u011fland\u0131m.',
      'tl.2.year':  '2021', 'tl.2.title': '\u0130lk i\u015f',
      'tl.2.desc':  'Bir startupa junior geli\u015ftirici olarak kat\u0131ld\u0131m. H\u0131zl\u0131 g\u00f6nderdim, daha h\u0131zl\u0131 \u00f6\u011frendim.',
      'tl.3.year':  '2023', 'tl.3.title': 'Serbest \u00e7al\u0131\u015fmaya ba\u015flad\u0131m',
      'tl.3.desc':  'Uluslararas\u0131 m\u00fc\u015fterilerle heyecan verici projeler \u00fczerinde \u00e7al\u0131\u015fmaya ba\u015flad\u0131m.',
      'tl.4.year':  '2025', 'tl.4.title': '\u015eimdi',
      'tl.4.desc':  '\u0130ddial\u0131 \u015feyler in\u015fa ediyorum ve her zaman bir sonraki zorlu\u011fu ar\u0131yorum.',
      'contact.p':        'Her zaman yeni f\u0131rsatlara, i\u015fbirliklere veya sadece g\u00fczel bir sohbete a\u00e7\u0131\u011f\u0131m. Mesaj b\u0131rak.',
      'contact.email':    'senemail@ornek.com',
      'contact.github':   'github.com/kullaniciadin',
      'contact.linkedin': 'linkedin.com/in/profilin',
      'form.name':    'Ad Soyad',
      'form.email':   'E-posta Adresi',
      'form.subject': 'Konu',
      'form.message': 'Mesaj',
      'form.send':    'Mesaj G\u00f6nder',
      'form.success': 'Mesaj\u0131n iletildi! Yak\u0131nda d\u00f6n\u00fc\u015f yapaca\u011f\u0131m.',
      'form.error':   'Bir \u015feyler ters gitti. L\u00fctfen tekrar dene.',
      'footer.copy':  '\u00a9 2025 Hamza Kahveci. T\u00fcm haklar\u0131 sakl\u0131d\u0131r.'
    }
  };

  var currentLang = localStorage.getItem('portfolio-lang') || 'en';

  /* ── Apply language to page ── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'tr' ? 'tr' : 'en');

    // All elements with data-i18n get their innerHTML replaced
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = LANG[lang][key];
      if (val === undefined) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });

    // Separately handle data-i18n-placeholder (contact form fields)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = LANG[lang][key];
      if (val !== undefined) el.placeholder = val;
    });

    // Sync active state on every lang button (desktop + mobile sets)
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  /* ── Language toggle init ── */
  function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
    applyLang(currentLang);
  }

  /* ── Custom Cursor ── */
  function initCursor() {
    var dot  = document.getElementById('cursor');
    var ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    // Both hidden until first mouse movement
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
    // Start off-screen so they don't flash at 0,0
    dot.style.left  = '-200px';
    dot.style.top   = '-200px';
    ring.style.left = '-200px';
    ring.style.top  = '-200px';

    var mx = -200, my = -200;
    var rx = -200, ry = -200;
    var revealed = false;

    document.addEventListener('mousemove', function(e) {
      mx = e.clientX;
      my = e.clientY;
      if (!revealed) {
        // Snap ring to exact mouse position on first move (no lag flash)
        rx = mx;
        ry = my;
        revealed = true;
        dot.style.opacity  = '1';
        ring.style.opacity = '0.6';
      }
    });

    document.addEventListener('mouseleave', function() {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function() {
      if (revealed) {
        dot.style.opacity  = '1';
        ring.style.opacity = '0.6';
      }
    });

    function tick() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(tick);
    }
    tick();

    document.querySelectorAll('a, button, .btn, .project-card, .skill-card, input, textarea').forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        dot.style.width   = '6px';
        dot.style.height  = '6px';
        ring.style.width  = '52px';
        ring.style.height = '52px';
        ring.style.opacity = '1';
        ring.style.borderColor = 'var(--red-bright)';
      });
      el.addEventListener('mouseleave', function() {
        dot.style.width   = '12px';
        dot.style.height  = '12px';
        ring.style.width  = '36px';
        ring.style.height = '36px';
        ring.style.opacity = '0.6';
        ring.style.borderColor = 'var(--red)';
      });
    });
  }

  /* ── Scroll Reveal ── */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function(el) { obs.observe(el); });
  }

  /* ── Counter Animation ── */
  function animateCounter(el, target, dur) {
    var start = 0;
    var fn = function(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(fn);
      else el.textContent = target;
    };
    requestAnimationFrame(fn);
  }
  function initCounters() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { animateCounter(e.target, parseInt(e.target.dataset.count), 1600); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(function(el) { obs.observe(el); });
  }

  /* ── Mobile Nav ── */
  function initMobileNav() {
    var btn = document.getElementById('navHamburger');
    var nav = document.getElementById('mobileNav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function() {
      btn.classList.toggle('open');
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(nav.classList.contains('open')));
    });
    nav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        btn.classList.remove('open');
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Active nav link ── */
  function initActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function(a) {
      var href = (a.getAttribute('href') || '').split('/').pop();
      a.classList.toggle('active', href === page);
    });
  }

  /* ── Contact Form ── */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var submitBtn = form.querySelector('[type="submit"]');
      var msg = document.getElementById('formMsg');
      submitBtn.disabled = true;
      submitBtn.textContent = '...';
      setTimeout(function() {
        var ok = true;
        msg.textContent = LANG[currentLang][ok ? 'form.success' : 'form.error'];
        msg.className   = 'form-msg visible ' + (ok ? 'success' : 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = LANG[currentLang]['form.send'];
        if (ok) form.reset();
      }, 1200);
    });
  }

  /* ── Loader ── */
  function initLoader() {
    var loader = document.getElementById('pageLoader');
    if (!loader) return;
    loader.addEventListener('animationend', function() { loader.remove(); });
  }

  /* ── Page fade transitions ── */
  function initPageTransitions() {
    document.body.style.opacity = '0';
    requestAnimationFrame(function() {
      document.body.style.transition = 'opacity 0.35s ease';
      document.body.style.opacity = '1';
    });
    document.querySelectorAll('a[href]').forEach(function(a) {
      var href = a.getAttribute('href');
      if (!href || href[0] === '#' || href.indexOf('http') === 0 || href.indexOf('mailto') === 0) return;
      a.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.style.transition = 'opacity 0.22s ease';
        document.body.style.opacity = '0';
        setTimeout(function() { window.location.href = href; }, 240);
      });
    });
  }

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', function() {
    initLoader();
    initLangToggle();
    initCursor();
    initReveal();
    initCounters();
    initMobileNav();
    initActiveNav();
    initContactForm();
    initPageTransitions();
  });

})();
