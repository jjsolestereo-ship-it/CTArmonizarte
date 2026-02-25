import React, { useState } from 'react';
import { Phone, X, AlertTriangle, HeartHandshake } from 'lucide-react';

const CrisisFloatingAction: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  
  const handleQuickExit = () => {
    window.location.replace('https://www.google.com');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Modal/Popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border-l-4 border-emergency-500 w-80 sm:w-96 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-emergency-50 p-4 flex justify-between items-center border-b border-emergency-100">
            <h3 className="font-bold text-emergency-800 flex items-center gap-2">
              <HeartHandshake size={20} className="text-emergency-600" />
              Apoyo Inmediato
            </h3>
            <button onClick={toggleOpen} className="text-stone-400 hover:text-stone-600">
              <X size={20} />
            </button>
          </div>
          
          <div className="p-5">
            <div className="text-stone-600 text-sm space-y-3 mb-4 leading-relaxed">
              <p>
                Cuando la situación se desborda, déjate acompañar profesionalmente; encontraremos el camino para superar cualquier obstáculo y recuperar tu bienestar personal y social.
              </p>
              <p className="font-medium text-stone-800">
                Si estás atravesando una dura situación o en crisis, llama a tu profesional de confianza en tu localidad o comunícate con nuestro equipo profesional capacitado por más de 20 años:
              </p>
            </div>

            <div className="space-y-3 mb-4">
              <a href="tel:+593983739198" className="flex items-center gap-3 w-full bg-brand-50 hover:bg-brand-100 border border-brand-200 p-3 rounded-xl transition-all group">
                <div className="bg-white p-2 rounded-full text-brand-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-bold text-brand-900 text-sm">Dra. Gladys Montero</div>
                  <div className="text-xs text-brand-700">Psicóloga</div>
                  <div className="text-xs text-stone-500 font-mono mt-0.5">+593 983 739 198</div>
                </div>
              </a>

              <a href="tel:+593979372149" className="flex items-center gap-3 w-full bg-brand-50 hover:bg-brand-100 border border-brand-200 p-3 rounded-xl transition-all group">
                <div className="bg-white p-2 rounded-full text-brand-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-bold text-brand-900 text-sm">Dr. Menthor Sanchez</div>
                  <div className="text-xs text-brand-700">Psicólogo Clínico</div>
                  <div className="text-xs text-stone-500 font-mono mt-0.5">+593 979 372 149</div>
                </div>
              </a>
            </div>
            
            <a href="tel:911" className="flex items-center justify-center gap-2 w-full bg-emergency-600 hover:bg-emergency-700 text-white py-2.5 rounded-lg font-bold text-sm transition-colors shadow-md shadow-emergency-200">
              <AlertTriangle size={16} />
              Emergencias Generales (911)
            </a>

            <div className="pt-3 border-t border-stone-100 mt-3 text-center">
              <button 
                onClick={handleQuickExit}
                className="text-xs text-stone-400 hover:text-emergency-600 hover:underline py-1"
              >
                Salir rápido de esta página (Escapar)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleOpen}
        className={`${isOpen ? 'bg-stone-800 rotate-45' : 'bg-emergency-600 hover:bg-emergency-700 hover:scale-105'} text-white rounded-full p-4 shadow-xl transition-all duration-300 flex items-center gap-2 z-50`}
        aria-label="Botón de emergencia"
      >
        {isOpen ? <X size={28} /> : (
          <>
            <Phone size={28} className="animate-pulse" />
            <span className="font-bold pr-2 hidden sm:inline">Ayuda 24/7</span>
          </>
        )}
      </button>
    </div>
  );
};

export default CrisisFloatingAction;