import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-brand-700">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Recibe guías de bienestar gratuitas
            </h2>
            <p className="text-brand-100 text-lg">
              Únete a nuestra comunidad y recibe semanalmente herramientas de autoayuda, meditaciones y consejos de expertos.
            </p>
          </div>
          
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-brand-300" />
                </div>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full pl-10 pr-4 py-3.5 rounded-lg bg-brand-900/50 border border-brand-600 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-brand-900 font-bold px-6 py-3.5 rounded-lg hover:bg-brand-50 transition-colors whitespace-nowrap shadow-lg"
              >
                Suscribirme
              </button>
            </form>
            <p className="text-xs text-brand-400 mt-3 text-center sm:text-left">
              Sin spam, solo contenido de valor. Puedes cancelar cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;