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
  metadataBase: new URL("https://softnex.com"),
  title: "Softnex - Transformamos ideas en tecnología",
  description: "Desarrollo de software a medida, aplicaciones móviles, sistemas ERP y soluciones de automatización con IA. Convertimos tu idea en realidad digital.",
  keywords: ["desarrollo software", "aplicaciones móviles", "sistemas ERP", "automatización", "inteligencia artificial", "desarrollo web", "Next.js", "React"],
  authors: [{ name: "Softnex" }],
  openGraph: {
    title: "Softnex - Transformamos ideas en tecnología",
    description: "Desarrollo de software a medida, aplicaciones móviles, sistemas ERP y soluciones de automatización con IA",
    url: "https://softnex.com",
    siteName: "Softnex",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Softnex - Soluciones tecnológicas",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softnex - Transformamos ideas en tecnología",
    description: "Desarrollo de software a medida, aplicaciones móviles y soluciones de automatización con IA",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
