import next from "next";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice actual
  const [displayedText, setDisplayedText] = useState(""); // Estado para el texto mostrado

  const typewriters = [
    {
      text: "El sueño del astronauta Dart",
      pause: 1000,
      next: 1,
    },
    {
      text: "Dart, ingeniero aeroespacial, siempre soñó con ser astronauta.<br/>Cuando la NASA reconoció su talento le ofrecieron la<br/> oportunidad de su vida. <br/>Podría proteger a la tierra de asteroides peligrosos.",
      pause: 1500,
      next: 2,
    },
    {
      text: "DEX",
      pause: 1000,
      next: 3,
    },
    {
      text: "Se asignó al cuidado de DEX.<br/> Un avanzado y carismático robot para ayudarlo<br/> a identificar cuerpos celestes.<br/>Ambos siempre listos para la aventura.",
      pause: 1500,
      next: 4,
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
        <h3 className="sticky top-0 text-center text-4xl font-bold text-white bg-black w-full py-4">Intro</h3>
      </div>
      {typewriters.map((item, index) => (
        index <= currentIndex && ( 
          <div key={index} style={{ marginBottom: '10px' }}> 
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 0.70, // Velocidad de escritura
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
          </div>
        )
      ))}
      <div dangerouslySetInnerHTML={{ __html: displayedText }} /> {/* Muestra el texto acumulado */}
    </div>
  );
}
