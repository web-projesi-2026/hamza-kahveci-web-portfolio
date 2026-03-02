/* ============================================================
   PORTFOLIO jScript.js
   – Custom cursor
   – EN / TR language toggle
   – Scroll reveal
   – Mobile nav
   – Counter animation
   – Contact form
   ============================================================ */

(function () {
  'use strict';

  /* ── Language Definitions ── */
  const LANG = {
    en: {
      /* Nav */
      'nav.home':      'Main Page',
      'nav.projects':  'Projects',
      'nav.about':     'About Me',
      'nav.contact':   'Contact Me',
      /* Hero */
      'hero.eyebrow':  'Welcome to my portfolio',
      'hero.sub':      'I build <strong>modern digital experiences</strong> — clean, fast, and purposeful.',
      'hero.cta1':     'View Projects',
      'hero.cta2':     'Contact Me',
      /* Section labels */
      'label.skills':   'What I do',
      'label.projects': 'Selected work',
      'label.about':    'Who I am',
      'label.contact':  'Get in touch',
      /* Section titles */
      'title.skills':   'Skills & Services',
      'title.projects': 'Projects',
      'title.about':    'About Me',
      'title.contact':  'Contact',
      /* Section descs */
      'desc.skills':   'A curated set of tools and disciplines I've mastered over the years.',
      'desc.projects': 'A selection of the work I'm most proud of.',
      'desc.about':    'A bit about my journey, passions, and how I work.',
      'desc.contact':  'Have a project in mind or just want to say hello?',
      /* Skill cards */
      'skill.1.title': 'Frontend Dev',
      'skill.1.desc':  'Building pixel-perfect, performant interfaces with modern frameworks.',
      'skill.2.title': 'Backend Dev',
      'skill.2.desc':  'Scalable APIs, databases and server-side logic.',
      'skill.3.title': 'UI/UX Design',
      'skill.3.desc':  'Crafting user experiences that are intuitive and beautiful.',
      'skill.4.title': 'DevOps',
      'skill.4.desc':  'Deployment pipelines, containers, CI/CD workflows.',
      /* Stats */
      'stat.projects': 'Projects',
      'stat.clients':  'Happy Clients',
      'stat.years':    'Years Experience',
      'stat.coffees':  'Coffees Drunk',
      /* Projects page */
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
      /* About page */
      'about.p1': 'I\'m a <strong>full-stack developer</strong> with a passion for creating elegant digital solutions. My journey started with curiosity about how things work on the internet and turned into a career building them.',
      'about.p2': 'I believe great software is the intersection of <strong>technical precision</strong> and <strong>human empathy</strong>. I care deeply about every detail — from database schema to micro-animation.',
      'about.p3': 'When I\'m not coding, you\'ll find me exploring new frameworks, contributing to open source, or hunting for the perfect cup of coffee.',
      'about.photo.label': 'That\'s me',
      'tl.1.year':  '2019',
      'tl.1.title': 'Started coding',
      'tl.1.desc':  'Built my first website and immediately got hooked.',
      'tl.2.year':  '2021',
      'tl.2.title': 'First job',
      'tl.2.desc':  'Joined a startup as a junior developer. Shipped fast, learned faster.',
      'tl.3.year':  '2023',
      'tl.3.title': 'Went freelance',
      'tl.3.desc':  'Started working with international clients on exciting projects.',
      'tl.4.year':  '2025',
      'tl.4.title': 'Now',
      'tl.4.desc':  'Building ambitious things and always looking for the next challenge.',
      /* Contact page */
      'contact.p':          'I\'m always open to new opportunities, collaborations, or just a good conversation. Drop me a line.',
      'contact.email':      'youremail@example.com',
      'contact.github':     'github.com/yourusername',
      'contact.linkedin':   'linkedin.com/in/yourprofile',
      'form.name':          'Full Name',
      'form.email':         'Email Address',
      'form.subject':       'Subject',
      'form.message':       'Message',
      'form.send':          'Send Message',
      'form.success':       'Message sent! I\'ll get back to you soon.',
      'form.error':         'Something went wrong. Please try again.',
      /* Footer */
      'footer.copy':        '© 2025 My Portfolio. All rights reserved.',
    },

    tr: {
      /* Nav */
      'nav.home':      'Ana Sayfa',
      'nav.projects':  'Projeler',
      'nav.about':     'Hakkımda',
      'nav.contact':   'İletişim',
      /* Hero */
      'hero.eyebrow':  'Portfolyoma hoş geldiniz',
      'hero.sub':      '<strong>Modern dijital deneyimler</strong> inşa ediyorum — temiz, hızlı ve amaca yönelik.',
      'hero.cta1':     'Projeleri Gör',
      'hero.cta2':     'İletişim',
      /* Section labels */
      'label.skills':   'Ne yapıyorum',
      'label.projects': 'Seçili çalışmalar',
      'label.about':    'Ben kimim',
      'label.contact':  'İletişime geç',
      /* Section titles */
      'title.skills':   'Beceriler & Hizmetler',
      'title.projects': 'Projeler',
      'title.about':    'Hakkımda',
      'title.contact':  'İletişim',
      /* Section descs */
      'desc.skills':   'Yıllar içinde edindiğim araçlar ve disiplinlerin seçkisi.',
      'desc.projects': 'En gurur duyduğum çalışmalardan bir seçki.',
      'desc.about':    'Yolculuğum, tutkularım ve çalışma şeklim hakkında biraz bilgi.',
      'desc.contact':  'Aklında bir proje mi var ya da sadece merhaba mı demek istiyorsun?',
      /* Skill cards */
      'skill.1.title': 'Frontend Geliştirme',
      'skill.1.desc':  'Modern framework\'lerle piksel mükemmeliyetinde, performanslı arayüzler.',
      'skill.2.title': 'Backend Geliştirme',
      'skill.2.desc':  'Ölçeklenebilir API\'ler, veritabanları ve sunucu tarafı mantığı.',
      'skill.3.title': 'UI/UX Tasarım',
      'skill.3.desc':  'Sezgisel ve güzel kullanıcı deneyimleri tasarlama.',
      'skill.4.title': 'DevOps',
      'skill.4.desc':  'Dağıtım süreçleri, konteynerlar ve CI/CD iş akışları.',
      /* Stats */
      'stat.projects': 'Proje',
      'stat.clients':  'Mutlu Müşteri',
      'stat.years':    'Yıl Deneyim',
      'stat.coffees':  'Kahve İçildi',
      /* Projects page */
      'proj.tag.web':    'Web Uygulaması',
      'proj.tag.mobile': 'Mobil',
      'proj.tag.design': 'Tasarım',
      'proj.1.title': 'Proje Alfa',
      'proj.1.desc':  'Gerçek zamanlı veri senkronizasyonu, karanlık mod ve özel tasarım sistemi olan full-stack web uygulaması.',
      'proj.2.title': 'Proje Beta',
      'proj.2.desc':  'Headless CMS entegrasyonu ve özel ödeme akışı olan e-ticaret platformu.',
      'proj.3.title': 'Proje Gama',
      'proj.3.desc':  'Çevrimdışı öncelikli mimariye sahip görev yönetimi için çapraz platform mobil uygulama.',
      'proj.4.title': 'Proje Delta',
      'proj.4.desc':  'Bir fintech girişimi için marka kimliği ve tam tasarım sistemi.',
      'proj.5.title': 'Proje Epsilon',
      'proj.5.desc':  'WebSocket beslemeleri, özel grafik ve rol tabanlı erişim içeren gerçek zamanlı panel.',
      'proj.6.title': 'Proje Zeta',
      'proj.6.desc':  'Tekrarlayan geliştirici iş akışlarını otomatikleştiren açık kaynak CLI aracı.',
      /* About page */
      'about.p1': '<strong>Full-stack bir geliştirici</strong> olarak zarif dijital çözümler üretme tutkunuz var. Yolculuğum, internetin nasıl çalıştığına duyduğum merakla başladı ve onları inşa etmek bir kariyere dönüştü.',
      'about.p2': 'Harika yazılımın <strong>teknik hassasiyet</strong> ile <strong>insan empatisin</strong>in kesişiminde olduğuna inanıyorum. Veritabanı şemasından mikro animasyona kadar her detayı önemsiyorum.',
      'about.p3': 'Kod yazmadığım zamanlarda yeni framework\'ler keşfediyor, açık kaynağa katkıda bulunuyor ya da mükemmel bir kahve peşinde koşuyorum.',
      'about.photo.label': 'Bu benim',
      'tl.1.year':  '2019',
      'tl.1.title': 'Kodlamaya başladım',
      'tl.1.desc':  'İlk web sitemi yaptım ve hemen bağlandım.',
      'tl.2.year':  '2021',
      'tl.2.title': 'İlk iş',
      'tl.2.desc':  'Bir startup\'a junior geliştirici olarak katıldım. Hızlı gönderdim, daha hızlı öğrendim.',
      'tl.3.year':  '2023',
      'tl.3.title': 'Serbest çalışmaya başladım',
      'tl.3.desc':  'Uluslararası müşterilerle heyecan verici projeler üzerinde çalışmaya başladım.',
      'tl.4.year':  '2025',
      'tl.4.title': 'Şimdi',
      'tl.4.desc':  'İddialı şeyler inşa ediyorum ve her zaman bir sonraki zorluğu arıyorum.',
      /* Contact page */
      'contact.p':          'Her zaman yeni fırsatlara, işbirliklerine veya sadece güzel bir sohbete açığım. Mesaj bırak.',
      'contact.email':      'senemail@ornek.com',
      'contact.github':     'github.com/kullaniciadin',
      'contact.linkedin':   'linkedin.com/in/profilin',
      'form.name':          'Ad Soyad',
      'form.email':         'E-posta Adresi',
      'form.subject':       'Konu',
      'form.message':       'Mesaj',
      'form.send':          'Mesaj Gönder',
      'form.success':       'Mesajın iletildi! Yakında dönüş yapacağım.',
      'form.error':         'Bir şeyler ters gitti. Lütfen tekrar dene.',
      /* Footer */
      'footer.copy':        '© 2025 Portfolyom. Tüm hakları saklıdır.',
    }
  };

  /* ── Current language (persisted) ── */
  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  /* ── Apply language ── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = LANG[lang][key];
      if (val === undefined) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });

    // Toggle active class on lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update html[lang]
    document.documentElement.setAttribute('lang', lang === 'tr' ? 'tr' : 'en');

    // Update page title
    if (lang === 'tr') {
      document.title = (document.title || '').replace('Portfolio', 'Portfolyo');
    } else {
      document.title = (document.title || '').replace('Portfolyo', 'Portfolio');
    }
  }

  /* ── Init language toggle buttons ── */
  function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
    applyLang(currentLang);
  }

  /* ── Custom Cursor ── */
  function initCursor() {
    const dot  = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    function animCursor() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();

    // Hover effects
    document.querySelectorAll('a, button, .btn, .project-card, .skill-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        dot.style.width  = '6px';
        dot.style.height = '6px';
        ring.style.width  = '54px';
        ring.style.height = '54px';
        ring.style.opacity = '1';
      });
      el.addEventListener('mouseleave', () => {
        dot.style.width  = '12px';
        dot.style.height = '12px';
        ring.style.width  = '36px';
        ring.style.height = '36px';
        ring.style.opacity = '0.6';
      });
    });
  }

  /* ── Scroll Reveal ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  }

  /* ── Counter Animation ── */
  function animateCounter(el, target, duration) {
    let start = 0;
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target, parseInt(e.target.dataset.count), 1600);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }

  /* ── Mobile Nav ── */
  function initMobileNav() {
    const btn = document.getElementById('navHamburger');
    const nav = document.getElementById('mobileNav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('open');
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        btn.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  /* ── Active nav link ── */
  function initActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(a => {
      const href = a.getAttribute('href').split('/').pop();
      a.classList.toggle('active', href === path);
    });
  }

  /* ── Contact Form ── */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const msg = document.getElementById('formMsg');
      const lang = currentLang;

      btn.disabled = true;
      btn.textContent = '...';

      // Simulate async send (replace with real fetch to your backend/formspree)
      setTimeout(() => {
        const success = true; // flip to false to test error
        msg.textContent = LANG[lang][success ? 'form.success' : 'form.error'];
        msg.className   = 'form-msg visible ' + (success ? 'success' : 'error');
        btn.disabled    = false;
        btn.textContent = LANG[lang]['form.send'];
        if (success) form.reset();
      }, 1200);
    });
  }

  /* ── Loader ── */
  function initLoader() {
    const loader = document.getElementById('pageLoader');
    if (!loader) return;
    loader.addEventListener('animationend', () => loader.remove());
  }

  /* ── Smooth page transitions ── */
  function initPageTransitions() {
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
      a.addEventListener('click', e => {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.25s ease';
        setTimeout(() => { window.location.href = href; }, 260);
      });
    });
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
      document.body.style.transition = 'opacity 0.4s ease';
      document.body.style.opacity = '1';
    });
  }

  /* ── Glitch text data-text sync ── */
  function initGlitch() {
    document.querySelectorAll('.glitch').forEach(el => {
      if (!el.dataset.text) el.dataset.text = el.textContent;
    });
  }

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initLangToggle();
    initCursor();
    initReveal();
    initCounters();
    initMobileNav();
    initActiveNav();
    initContactForm();
    initPageTransitions();
    initGlitch();
  });

})();
