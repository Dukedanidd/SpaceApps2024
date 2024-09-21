import React from 'react'

function Hero() {
  return (
     <section className="relative h-screen bg-cover bg-center bg-no-repeat bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 lg:px-8 py-8 lg:py-16 " style={{ backgroundImage: "url('/space.jpg')" }}>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold items-center flex text-9xl text-white'>
            NEBULA DRIFT
            </h1>
            <button className='text-4xl justify-center bg-white px-3 py-1 my-2 rounded-xl'>
               Play
            </button>
        </div>
     </section>
  )
}

export default Hero