import TarjetaProyecto from "@/components/ui/TarjetaProyecto";
import { proyectos } from "@/data/proyectos";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Home() {
  return (
    <>
      {/* Hero (con animación al cargar) */}
      <RevealOnScroll triggerOnLoad>
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Hola, soy <span className="text-blue-500">Tu Nombre</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4 text-center max-w-xl">
            Desarrollador de videojuegos. Construyo mecánicas 3D y experiencias inmersivas.
          </p>
        </section>
      </RevealOnScroll>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 px-4 max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Mis Proyectos
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <RevealOnScroll key={proyecto.id} delay={index * 0.15}>
              <TarjetaProyecto proyecto={proyecto} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-4 max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Habilidades Técnicas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Aquí irán las etiquetas de habilidades, pero por ahora dejamos un placeholder */}
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300">Unity</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300">C#</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300">Git</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300">Next.js</span>
          </div>
        </RevealOnScroll>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 px-4 max-w-4xl mx-auto">
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Sobre Mí
          </h2>
          <p className="text-gray-300 text-center">
            Aquí irá tu descripción personal.
          </p>
        </RevealOnScroll>
      </section>


      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 max-w-4xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
              Contacto
            </h2>
            <p className="text-gray-300 text-center">
              Puedes contactarme a través de <a href="mailto:tu@email.com" className="text-blue-400 hover:underline">tu@email.com</a>
            </p>
          </RevealOnScroll>
      </section>
     
    </>
  );
}