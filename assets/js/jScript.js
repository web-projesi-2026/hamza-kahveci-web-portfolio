// Scroll fade-up animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});

// Theme toggle
const toggle = document.getElementById('theme-toggle');
const label = document.getElementById('theme-label');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  if (label) label.textContent = 'Açık Tema';
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (label) label.textContent = isDark ? 'Açık Tema' : 'Koyu Tema';
  });
}

// =============================================
// SCROLL TO TOP BUTTON
// =============================================
const scrollTopBtn = document.getElementById('scroll-top-btn');

if (scrollTopBtn) {
  // Show button when user is near the bottom of the page
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY + window.innerHeight;
    const total = document.documentElement.scrollHeight;
    // Appear when within 300px of the bottom
    if (total - scrolled < 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =============================================
// HOBBY MODAL
// =============================================
const modalOverlay = document.getElementById('hobby-modal-overlay');
const modalClose  = document.getElementById('hobby-modal-close');
const modalNum    = document.getElementById('modal-num');
const modalTitle  = document.getElementById('modal-title');
const modalDesc   = document.getElementById('modal-desc');

// Detect touch/mobile device
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

function openHobbyModal(card) {
  modalNum.textContent   = card.dataset.num;
  modalTitle.textContent = card.dataset.title;
  modalDesc.textContent  = card.dataset.desc;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeHobbyModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.hobby-card').forEach(card => {
  // Desktop: open on hover, close when mouse leaves the overlay
  card.addEventListener('mouseenter', () => {
    if (!isTouchDevice()) openHobbyModal(card);
  });

  // Mobile & desktop: open on click/tap
  card.addEventListener('click', () => openHobbyModal(card));

  // Keyboard accessibility
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openHobbyModal(card);
    }
  });
});

if (modalClose)   modalClose.addEventListener('click', closeHobbyModal);

// Close when clicking the backdrop
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeHobbyModal();
  });

  // Close modal when mouse leaves the overlay on desktop
  modalOverlay.addEventListener('mouseleave', () => {
    if (!isTouchDevice()) closeHobbyModal();
  });
}

// Escape key closes modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
    closeHobbyModal();
  }
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  // Menüyü aç / kapat
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    // Menü açıkken sayfanın scroll'unu kilitle
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Mobil menüdeki linklere tıklanınca menüyü kapat
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Escape tuşuyla menüyü kapat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
