import React from "react";
import TypingEffect from "./TypingEffect";

function SectionLore() {
  return (
    <section className="bg-black h-screen flex flex-col items-center justify-center overflow-y-hidden"
    style={{ backgroundImage: "url('./stars.png')" }}>
      <div className="max-w-full max-h-full"> {/* Limitar el ancho y alto del contenedor */}
        <h1 className="text-white text-4xl">
          <TypingEffect />
        </h1>
      </div>
    </section>
  );
}

export default SectionLore;
