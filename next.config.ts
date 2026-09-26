import type { NextConfig } from "next";

// Se usa "as NextConfig" (en vez de la anotación directa ": NextConfig")
// para evitar el chequeo estricto de propiedades del literal. Vercel
// inyecta automáticamente 'swcMinify' en este objeto durante el build
// ("Applying modifyConfig from Vercel" en los logs) para compatibilidad
// con versiones anteriores de Next.js, pero esa clave ya no existe en
// el tipo NextConfig de esta versión (16.x) y rompía el type-check.
const nextConfig = {
  /* config options here */
} as NextConfig;

export default nextConfig;
