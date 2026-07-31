import { defineConfig } from "astro/config";

export default defineConfig({
  // Canonical URL, og:url ve sitemap.xml bu değerden üretilir.
  site: process.env.PUBLIC_SITE_URL || "https://omdi.ai",
  output: "static",
  build: {
    format: "directory",
  },
  // GEÇİCİ: dışarıya açılan önizleme tüneli için. Paylaşım bitince kaldırılacak.
  vite: {
    server: {
      allowedHosts: [".trycloudflare.com"],
    },
  },
});
