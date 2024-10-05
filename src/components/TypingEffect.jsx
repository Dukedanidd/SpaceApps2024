import next from "next";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice actual
  const [displayedText, setDisplayedText] = useState(""); // Estado para el texto mostrado

  const typewriters = [
    {
      text: "Capitulo 1: El sueño de Astronautita Armstrong",
      pause: 2000,
      next: 1,
    },
    {
      text: "Astronautita Armstrong, ingeniero de la NASA, siempre soñó con el espacio.<br/>Cuando lo seleccionaron para la Operación Estrella Brillante, su corazón<br/> se llenó de emoción. <br/>Tendría la oportunidad de desviar asteroides peligrosos.",
      pause: 2500,
      next: 2,
    },
    {
      text: "Capitulo 2: Con DEX a Bordo",
      pause: 2000,
      next: 3,
    },
    {
      text: "En la nave, conoció a DEX, un robot ingenioso.<br/> “¡Listo para la aventura!” dijo DEX, haciendo<br/> reír a Astronautita. Juntos, se prepararon <br/>para lo que vendría.",
      pause: 2500,
      next: 4,
    },
    {
      text: "Capítulo 3: La Amenaza",
      pause: 2000,
      next: 5,
    },
    {
      text: 'Un asteroide enorme apareció en el radar. “¡Debemos actuar rápido!” gritó DEX. Idearon un plan para fragmentarlo con explosivos. Astronautita se sintió nervioso, pero recordó el colgante de estrella que su madre le dio.',
      pause: 2500,
      next: 6,
    },
    {
      text: 'Capítulo 4: La Victoria',
      pause: 2000,
      next: 7,
    },
    {
      text: 'Con precisión, activaron los explosivos. La explosión iluminó el espacio y los fragmentos se dispersaron, salvando a la Tierra.',
      pause: 2500,
      next: 8, 
    },
    {
      text: 'Capitulo 5: Regreso a Casa',
      pause: 2000,  
      next: 9,
    },
    {
      text: 'De regreso, la multitud aplaudía. Astronautita sonrió a DEX y dijo: “No podría haberlo hecho sin ti”. Aprendió que la verdadera aventura estaba en la amistad y el trabajo en equipo.',
      pause: 2500,
      next: 0, // Regresa al primer Typewriter
    },
  ];

  const handleNext = () => {
    if (currentIndex < typewriters.length - 1) {
      setCurrentIndex(currentIndex + 1);
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
                .pauseFor(item.pause) // Pausa después de escribir el texto
                .callFunction(() => {
                  console.log("Waiting before next string...");
                  setTimeout(() => {
                    handleNext(); // Llama a la función para avanzar al siguiente Typewriter después de 1.5 segundos
                  }, 1500); // Espera 1500 ms antes de avanzar
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
