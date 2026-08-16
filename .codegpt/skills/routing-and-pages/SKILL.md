---
name: routing-and-pages
description: Dijitaldesin projesine yeni sayfa veya yönlendirme eklerken uyulması gereken 3 adımlı süreç.
triggers:
  - yeni sayfa ekle
  - route ekle
  - path ekle
  - router
---

# Yönlendirme ve Sayfa Ekleme Rehberi

Yeni bir sayfa veya rota ekleneceğinde aşağıdaki 3 adımlı yapı eksiksiz uygulanmalıdır:

## 1. Yol Tanımlama (`src/router/path.js`)

Rota yolunu `PATH_PAGE` nesnesine ekleyin:

```javascript
export const PATH_PAGE = {
  root: ROOTS_APP,
  home: path(ROOTS_APP, ""),
  about: path(ROOTS_APP, "about"),
  services: path(ROOTS_APP, "services"),
  contact: path(ROOTS_APP, "contact"),
  // Yeni sayfa örneği:
  // blog: path(ROOTS_APP, 'blog'),
};
```

## 2. Bileşen Bağlama / Lazy Loading (`src/router/element.jsx`)

Yeni oluşturduğunuz sayfa bileşenini `element.jsx` dosyasında dışa aktarın:

```javascript
export const BlogPage = Loadable(lazy(() => import("../pages/Blog")));
```

## 3. Router Konfigürasyonu (`src/router/AppRouter.jsx`)

`AppRouter.jsx` dosyası içerisindeki `createBrowserRouter` dizisine yeni rotayı ekleyin:

```javascript
{
  path: PATH_PAGE.blog,
  element: <BlogPage />,
}
```

## Dikkat Edilmesi Gerekenler

- Tüm sayfalar `Layout` bileşeninin `children` dizisi içerisinde yer almalıdır.
- Yüklenme durumları için `LoadingPage` (Loadable HOC) otomatik olarak devrededir.
