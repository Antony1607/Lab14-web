const BASE_URL = "https://lab14-web.onrender.com";

export default async function handler(req, res) {
  const productos = [
    { id: 1, nombre: "Laptop" },
    { id: 2, nombre: "Mouse" },
    { id: 3, nombre: "Teclado" },
  ];

  const urls = [
    "/",
    "/blog",
    "/contacto",
    ...productos.map((p) => `/producto/${p.id}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    return `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`;
  })
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  return res.status(200).send(sitemap);
}