const BASE_URL = "http://localhost:3000";

export default async function handler(req, res) {
  const productos = [
    { id: 1, nombre: "Laptop" },
    { id: 2, nombre: "Mouse" },
    { id: 3, nombre: "Teclado" }
  ];

  const urls = [
    "/",
    "/blog",
    "/contacto",
    ...productos.map((p) => `/producto/${p.id}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) =>
          `<url><loc>${BASE_URL}${url}</loc></url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}