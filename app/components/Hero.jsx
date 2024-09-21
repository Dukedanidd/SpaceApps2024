import React from 'react'

function Hero() {
  return (
     <section className="relative h-screen bg-cover bg-center bg-no-repeat bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 lg:px-8 py-8 lg:py-16 " style={{ backgroundImage: "url('/space.jpg')" }}>
        <div className='items-center text-9xl'>
            <h1 className='font-bold items-center flex text-9xl text-white'>
            NEBULA 
            </h1>
            <h1 className='mx-16 font-bold items-center flex text-9xl text-white'>
            DRIFT
            </h1>
            <button className='text-4xl rounded-xl bg-white'>
               Play
            </button>
        </div>
     </section>
  )
}

export default Hero