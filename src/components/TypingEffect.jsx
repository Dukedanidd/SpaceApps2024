import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono">
      <div className="text-5xl flex items-center mb-4">
        <h3>La Misión Estelar de Astronautita Armstrong y DEX</h3>
      </div>
      <Typewriter
        options={{
          autoStart: true,
          loop: false,
          delay: 50, // Velocidad de escritura
          deleteSpeed: 20, // Velocidad de eliminación
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Capitulo 1: El sueño de Astronautita Armstrong")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(29000)
            .callFunction(() => {
            })
            .start();
        }}
      />
      <div className="text-3xl flex items-center mt-4">
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 50, // Velocidad de escritura
            deleteSpeed: 20, // Velocidad de eliminación
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Astronautita Armstrong, ingeniero de la NASA, siempre soñó con el espacio.<br/>Cuando lo seleccionaron para la Operación Estrella Brillante, su corazón<br/> se llenó de emoción. <br/>Tendría la oportunidad de desviar asteroides peligrosos.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
      <Typewriter
        options={{
          autoStart: true,
          loop: false,
          delay: 50, // Velocidad de escritura
          deleteSpeed: 20, // Velocidad de eliminación
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Capitulo 2: Con DEX a Bordo")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(29000)
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
      <div className="text-3xl flex items-center mt-4">
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 50, // Velocidad de escritura
            deleteSpeed: 20, // Velocidad de eliminación
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "En la nave, conoció a DEX, un robot ingenioso.<br/> “¡Listo para la aventura!” dijo DEX, haciendo<br/> reír a Astronautita. Juntos, se prepararon <br/>para lo que vendría.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
    </div>
  );
}
