"use client";
import { useState, useEffect } from "react";

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowOverlay(false), 1000);
    }, 2000); //duracion del overlay
    return () => clearTimeout(timer);
  }, []);

  if (!showOverlay) return null;

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-center text-white px-8">
        <h1 className="text-4xl font-mono font-bold mb-4">Attention</h1>
        <p className="text-lg font-mono">
          The asteroids and celestial bodies present in this game are all based
          on official information from NASA.
          <br />
          The objective of this game is to encourage learning with educational
          interactions.
          <br />
          For more information visit:
          https://eyes.nasa.gov/apps/asteroids/#/home
        </p>
      </div>
    </div>
  );
};

export default Overlay;
