import { copyFileSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const siteUrl = (
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL &&
    `https://${process.env.VERCEL_URL}`) ||
  "https://dijitaldesin.com"
).replace(/\/$/, "");

export default defineConfig({
  base: "/",

  plugins: [
    react(),

    {
      name: "html-site-url",
      transformIndexHtml: (html) =>
        html.replaceAll("%SITE_URL%", siteUrl),
    },

    // Prerender edilmeyen sayfaların fallback'i (vercel.json / .htaccess -> /spa.html).
    // Prerender adımı çalışmasa bile site ayakta kalsın diye client build'de üretilir.
    {
      name: "spa-fallback-html",
      apply: "build",
      writeBundle(options, bundle) {
        if (!bundle["index.html"]) return;
        copyFileSync(
          path.join(options.dir, "index.html"),
          path.join(options.dir, "spa.html"),
        );
      },
    },
  ],

  build: {
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (/[\\/]node_modules[\\/]recharts[\\/]/.test(id)) {
            return "recharts";
          }

          if (
            /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(
              id
            )
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
