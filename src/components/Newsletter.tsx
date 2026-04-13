import React, { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          name: 'Suscripción Newsletter', 
          message: 'Nuevo suscriptor desde la web' 
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-brand-700">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Recibe guías de bienestar gratuitas
            </h2>
            <p className="text-brand-100 text-lg">
              Únete a nuestra comunidad y recibe herramientas de autoayuda y consejos de expertos.
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-brand-300" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-brand-600 rounded-xl bg-brand-900/50 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-brand-900 bg-accent-500 hover:bg-accent-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : status === 'success' ? (
                  '¡Suscrito!'
                ) : (
                  'Suscribirse'
                )}
              </button>
            </form>
            {status === 'error' && (
              <p className="mt-2 text-red-400 text-sm">Ocurrió un error. Inténtalo de nuevo.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
