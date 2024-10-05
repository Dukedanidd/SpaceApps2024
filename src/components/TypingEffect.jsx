import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice actual
  const [displayedText, setDisplayedText] = useState(""); // Estado para el texto mostrado

  const typewriters = [
    {
      text: "Capitulo 1: El sueño de Astronautita Armstrong",
      pause: 1000,
      next: 1,
    },
    {
      text: "Astronautita Armstrong, ingeniero de la NASA, siempre soñó con el espacio.<br/>Cuando lo seleccionaron para la Operación Estrella Brillante, su corazón<br/> se llenó de emoción. <br/>Tendría la oportunidad de desviar asteroides peligrosos.",
      pause: 1500,
      next: 2,
    },
    {
      text: "Capitulo 2: Con DEX a Bordo",
      pause: 1000,
      next: 3,
    },
    {
      text: "En la nave, conoció a DEX, un robot ingenioso.<br/> “¡Listo para la aventura!” dijo DEX, haciendo<br/> reír a Astronautita. Juntos, se prepararon <br/>para lo que vendría.",
      pause: 1500,
      next: null,
    },
  ];

  const handleNext = () => {
    if (currentIndex < typewriters.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setDisplayedText(""); // Reinicia el texto mostrado al avanzar
    }
  };

  return (
    <div className="flex flex-col gap-1 items-center text-2xl lg:text-4xl justify-center min-h-screen font-mono text-center">
      <div className="text-4xl lg:text-6xl flex flex-col items-center justify-center mb-4 text-center">
        <h3>La Misión Estelar de Astronautita Armstrong y DEX</h3>
      </div>
      {typewriters.map((item, index) => (
        index === currentIndex && (
          <Typewriter
            key={index}
            options={{
              autoStart: true,
              loop: false,
              delay: 40, // Velocidad de escritura
              deleteSpeed: 20, // Velocidad de eliminación
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(item.text)
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(item.pause)
                .callFunction(() => {
                  console.log("All strings were deleted");
                  handleNext(); // Llama a la función para avanzar al siguiente Typewriter
                })
                .start();
            }}
          />
        )
      ))}
      <div dangerouslySetInnerHTML={{ __html: displayedText }} /> {/* Muestra el texto acumulado */}
    </div>
  );
}
