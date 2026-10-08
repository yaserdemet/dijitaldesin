const SITE_NAME = "DijitalDesin";
const DEFAULT_OG_IMAGE = "/og-image.png";

// Sayfanin tum SEO etiketlerini hesaplar. Hem tarayicida (useEffect) hem de
// build sirasindaki prerender'da (scripts/prerender.js) ayni sonuc kullanilir.
export const getSeoTags = ({ title, description, image, origin, pathname }) => {
  const fullTitle = `Dijitaldesin | ${title}`;
  const pageUrl = `${origin}${pathname}`;
  const imageUrl = new URL(image || DEFAULT_OG_IMAGE, origin).href;

  const meta = [
    ["name", "description", description],

    // Open Graph
    ["property", "og:type", "website"],
    ["property", "og:site_name", SITE_NAME],
    ["property", "og:locale", "tr_TR"],
    ["property", "og:title", fullTitle],
    ["property", "og:description", description],
    ["property", "og:url", pageUrl],
    ["property", "og:image", imageUrl],
    ["property", "og:image:alt", SITE_NAME],

    // Twitter
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", fullTitle],
    ["name", "twitter:description", description],
    ["name", "twitter:image", imageUrl],
  ];

  // Olculer yalnizca varsayilan gorsel icin gecerli
  const imageSize = [
    ["property", "og:image:width", "1200"],
    ["property", "og:image:height", "630"],
  ];

  return {
    title: fullTitle,
    canonical: pageUrl,
    meta: image ? meta : [...meta, ...imageSize],
    removeMeta: image ? imageSize : [],
  };
};

// Prerender sirasinda useEffect calismaz; render edilen sayfanin Seo prop'lari
// burada toplanir ve src/entry-server.jsx tarafindan okunur.
export const ssrSeo = { current: null };
