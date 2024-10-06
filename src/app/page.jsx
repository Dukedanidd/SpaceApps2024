"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import Hero from "@components/Hero";
import Overlay from '../components/Overlay';
import Login from "@components/Login";
import SectionLore from "../components/SectionLore";

export default function Home() {
  const { data: session } = useSession();

  const loginButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    padding: '5px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '20px',
  };
  const loginButtonStyleBienvenida = {
    position: 'absolute', // Cambiado de 'static' a 'absolute'
    top: '15px',
    left: '15px', // Añadido para posicionar en la esquina superior izquierda
    padding: '5px',
    backgroundColor: 'white', // Cambiado de 'white' a 'transparent'
    color: 'black', // Cambiado de 'white' a 'black' para que sea visible
    border: 'none',
    borderRadius: '4px',
    fontSize: '20px',
  };

  if (session) {
    return (
      <> 
        <Overlay />
        
        <Hero />
        <div>
      <p style={loginButtonStyleBienvenida}>Bienvenido, {session.user.email}</p>
      <button style={loginButtonStyle} onClick={() => signOut()}>Cerrar sesión</button>
    </div>
      <SectionLore />
        
       
      </>
    );
  }

  return (
    <>
      <Overlay />
      <Hero />
      <button style={loginButtonStyle} onClick={() => signIn()}>Iniciar sesión</button>
    </>
  );
}

