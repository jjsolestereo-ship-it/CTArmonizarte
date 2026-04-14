import React, { useState } from 'react';
// La ruta es exacta a tu estructura: carpeta Api dentro de components
import { sendEmail } from './Api/send-email';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Llamada a la función con los datos del formulario
    const result = await sendEmail({
      name: "Usuario de Newsletter",
      email: email,
      message: "Este usuario se ha suscrito al boletín informativo desde la web CTA."
    });

    if (result.success) {
      setStatus('success');
      setEmail(''); // Limpia el input si sale bien
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
        <p className="mb-8 text-gray-600">Recibe información sobre salud mental y bienestar directamente en tu correo.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-80 text-black"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-600 font-medium animate-pulse">¡Gracias! Te has suscrito correctamente.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 font-medium">Hubo un error. Por favor, intenta de nuevo.</p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;