import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    // Tu enlace optimizado generado en wa.link
    const waLink = "https://wa.link/pyasv5"; 
    
    // Este método es más directo para saltarse ventanas intermedias
    window.location.replace(waLink);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
      aria-label="WhatsApp"
    >
      <MessageCircle size={30} fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap font-medium text-sm">
        ¿Dudas? Escríbeme
      </span>
    </button>
  );
};

export default WhatsAppButton;