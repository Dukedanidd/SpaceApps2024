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
            className="flex-col flex gap-2 text-sky-300 text-4xl lg:text-8xl font-bold mb-[70px]"
          >
            DRIFT
          </h1>
          <button
            onClick={HandlePlayClick}
            className="group cursor-pointer relative w-[100px] h-[50px] bg-[linear-gradient(144deg,_#af40ff,_#5b42f3_50%,_#00ddeb)] text-white whitespace-nowrap flex items-center justify-center rounded-lg overflow-hidden"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              PLAY
            </span>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.5s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.5s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.9s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.45s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.6s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.65s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.15s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.55s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.85s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.4s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.55s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.25s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.35s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.05s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[3.05s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.15s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.75s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[3.2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.8s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.9s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent delay-0"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.05s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.15s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.85s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[0.6s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[1.6s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.7s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.9s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.75s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.8s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[2.7s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.55s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.15s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.65s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.65s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.45s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[0.85s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.7s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.5s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.25s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.65s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.25s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[2.6s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[2.2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[1.45s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[2.55s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[0.2s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:blur-none group-focus:delay-[1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.25s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.35s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.45s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.5s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.8s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.3s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.4s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.4s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.75s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.05s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.35s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.4s]"></div>
            <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.35s]"></div>
          </button>
        </div>
      </section>
      <SectionLore />
    </>
  );
}

export default Hero;
