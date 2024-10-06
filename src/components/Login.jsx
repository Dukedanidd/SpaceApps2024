/*
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [feedbacks, setFeedbacks] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      // Redirigir después de un inicio de sesión exitoso
      window.location.href = '/'; // Cambia esto a la ruta deseada
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
*/