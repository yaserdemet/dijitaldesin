---
name: project-architecture
description: Dijitaldesin projesinin sabit klasör haritası ve mimari kullanım kuralları. Yapay zekanın tüm proje ağacını taramasını engeller.
triggers:
  - klasör mimarisi
  - proje yapısı
  - dosya nerede
  - architecture
---

# Proje Mimarisi Haritası (Project Architecture)

Bu projede dosya ve klasör yerleşimi sabittir. Yapay zeka ajanları tüm dizini taramadan bu haritaya uymalıdır.

## Klasör Düzeni

```
dijitaldesin/
├── public/                 # Statik görsel ve varlıklar
├── src/
│   ├── assets/             # Görseller ve medya
│   ├── layout/             # Sayfa düzen bileşenleri
│   │   ├── Layout.jsx      # Ana şablon (Navbar + Outlet + Footer)
│   │   ├── Navbar.jsx      # Üst menü bileşeni
│   │   └── Footer.jsx      # Alt bilgi bileşeni
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Home.jsx        # Anasayfa
│   │   ├── About.jsx       # Hakkımızda
│   │   ├── Services.jsx    # Hizmetlerimiz
│   │   ├── Contact.jsx     # İletişim
│   │   └── LoadingPage.jsx # Yüklenme ekranı
│   ├── router/             # Yönlendirme mantığı
│   │   ├── path.js         # URL path sabitleri
│   │   ├── element.jsx     # Lazy loading ve bileşen eşleştirmeleri
│   │   └── AppRouter.jsx   # React Router DOM konfigürasyonu
│   ├── App.jsx             # Kök uygulama bileşeni (RouterProvider)
│   ├── main.jsx            # React giriş noktası
│   └── index.css           # Tailwind CSS ve global stiller
├── AGENTS.md               # Genel AI talimatları
└── .codegpt/skills/        # Özel AI skill dosyaları
```

## Mimari Kurallar

1. **Gereksiz Arama/Taramadan Kaçın:** Dosya bulmak için tüm dizinlerde döngüsel arama yapmayın.
2. **Bileşen Konumlandırma:**
   - Sayfa seviyesindeki bileşenler `src/pages/` klasöründe yer alır.
   - Sayfa düzeni araçları `src/layout/` altında bulunur.
   - Tekrar kullanılabilir küçük UI bileşenleri gerekirse `src/components/` klasörü açılarak oraya koyulabilir.
3. **Sayfa Yönlendirmeleri:** Yönlendirme mantığı doğrudan `src/router/` altında yönetilir.
