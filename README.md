# DijitalDesin

Dijital danışmanlık ajansı web sitesi. React 19 + Vite 8 + Tailwind CSS v4.

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:5173
```

## Komutlar

| Komut             | Açıklama                              |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Geliştirme sunucusu (HMR)             |
| `npm run build`   | Production derlemesi → `dist/`        |
| `npm run preview` | `dist/` çıktısını yerelde önizle      |
| `npm run lint`    | Oxlint                                |

## Ortam Değişkenleri

Zorunlu değildir. Open Graph / canonical mutlak adresleri için site kökü şu
sırayla belirlenir: `VITE_SITE_URL` → Vercel production alan adı → o anki dağıtım
→ `https://dijitaldesin.com` (yedek).

Özel bir alan adı için Vercel proje ayarlarında:

```
VITE_SITE_URL = https://dijitaldesin.com
```

## Dağıtım (Vercel)

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- SPA yönlendirmesi, güvenlik başlıkları ve asset cache politikası `vercel.json`
  içinde tanımlıdır.
- `public/robots.txt` ve `public/sitemap.xml` alan adına (`dijitaldesin.com`)
  göre ayarlıdır; alan adı değişirse bu iki dosyayı da güncelleyin.
