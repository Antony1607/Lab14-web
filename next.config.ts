/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      // ⚡ EL TRUCO: Cuando tú pongas "blog-sitemap" en Search Console, 
      // Next llamará silenciosamente a tu API y le dará XML puro a Google.
      {
        source: '/blog-sitemap', 
        destination: '/api/sitemap',
      }
    ];
  },
};

module.exports = nextConfig;