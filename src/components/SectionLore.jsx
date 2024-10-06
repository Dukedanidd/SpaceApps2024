import React from "react";
import TypingEffect from "./TypingEffect";

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
          <button
            class="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            >
            <div
              class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            </div>
            <div
              class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              Play
            </div>
          </button>
          <button
            class="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            >
            <div
              class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
            </div>
            <div
              class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              LOG IN
            </div>
          </button>

          
        </div>
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

{/* 
  
*/}