"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import Hero from "@components/Hero";
import Overlay from '../components/Overlay';
import Login from "@components/Login";

export default function Home() {
  const { data: session } = useSession();

  const loginButtonStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    padding: '5px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  if (session) {
    return (
      <> <div>
      <p>Bienvenido, {session.user.email}</p>
      <button style={loginButtonStyle} onClick={() => signOut()}>Cerrar sesión</button>
    </div>
        <Overlay />
        <Hero />
       
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

