// Build sonrası prerender girişi (scripts/prerender.js kullanır).
// Mevcut route dizisi React Router'ın statik API'leriyle HTML'e çevrilir;
// onAllReady ile lazy sayfalar (Suspense) yüklenene kadar beklenir, böylece
// HTML'e yükleme ekranı değil sayfanın kendisi yazılır.
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";

import { routes } from "./router/AppRouter";
import { PATH_PAGE } from "./router/path";
import { BLOG_POSTS } from "./components/blog/blogData";
import { getSeoTags, ssrSeo } from "./utils/seoTags";
import { SITE_URL } from "./utils/organizationSchema";

export const prerenderPaths = [
  PATH_PAGE.root,
  PATH_PAGE.about,
  PATH_PAGE.services,
  PATH_PAGE.referances,
  PATH_PAGE.contact,
  PATH_PAGE.sss,
  PATH_PAGE.blog,
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
];

const renderToHtml = (element) =>
  new Promise((resolve, reject) => {
    const { pipe } = renderToPipeableStream(element, {
      // Büyük Suspense içeriklerinin sona taşınıp script ile değiştirilmesini engeller
      progressiveChunkSize: Number.POSITIVE_INFINITY,
      onAllReady() {
        const stream = new PassThrough();
        let html = "";
        stream.on("data", (chunk) => (html += chunk));
        stream.on("end", () => resolve(html));
        pipe(stream);
      },
      onShellError: reject,
      onError: reject,
    });
  });

export const render = async (url) => {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(`http://localhost${url}`));

  if (context instanceof Response) {
    throw new Error(`${url} prerender edilemedi (status ${context.status})`);
  }

  const router = createStaticRouter(handler.dataRoutes, context);
  ssrSeo.current = null;
  const html = await renderToHtml(
    <StaticRouterProvider router={router} context={context} hydrate={false} />,
  );

  // Sayfanın <Seo> prop'larından <head> etiketleri (title, description, og, twitter, canonical)
  const seo = ssrSeo.current
    ? getSeoTags({ ...ssrSeo.current, origin: SITE_URL, pathname: url })
    : null;

  return { html, seo };
};
