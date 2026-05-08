import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-stone-800">Únete a nuestra comunidad</h2>
        <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
          Recibe herramientas semanales para tu bienestar emocional y noticias de Armonizarte directamente en tu correo.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-grow px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;