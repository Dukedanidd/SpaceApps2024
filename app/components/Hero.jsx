'use client'
import React from 'react'
import SectionLore from './SectionLore';



function Hero() {
   const HandlePlayClick = () => {
      window.scrollBy({
         top: 1000,
         left: 0,
         behavior: 'smooth'
      });
   };
   return (
      <>
         <section className="relative h-screen bg-cover bg-center bg-no-repeat bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 lg:px-8 py-8 lg:py-16 " style={{ backgroundImage: "url('/space.jpg')" }}>
            <div className='flex flex-col items-center justify-center'>
               <p id='nebula' className='text-center text-cyan-200 text-9xl lg:text-9xl transform'>NEBULA</p>
               <h1 id='drift' className='text-center text-sky-300 text-9xl lg:text-9xl font-bold'>DRIFT</h1>
               <button className={`text-4xl px-4 py-2 my-2 rounded-xl bg-white`}
                  onClick={HandlePlayClick}>
                  Play
               </button>
            </div>
         </section>
         <SectionLore />
      </>
   )
}

export default Hero