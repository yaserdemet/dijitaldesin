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
