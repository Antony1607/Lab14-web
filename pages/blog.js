import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  const articulos = [
    {
      titulo: "Introducción al SEO",
      descripcion: "Aprende los conceptos básicos del posicionamiento web."
    },
    {
      titulo: "Optimización en Next.js",
      descripcion: "Mejora el rendimiento y la velocidad de tu aplicación."
    },
    {
      titulo: "Meta Tags y Open Graph",
      descripcion: "Aumenta la visibilidad de tu sitio en Google y redes sociales."
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | Consejos SEO y Next.js</title>

        <meta
          name="description"
          content="Artículos y consejos para mejorar el SEO."
        />

        <meta
          property="og:title"
          content="Blog | Consejos SEO y Next.js"
        />

        <meta
          property="og:description"
          content="Contenido relacionado con SEO y rendimiento web."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "#f4f6f9",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            padding: "20px",
            background: "#1e293b"
          }}
        >
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Inicio
          </Link>

          <Link href="/blog" style={{ color: "#38bdf8", textDecoration: "none" }}>
            Blog
          </Link>

          <Link href="/contacto" style={{ color: "white", textDecoration: "none" }}>
            Contacto
          </Link>
        </nav>

        <div
          style={{
            textAlign: "center",
            padding: "50px 20px"
          }}
        >
          <h1 style={{ color: "#1e293b" }}>
            Blog de SEO y Next.js
          </h1>

          <p style={{ color: "#666" }}>
            Artículos para mejorar el posicionamiento y rendimiento web.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              flexWrap: "wrap",
              marginTop: "40px"
            }}
          >
            {articulos.map((articulo, index) => (
              <div
                key={index}
                style={{
                  width: "300px",
                  background: "white",
                  borderRadius: "15px",
                  padding: "25px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
              >
                <h3 style={{ color: "#1e293b" }}>
                  {articulo.titulo}
                </h3>

                <p style={{ color: "#666" }}>
                  {articulo.descripcion}
                </p>

                <button
                  style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer"
                  }}
                >
                  Leer más
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}