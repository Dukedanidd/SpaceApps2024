'use client'

import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center w-96 mx-auto backdrop-blur-md bg-white/20 border border-white/20 rounded-lg p-5">
      <h2 className="mb-5 text-white/60">Iniciar Sesión</h2>
      <input type="text" placeholder="Nombre de jugador" className="mb-2 p-2 w-full" />
      <input type="password" placeholder="Contraseña" className="mb-2 p-2 w-full" />
      <input type="email" placeholder="Correo" className="mb-5 p-2 w-full" />
      <button 
        onClick={() => window.location.href = 'https://tu-enlace-aqui.com'} 
        className="p-2 bg-purple-500 text-white border-none rounded cursor-pointer w-full"
      >
        Registrarse
      </button>
    </div>
  )
}

export default Login