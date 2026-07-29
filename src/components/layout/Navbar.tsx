"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nombre */}
        <Link href="/" className="text-xl font-bold text-white">
          Tu Nombre
        </Link>

        {/* Menú de escritorio */}
        <div className="hidden md:flex gap-8 text-gray-200">
          <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
          <a href="#habilidades" className="hover:text-white transition">Habilidades</a>
          <a href="#sobre-mi" className="hover:text-white transition">Sobre Mí</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/20 px-4 py-4 flex flex-col gap-4 text-gray-200">
          <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition">Proyectos</a>
          <a href="#habilidades" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition">Habilidades</a>
          <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition">Sobre Mí</a>
          <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition">Contacto</a>
        </div>
      )}
    </nav>
  );
}