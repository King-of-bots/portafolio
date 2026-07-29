// src/components/ui/TarjetaProyecto.tsx
"use client";

import Image from "next/image";
import { Proyecto } from "@/data/proyectos";

interface Props {
  proyecto: Proyecto;
}

export default function TarjetaProyecto({ proyecto }: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition group">
      {/* Imagen del proyecto */}
      <div className="relative h-48 w-full bg-gray-800">
        <Image
          src={proyecto.imagen}
          alt={proyecto.titulo}
          fill
          className="object-cover"
        />
      </div>

      {/* Información del proyecto */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{proyecto.titulo}</h3>
        <p className="text-gray-300 text-sm mb-4">{proyecto.descripcion}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {proyecto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-4">
          {proyecto.linkDemo && (
            <a
              href={proyecto.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 transition"
            >
              Ver demo →
            </a>
          )}
          {proyecto.linkCodigo && (
            <a
              href={proyecto.linkCodigo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              Ver código →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}