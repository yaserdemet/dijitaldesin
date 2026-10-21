// PWA kurulumu için minimal service worker.
// Bilerek hiçbir şeyi cache'lemez: site her zaman ağdan, web'deki ile birebir aynı şekilde yüklenir.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
