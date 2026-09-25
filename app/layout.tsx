import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softnex - Soluciones Tecnológicas para el Futuro",
  description: "Desarrollo de software a medida, aplicaciones móviles, sistemas ERP y soluciones de automatización con IA. Transformamos ideas en tecnología.",
  keywords: ["desarrollo web", "software a medida", "apps móviles", "ERP", "automatización", "IA", "agentes", "Next.js", "React"],
  authors: [{ name: "Softnex" }],
  openGraph: {
    title: "Softnex - Soluciones Tecnológicas",
    description: "Transformamos ideas en tecnología. Desarrollo web, apps móviles, ERP y automatización con IA.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softnex - Soluciones Tecnológicas",
    description: "Transformamos ideas en tecnología",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00a8ff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scroll-smooth">{children}</body>
    </html>
  );
}
