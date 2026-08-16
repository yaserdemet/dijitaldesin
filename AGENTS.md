# AGENTS.md - Dijitaldesin Proje Kuralları ve Rehberi

Bu dosya, projede çalışan yapay zeka asistanlarının (AI agents) ve geliştiricilerin uyması gereken temel kuralları ve çalışma prensiplerini tanımlar.

---

## 🚀 Temel Kurallar ve Bağlam Verimliliği

1. **Gereksiz Klasör Taraması Yapma:**
   - Projenin klasör ve mimari yapısı sabittir. Tüm proje ağacını okumak yerine `.codegpt/skills/project-architecture/SKILL.md` dosyasındaki mimari haritasını kullan.
   - Sadece değiştireceğin veya ekleme yapacağın ilgili dosyayı doğrudan oku (`get_file_content` veya `grep_search`).

2. **Teknoloji Yığını (Tech Stack):**
   - **Framework:** React 19 + Vite 8
   - **Routing:** React Router DOM v7 (`createBrowserRouter`)
   - **Stilleme:** Tailwind CSS v4 (`@tailwindcss/postcss`)
   - **İkonlar:** `@iconify/react` (`Icon` bileşeni)
   - **Linter:** Oxlint (`npm run lint`)

3. **Kodlama Standartları:**
   - JSX dosyalarında standart fonksiyonel React bileşenleri yazılmalı.
   - Yeni bir sayfa eklendiğinde `src/router/path.js`, `src/router/element.jsx` ve `src/router/AppRouter.jsx` süreçlerine uyulmalıdır.
   - inline stiller yerine Tailwind utility class'ları tercih edilmelidir.

---

## 🛠️ Yetkili Skill ve Kılavuzlar

Detaylı talimatlar için aşağıdaki skill dosyalarına başvurun:

- Mimari ve Klasör Haritası: `.codegpt/skills/project-architecture/SKILL.md`
- Kodlama Standartları ve Linter: `.codegpt/skills/coding-standards/SKILL.md`
- Yönlendirme (Routing) ve Sayfa Yapısı: `.codegpt/skills/routing-and-pages/SKILL.md`
