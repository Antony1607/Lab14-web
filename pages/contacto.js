import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>

        <meta
          name="description"
          content="Comunícate con nuestro equipo."
        />

        <meta
          property="og:title"
          content="Contacto | Mi Sitio Optimizado"
        />

        <meta
          property="og:description"
          content="Página de contacto y soporte."
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

          <Link href="/blog" style={{ color: "white", textDecoration: "none" }}>
            Blog
          </Link>

          <Link href="/contacto" style={{ color: "#38bdf8", textDecoration: "none" }}>
            Contacto
          </Link>
        </nav>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "60px 20px"
          }}
        >
          <div
            style={{
              width: "500px",
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "#1e293b"
              }}
            >
              Contáctanos
            </h1>

            <form>
              <input
                type="text"
                placeholder="Nombre"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }}
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }}
              />

              <textarea
                placeholder="Escribe tu mensaje"
                rows="5"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}