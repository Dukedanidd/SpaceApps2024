import React from "react";
import TypingEffect from "./TypingEffect";
import Link from "next/link";

function SectionLore() {
  return (
    <section>
      <div
        className="bg-black min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('./stars.png')" }}
      >
        <h1 className="text-white text-4xl">
          <TypingEffect />
        </h1>

        <div className="flex justify-center space-x-4 mb-9">
          {/*Cambiar este link cuando salga la versión oficial */}
          <a href="http://localhost:3000/play" target="_blank" rel="noopener noreferrer">
            <button
              class="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-cyan-300 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              type="submit"
            >
              PLAY
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" class="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </button>
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default SectionLore;

{/* 
  
*/}