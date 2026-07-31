import type { APIRoute } from "astro";

/**
 * Dinamik SEO sitemap. `noindex` işaretli portal sayfaları (/musteri-girisi,
 * /musteri-paneli) bilinçli olarak kapsama alınmaz.
 */
const routes = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/cozumler", priority: "0.9", changefreq: "weekly" },
  { path: "/fiyatlandirma", priority: "0.9", changefreq: "weekly" },
  { path: "/sektorler", priority: "0.8", changefreq: "weekly" },
  { path: "/hakkimizda", priority: "0.6", changefreq: "monthly" },
  { path: "/sss", priority: "0.7", changefreq: "weekly" },
  { path: "/kullanim-kosullari", priority: "0.3", changefreq: "yearly" },
  { path: "/sla", priority: "0.3", changefreq: "yearly" },
  { path: "/kvkk", priority: "0.3", changefreq: "yearly" },
];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().split("T")[0];
  const baseUrl = site?.href ? site.href.replace(/\/$/, "") : "https://omdi.ai";

  const urls = routes
    .map(({ path, priority, changefreq }) => {
      const loc = `${baseUrl}${path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
};
