// Build sonrası prerender: SSR bundle'ı (dist-ssr) ile her sayfanın HTML'ini
// üretip dist/<sayfa>/index.html olarak yazar. Prerender edilmeyen sayfalar
// için boş şablon dist/spa.html olarak kalır (vercel.json / .htaccess fallback).
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const ROOT_TAG = '<div id="root"></div>';

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Etiket şablonda varsa yerinde değiştirir, yoksa </head> öncesine ekler
const upsertTag = (html, pattern, tag) =>
  pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);

const metaPattern = (attribute, key) =>
  new RegExp(`<meta\\b[^>]*\\b${attribute}="${key}"[^>]*>`);

// Sayfanın Seo etiketlerini (bkz. getSeoTags) <head>'e yazar
const applySeo = (html, seo) => {
  let out = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeAttr(seo.title)}</title>`,
  );
  out = upsertTag(
    out,
    /<link\b[^>]*rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${escapeAttr(seo.canonical)}" />`,
  );
  for (const [attribute, key, content] of seo.meta) {
    if (!content) continue;
    out = upsertTag(
      out,
      metaPattern(attribute, key),
      `<meta ${attribute}="${key}" content="${escapeAttr(content)}" />`,
    );
  }
  for (const [attribute, key] of seo.removeMeta) {
    out = out.replace(
      new RegExp(`\\s*${metaPattern(attribute, key).source}`),
      "",
    );
  }
  return out;
};

// Boş şablon client build'de (vite.config.js -> spa-fallback-html) üretilir
const template = await fs.readFile(path.join(distDir, "spa.html"), "utf8");
if (!template.includes(ROOT_TAG)) {
  throw new Error(`dist/spa.html içinde ${ROOT_TAG} bulunamadı`);
}

const { render, prerenderPaths } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

for (const url of prerenderPaths) {
  const { html: appHtml, seo } = await render(url);
  const page = seo ? applySeo(template, seo) : template;
  const html = page.replace(
    ROOT_TAG,
    `<div id="root" data-prerendered="${url}">${appHtml}</div>`,
  );

  const outFile =
    url === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, url, "index.html");
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, html);
  console.log(
    `prerender: ${url} -> ${path.relative(root, outFile)}${seo ? "" : " (Seo yok, varsayılan head)"}`,
  );
}

await fs.rm(ssrDir, { recursive: true, force: true });
