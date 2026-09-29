// Reklam tıklama parametrelerini (oppref, gclid, fbclid vb.) SPA içi
// gezinmede korumak için query string'i hedef path'e taşır.
export const toWithSearch = (pathname, search) =>
  search ? { pathname, search } : pathname;
