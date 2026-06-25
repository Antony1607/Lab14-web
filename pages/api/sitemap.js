export default async function handler(req, res) {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://lab14-web.onrender.com";

  const postsDinamicos = [
    { slug: "introduccion-a-nextjs" },
    { slug: "guia-seo-avanzado" },
  ];

  const productos = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  const paginasEstaticas = ["", "blog", "contacto"];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;

  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 🧭 Páginas estáticas
  paginasEstaticas.forEach((page) => {
    const ruta = page ? `/${page}` : "";

    xml += `
      <url>
        <loc>${BASE_URL}${ruta}</loc>
        <changefreq>daily</changefreq>
        <priority>${page === "" ? "1.0" : "0.8"}</priority>
      </url>
    `;
  });

  // 📰 Posts dinámicos
  postsDinamicos.forEach((post) => {
    xml += `
      <url>
        <loc>${BASE_URL}/blog/${post.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `;
  });

  // 🛒 Productos dinámicos
  productos.forEach((p) => {
    xml += `
      <url>
        <loc>${BASE_URL}/producto/${p.id}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
      </url>
    `;
  });

  xml += `</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  return res.status(200).send(xml);
}