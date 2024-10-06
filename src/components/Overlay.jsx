"use client"
import { useState, useEffect } from 'react';

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setShowOverlay(false), 1000);
    }, 4500); //duracion del overlay
    return () => clearTimeout(timer);
  }, []);

  if (!showOverlay) return null;

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center text-white px-8">
        <h1 className="text-4xl font-mono font-bold mb-4">Atención</h1>
        <p className="text-lg font-mono">
          Los asteroides y cuerpos celestes presentes en este juego son todos basados en información oficial.
          <br/>El objetivo de este juego es que fomentar el aprendizaje con interacciones didácticas.
          <br/>Para más información visite https://eyes.nasa.gov/apps/asteroids/#/home
        </p>
      </div>
    </div>
  );
};

export default Overlay;
