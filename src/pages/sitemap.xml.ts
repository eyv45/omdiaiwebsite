import type { APIRoute } from "astro";

/**
 * Elle yönetilen sitemap. `noindex` işaretli portal sayfaları (/musteri-girisi,
 * /musteri-paneli) bilinçli olarak listelenmez.
 */
const routes = [
  { path: "/", priority: "1.0" },
  { path: "/cozumler", priority: "0.9" },
  { path: "/fiyatlandirma", priority: "0.9" },
  { path: "/sektorler", priority: "0.8" },
  { path: "/hakkimizda", priority: "0.6" },
  { path: "/sss", priority: "0.6" },
  { path: "/kullanim-kosullari", priority: "0.3" },
  { path: "/sla", priority: "0.3" },
  { path: "/kvkk", priority: "0.3" },
];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = routes
    .map(({ path, priority }) => {
      const loc = new URL(path, site).href;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
