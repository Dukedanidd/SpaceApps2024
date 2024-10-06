import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Un solo texto mostrado

  const typewriters = [
    {
      text: "Capitulo 1: El sueño de Astronautita Armstrong",
      pause: 2000,
    },
    {
      text: "Astronautita Armstrong, ingeniero de la NASA, siempre soñó con el espacio.<br/>Cuando lo seleccionaron para la Operación Estrella Brillante, su corazón<br/> se llenó de emoción. <br/>Tendría la oportunidad de desviar asteroides peligrosos.",
      pause: 2500,
    },
    // ... otros textos
  ];

  useEffect(() => {
    // Actualiza el texto mostrado al cambiar el índice
    const currentText = typewriters[currentIndex]?.text;
    if (currentText) {
      setDisplayedText(currentText);
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < typewriters.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Volver al inicio si se llega al final
    }
  };

  return (
    <div className="flex flex-col gap-1 items-center text-2xl lg:text-4xl justify-center min-h-screen font-mono text-center">
      <h3 className="text-4xl lg:text-6xl mb-4">La Misión Estelar de Astronautita Armstrong y DEX</h3>
      <Typewriter
        options={{
          autoStart: true,
          loop: false,
          delay: 40,
          deleteSpeed: 20,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(displayedText)
            .pauseFor(typewriters[currentIndex]?.pause || 0)
            .callFunction(() => {
              setTimeout(() => {
                handleNext(); // Esperar antes de avanzar
              }, 1500);
            })
            .start();
        }}
      />
    </div>
  );
}
