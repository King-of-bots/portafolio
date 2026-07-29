// src/data/proyectos.ts
export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string; // Ruta a la imagen en /public/
  tecnologias: string[];
  linkDemo?: string; // Opcional: enlace a una demo jugable
  linkCodigo?: string; // Opcional: enlace al código en GitHub
}

export const proyectos: Proyecto[] = [
  {
    id: "anturix",
    titulo: "Anturix - Survival Horror",
    descripcion: "Juego de terror en primera persona con estética retro PS1. Implementé el sistema de movimiento, la cámara y la lógica de progresión por días.",
    imagen: "/proyectos/anturix.jpg", // <-- Cambia esto por la ruta de tu imagen
    tecnologias: ["Unity", "C#", "Git", "Event Hub"],
    linkDemo: "#", // <-- Pon aquí el enlace a tu demo
    linkCodigo: "https://github.com/tu-usuario/anturix", // <-- Pon aquí el enlace a tu repo
  },
  // Agrega más proyectos aquí, copiando la misma estructura
  // {
  //   id: "proyecto2",
  //   titulo: "Mi Juego 2",
  //   descripcion: "Descripción de mi juego 2.",
  //   imagen: "/proyectos/proyecto2.jpg",
  //   tecnologias: ["Unity", "C#"],
  //   linkDemo: "#",
  //   linkCodigo: "https://github.com/tu-usuario/proyecto2",
  // },
];