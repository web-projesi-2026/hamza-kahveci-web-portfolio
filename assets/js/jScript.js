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

// =============================================
// OPENWEATHER API - HAVA DURUMU WIDGET'I (ÖNBELLEK DESTEKLİ)
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  const widgetHTML = `
    <div id="weather-widget" class="weather-widget fade-up visible">
      <span style="color: var(--muted); font-size: 0.7rem;">Konum aranıyor...</span>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", widgetHTML);

  const weatherWidget = document.getElementById('weather-widget');
  const API_KEY = "b2140358f68f3d26c20d7697a0eb69df";

  // 1. HAFIZA KONTROLÜ: Veri daha önce çekilmiş mi?
  const cachedWeather = sessionStorage.getItem('weatherCache');
  const cacheTime = sessionStorage.getItem('weatherCacheTime');
  const now = new Date().getTime();

  // Eğer hafızada veri varsa ve üzerinden 30 dakikadan (1800000 ms) az zaman geçmişse, doğrudan onu kullan
  if (cachedWeather && cacheTime && (now - cacheTime < 1800000)) {
    weatherWidget.innerHTML = cachedWeather;
    return; // İşlemi burada kes, tekrar konum sorma veya API'ye bağlanma
  }

  // 2. HAFIZADA YOKSA: API'den veriyi çek
  async function getWeather(lat, lon) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`;
      const response = await fetch(url);
      
      if (!response.ok) throw new Error("Hava durumu verisi alınamadı");
      
      const data = await response.json();
      
      const temp = Math.round(data.main.temp);
      const desc = data.weather[0].description;
      const city = data.name;
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      const descCapitalized = desc.charAt(0).toUpperCase() + desc.slice(1);

      // Ekrana basılacak son HTML yapısı
      const finalHTML = `
        <img src="${iconUrl}" alt="${desc}" class="weather-icon" />
        <div class="weather-info">
          <strong>${city}</strong>
          <span>${temp}°C</span>
          <span style="color: var(--muted); margin-left: 0.2rem;">| ${descCapitalized}</span>
        </div>
      `;

      // Widget'ı güncelle
      weatherWidget.innerHTML = finalHTML;

      // 3. HAFIZAYA KAYDET: Bir sonraki sayfa geçişinde kullanmak üzere sakla
      sessionStorage.setItem('weatherCache', finalHTML);
      sessionStorage.setItem('weatherCacheTime', now.toString());

    } catch (error) {
      weatherWidget.innerHTML = `<span style="color: var(--accent);">⚠️ Hava durumu yüklenemedi</span>`;
      console.error(error);
    }
  }

  // Tarayıcı konumu bulamazsa devreye girecek B Planı (IP API)
  function getLocationFromIP() {
  // IP servisleri Türkiye'de güvenilir sonuç vermediği için
  // doğrudan varsayılan şehre düşüyoruz
  console.info("Tarayıcı konumu alınamadı. Varsayılan konum: Kırşehir");
  getWeather(39.1458, 34.1639);
}

  // Kullanıcının konumunu almayı dene
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // A Planı: Tarayıcı konumu başarıyla buldu
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        // Hata oldu veya zaman aşımına uğradı -> B Planına (IP) geç
        console.warn("Tarayıcı konumu bulamadı, IP üzerinden aranıyor...");
        getLocationFromIP();
      },
      { timeout: 10000 } // 10 saniye içinde bulamazsa B planına geç
    );
  } else {
    // Tarayıcı konum desteklemiyorsa direkt B planına geç
    getLocationFromIP();
  }
});
