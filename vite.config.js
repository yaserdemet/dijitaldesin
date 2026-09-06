import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Open Graph mutlak adresleri icin site kokii.
// Sirasiyla: elle verilen deger -> Vercel production alan adi -> o anki dagitim -> yedek
const siteUrl = (
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "https://dijitaldesin.vercel.app"
).replace(/\/$/, "");

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "html-site-url",
      transformIndexHtml: (html) => html.replaceAll("%SITE_URL%", siteUrl),
    },
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Kararli vendor kodunu ayri chunk'lara bol: bir kutuphane degisince
        // digerlerinin tarayici cache'i bozulmaz. (Rolldown manualChunks'i
        // fonksiyon olarak bekliyor.)
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/]recharts[\\/]/.test(id)) return "recharts";
          if (
            /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(
              id,
            )
          )
            return "react-vendor";
        },
      },
    },
  },
});
