import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MatrixRain from "@/components/ui/MatrixRain"; // <-- Importa el componente Matrix

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Desarrollador front-end. Construyo interfaces rápidas y accesibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fondo de Matrix (se coloca detrás de todo) */}
        <MatrixRain />

        {/* Barra de navegación (se coloca encima del fondo) */}
        <Navbar />

        {/* Contenido principal de la página */}
        {children}
      </body>
    </html>
  );
}