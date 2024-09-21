import React from 'react'

function Hero() {
  return (
     <section className="relative h-screen bg-cover bg-center bg-no-repeat bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 lg:px-8 py-8 lg:py-16 " style={{ backgroundImage: "url('/space.jpg')" }}>
        <div className='flex flex-col items-center justify-center'>
            <h1 id = 'nebula'className='font-bold items-center flex text-white text-cyan-200'>
            NEBULA 
            </h1>
            <div className='items-center text-center'>
            <h1 id = 'drift'className='font-bold items-center text-9xl text-sky-300'>
            DRIFT
            </h1>
            </div>
            <button className='text-4xl px-4 py-2 my-2 rounded-xl bg-white'>
               Play
            </button>
        </div>
     </section>
  )
}

export default Hero