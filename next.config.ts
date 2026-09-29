import type { NextConfig } from "next";

// Se usa "as NextConfig" (en vez de la anotación directa ": NextConfig")
// para evitar el chequeo estricto de propiedades del literal. Vercel
// inyecta automáticamente 'swcMinify' en este objeto durante el build
// ("Applying modifyConfig from Vercel" en los logs) para compatibilidad
// con versiones anteriores de Next.js, pero esa clave ya no existe en
// el tipo NextConfig de esta versión (16.x) y rompía el type-check.
const nextConfig = {
  poweredByHeader: false,
  compress: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
} as NextConfig;

export default nextConfig;
