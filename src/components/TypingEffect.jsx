import next from "next";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice actual
  const [displayedText, setDisplayedText] = useState([]);// Estado para textos mostrados

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
        <h3 className="text-4xl lg:text-6xl mb-4">La Misión Estelar de Astronautita Armstrong y DEX</h3>
        {displayedTexts.map((text, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
        {typewriters[currentIndex] && (
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 40,
              deleteSpeed: 20,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(typewriters[currentIndex].text)
                .pauseFor(typewriters[currentIndex].pause)
                .callFunction(() => {
                  // Agrega el texto actual a displayedTexts
                  setDisplayedTexts((prev) => [...prev, typewriters[currentIndex].text]);
                  // Avanza al siguiente índice
                  setTimeout(() => handleNext(), 1500); // Espera antes de avanzar
                })
                .start();
            }}
          />
        )}
      </div>
  );
}
