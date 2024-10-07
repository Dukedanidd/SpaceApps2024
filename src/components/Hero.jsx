"use client";
import React from "react";
import SectionLore from "./SectionLore";

function Hero() {
  const HandlePlayClick = () => {
    window.scrollBy({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 px-2 lg:px-4 py-4 lg:py-8"
        style={{ backgroundImage: "url('./space.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <p
            id="nebula"
            className="flex-col flex gap-2 text-cyan-200 text-3xl lg:text-6xl transform mb-12"
          >
            NEBULA
          </p>
          <h1
            id="drift"
            className="flex-col flex gap-2 text-sky-300 text-4xl lg:text-8xl font-bold mb-[20px]"
          >
            DRIFT
          </h1>

          <div className="flex items-center justify-center">
            <div className="relative group">
              <button
                onClick={HandlePlayClick}
                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-3 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      NEXT
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <SectionLore />
    </>
  );
}

export default Hero;
