import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio Optimizado</title>

        <meta
          name="description"
          content="Página principal optimizada con SEO en Next.js."
        />

        <meta
          property="og:title"
          content="Inicio | Mi Sitio Optimizado"
        />

        <meta
          property="og:description"
          content="Aprende SEO y optimización web con Next.js."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />

        <meta property="og:type" content="website" />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "#f4f6f9",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Barra de navegación */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            padding: "20px",
            background: "#1e293b",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Inicio
          </Link>

          <Link
            href="/blog"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Blog
          </Link>

          <Link
            href="/contacto"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Contacto
          </Link>
        </nav>

        {/* Contenido */}
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            padding: "50px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              color: "#1e293b",
              marginBottom: "20px",
            }}
          >
            Bienvenido a mi página optimizada
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#555",
              marginBottom: "40px",
            }}
          >
            Aprende cómo mejorar el rendimiento y SEO en Next.js.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/seo-image.png"
              width={800}
              height={400}
              alt="SEO"
              priority
              style={{
                borderRadius: "15px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}