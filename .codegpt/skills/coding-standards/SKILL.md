---
name: coding-standards
description: Dijitaldesin projesinde React 19, Tailwind CSS v4 ve Iconify kullanımı ile kod kalitesi standartları.
triggers:
  - kodlama standartları
  - tailwind
  - iconify
  - oxlint
  - lint
---

# Kodlama Standartları ve Kuralları

## 1. React & JSX Kuralları

- React 19 ve ES6+ fonksiyonel bileşen (functional component) yapısı kullanılmalıdır.
- Bileşen adları **PascalCase** olmalıdır (Örn: `ServicesCard.jsx`).
- Gereksiz state kullanımından kaçınılmalı, proplar düzgün tiplendirilmelidir.

## 2. Tailwind CSS v4 Stilleme

- Projede Tailwind CSS v4 aktiftir (`@tailwindcss/postcss`).
- Stillemeler için inline style (`style={{ ... }}`) yerine Tailwind utility sınıfları tercih edilmelidir.
- Responsive tasarım için `md:`, `lg:`, `xl:` gibi Tailwind breakpoint'leri kullanılmalıdır.

## 3. İkon Kullanımı (`@iconify/react`)

- İkonlar için `@iconify/react` paketi kullanılmalıdır.
- Örnek kullanım:

  ```jsx
  import { Icon } from "@iconify/react";

  <Icon icon="mdi:phone" className="w-5 h-5 text-blue-600" />;
  ```

## 4. Kod Denetimi ve Linter (Oxlint)

- Kod düzenlemeleri yapıldıktan sonra linter hataları kontrol edilmelidir:
  ```powershell
  npm run lint
  ```
- Oxlint uyarılarına veya syntax hatalarına dikkat edilmelidir.
