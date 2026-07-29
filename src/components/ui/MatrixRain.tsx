"use client"; // Necesario para usar efectos del navegador

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Ajustar el tamaño del canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 2. Configurar el efecto
    const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"; // Caracteres japoneses (o puedes usar "01" para estilo más simple)
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Inicializar las gotas
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // 3. Función de dibujo
    const draw = () => {
      // Fondo semitransparente para crear el efecto de desvanecimiento
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Color de las letras (azul/cian con variación)
      ctx.fillStyle = "#00ffcc";
      ctx.font = fontSize + "px monospace";

      // Dibujar cada gota
      for (let i = 0; i < drops.length; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brillo aleatorio en algunas gotas
        if (Math.random() > 0.975) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "#00ffcc";
        }

        ctx.fillText(char, x, y);

        // Reiniciar la gota cuando llega al final o aleatoriamente
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // 4. Animar el canvas
    const interval = setInterval(draw, 50);

    // 5. Limpiar al desmontar el componente
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}