import React from "react";
import TypingEffect from "./TypingEffect";

function SectionLore() {
  return (
    <section>
      <div
        className="bg-black h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/stars.png')" }}
      >
        <h1 className="text-white text-4xl">
          <TypingEffect />
        </h1>
      </div>
    </section>
  );
}

export default SectionLore;
