"use client"; // Convierte el componente en un componente de cliente
import React, { useState } from 'react';

export default function FormularioGlass() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    feedback: ''
  });

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    
    if (formData.name && formData.email && formData.password && formData.feedback) {
      console.log('Todos los campos están completos.');
      // Restablecer el estado a sus valores iniciales
      setFormData({
        name: '',
        email: '',
        password: '',
        feedback: ''
      });
    } else {
      console.log('Por favor, completa todos los campos.');
    }
  };

  // Renderizado del componente
  return (
    <div
    className="bg-black min-h-screen flex flex-col items-center justify-center"
    style={{ backgroundImage: "url('./stars.png')", overflowAnchor: 'none' }}
  >  
      <div className="w-full max-w-lg h-[85vh] p-8 bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20 flex flex-col justify-center">
        <h2 className="text-5xl font-semibold text-white text-center mb-12">Formulario</h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Campo de texto */}
          <div>
            <label className="block text-lg font-medium text-white mb-2" htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full h-12 px-4 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          {/* Campo de correo */}
          <div>
            <label className="block text-lg font-medium text-white mb-2" htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full h-12 px-4 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          {/* Campo de contraseña */}
          <div>
            <label className="block text-lg font-medium text-white mb-2" htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full h-12 px-4 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="****"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Campo de textarea para feedback */}
          <div>
            <label className="block text-lg font-medium text-white mb-2" htmlFor="feedback">Comentarios o Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              className="w-full h-64 px-4 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Déjanos tus comentarios aquí..."
              value={formData.feedback}
              onChange={handleChange}
            />
          </div>
          
          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full h-12 py-2 rounded-lg bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 hover:shadow-xl transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}