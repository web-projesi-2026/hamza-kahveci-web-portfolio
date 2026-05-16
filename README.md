# Hamza Kahveci — Kişisel Web Portfolyosu

> Crimson & White temalı, modern ve minimalist kişisel portfolyo sitesi.

🌐 **Canlı Demo:** [web-projesi-2026.github.io/hamza-kahveci-web-portfolio](https://web-projesi-2026.github.io/hamza-kahveci-web-portfolio/)

---

## 📄 Sayfalar

| Sayfa | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa — Hakkımda, Beceriler, Hobiler |
| `pages/about.html` | Detaylı hakkımda sayfası |
| `pages/projects.html` | Projeler — Arama, filtreleme ve favori sistemi |
| `pages/contact.html` | İletişim bilgileri ve doğrulamalı form |
| `pages/admin.html` | Proje yönetim paneli (giriş korumalı) |

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| HTML5 | Sayfa yapısı ve içerik |
| CSS3 | Tema, stil ve animasyonlar |
| JavaScript (ES6+) | Etkileşim, tema geçişi ve dinamik içerik |
| Firebase Firestore | Proje verilerinin veritabanında saklanması |
| Firebase Auth | Admin paneli için kullanıcı girişi |
| OpenWeather API | Anlık hava durumu widget'ı |

> Geliştirme sürecinde **Claude (Sonnet 4.6)** yapay zekasından yararlanılmıştır.

---

## ✨ Özellikler

### Kullanıcı Deneyimi
- 🎨 **İki tema desteği** — Crimson + Beyaz / Crimson + Siyah
- 📱 **Mobil uyumlu** tasarım ve hamburger menü
- ⚡ **Scroll animasyonları** (Intersection Observer)
- 💾 **Tema tercihi kaydedilir** (localStorage)
- ☁️ **Anlık hava durumu** widget'ı (konum bazlı, önbellekli)

### Projeler Sayfası
- 🔍 **Canlı arama** — proje adı ve açıklamada anlık arama
- 🗂️ **Kategori filtreleme** — Web, Masaüstü, Tasarım
- ❤️ **Favori sistemi** — localStorage ile kalıcı
- 🔄 **JSON yedek sistemi** — Firebase erişilemezse `projects.json` devreye girer

### Admin Paneli
- 🔐 **Firebase Authentication** ile giriş koruması
- ➕ Proje **ekleme**
- ✏️ Proje **güncelleme**
- 🗑️ Proje **silme**
- 📋 Mevcut projeleri **listeleme**

### Kod Kalitesi
- 🧩 **`components.js`** — Nav, mobil menü ve footer tek yerden yönetilir, tüm sayfalara otomatik enjekte edilir
- ♻️ Kod tekrarı minimize edilmiştir

---

## 📁 Dosya Yapısı

```
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── data/
│   │   └── projects.json       ← Firebase için yedek veri kaynağı
│   ├── img/
│   │   ├── bg_img.png
│   │   └── favicon.ico
│   └── js/
│       ├── components.js       ← Ortak nav/footer bileşenleri
│       ├── firebase-config.js  ← Firebase bağlantı ayarları
│       └── jScript.js          ← Genel etkileşimler ve widget'lar
└── pages/
    ├── about.html
    ├── admin.html
    ├── contact.html
    └── projects.html
```

---

## 🗄️ Veritabanı İşlemleri

Firebase Firestore üzerinde aşağıdaki CRUD işlemleri gerçekleştirilmektedir:

| İşlem | Sayfa | Açıklama |
|-------|-------|----------|
| **Listeleme** | `projects.html` | Tüm projeler kartlar halinde listelenir |
| **Ekleme** | `admin.html` | Yeni proje Firebase'e kaydedilir |
| **Güncelleme** | `admin.html` | Mevcut proje bilgileri düzenlenir |
| **Silme** | `admin.html` | Proje kalıcı olarak silinir |
| **Giriş** | `admin.html` | Firebase Auth ile kimlik doğrulama |

---

## 🌐 API Kullanımı

### OpenWeather API
- Kullanıcının tarayıcı konumuna göre anlık hava durumu gösterilir.
- Tarayıcı konumu reddedilirse IP adresi üzerinden konum tespit edilir.
- Veriler 30 dakika boyunca `sessionStorage`'da önbelleğe alınır, gereksiz API çağrısı yapılmaz.

### JSON Fallback
- `assets/data/projects.json` dosyası Firebase erişilemez olduğunda otomatik olarak devreye girer.
- Kullanıcı, sayfada gösterilen uyarı bandı ile bu durumdan haberdar edilir.

---

## 📬 İletişim

| Platform | Link |
|----------|------|
| GitHub | [github.com/gb0u](https://github.com/gb0u) |
| LinkedIn | [hamza-kahveci](https://www.linkedin.com/in/hamza-kahveci-b016393a2/) |
| E-posta | hamzakahveci447@gmail.com |

---

© 2026 Hamza Kahveci — Tüm hakları saklıdır.
