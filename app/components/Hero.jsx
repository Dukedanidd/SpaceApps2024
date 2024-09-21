import React from 'react'

function Hero() {
   return (
      <section className="relative h-screen bg-cover bg-center bg-no-repeat bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 lg:px-8 py-8 lg:py-16 " style={{ backgroundImage: "url('/space.jpg')" }}>
         <div className='items-center'>
            <h1 id='nebula' className='flex flex-col font-bold items-center text-cyan-200'>
               NEBULA
               <span id='drift' className='mt-1 text-9xl text-sky-300'>
                  DRIFT
               </span>
            </h1>
            <button className='text-4xl rounded-xl bg-white'>
               Play
            </button>
         </div>
      </section>
   )
}

export default Hero