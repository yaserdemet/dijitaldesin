// Dijitaldesin service worker: çevrimdışı çalışma.
// - Sayfalar (navigasyon): önce ağ, internet yoksa önbellek -> /spa.html (web'deki davranış değişmez)
// - /assets/* (hash'li build dosyaları): önce önbellek (dosya adı değişmeden içeriği değişmez)
// - Diğer aynı-origin dosyalar, Google Fonts ve Iconify: önbellekten hızlı sun, arka planda güncelle
// Önbelleği sıfırlamak için CACHE_VERSION'ı artırmak yeterli.
const CACHE_VERSION = "v1";
const CACHE_PREFIX = "dijitaldesin-";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;

const PRECACHE_URLS = [
  "/",
  "/spa.html",
  "/manifest.webmanifest",
  "/favicon.jpeg",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

// Google Fonts (Nunito) ve Iconify ikon API'leri: çevrimdışıyken de font ve ikonlar görünsün.
const CACHED_HOSTS = [
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "api.iconify.design",
  "api.simplesvg.com",
  "api.unisvg.com",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

const putInCache = async (request, response) => {
  // Opaque (cross-origin no-cors) yanıtlar status 0 döner; font CSS/dosyaları için kabul edilir.
  if (response.ok || response.type === "opaque") {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
};

const networkFirst = async (request) => {
  try {
    return await putInCache(request, await fetch(request));
  } catch {
    return (
      (await caches.match(request, { ignoreSearch: true })) ||
      (await caches.match("/spa.html")) ||
      Response.error()
    );
  }
};

const cacheFirst = async (request) =>
  (await caches.match(request)) || putInCache(request, await fetch(request));

const staleWhileRevalidate = async (request, event) => {
  const cached = await caches.match(request);
  const network = fetch(request)
    .then((response) => putInCache(request, response))
    .catch(() => cached);
  if (cached) {
    event.waitUntil(network);
    return cached;
  }
  return (await network) || Response.error();
};

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin && request.mode === "navigate") {
    event.respondWith(networkFirst(request));
  } else if (sameOrigin && url.pathname.startsWith("/assets/")) {
    event.respondWith(cacheFirst(request));
  } else if (sameOrigin || CACHED_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(request, event));
  }
  // Diğer cross-origin istekler (analytics, pixel vb.) SW'ye uğramadan doğrudan ağa gider.
});
