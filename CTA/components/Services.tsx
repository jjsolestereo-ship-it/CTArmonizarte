
import React, { useState } from 'react';
import { 
  CloudRain, 
  Wind, 
  BatteryLow, 
  WineOff, 
  HeartCrack, 
  Utensils, 
  Moon, 
  ShieldAlert,
  ArrowUpRight,
  X,
  Info
} from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'depresion',
    title: 'Depresión',
    description: 'Encuentra la luz de nuevo. Terapia cognitiva para superar la tristeza persistente.',
    fullDefinition: 'La depresión se aborda clínicamente como un proceso de "introyección" del dolor. Trabajamos en identificar los sentimientos de autorreproche y baja autoestima que surgen de pérdidas no elaboradas, buscando reinvertir esa energía en un Yo fortalecido y con propósito.',
    icon: <CloudRain className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'ansiedad',
    title: 'Ansiedad Generalizada',
    description: 'Herramientas prácticas para gestionar el miedo y recuperar la calma interior.',
    fullDefinition: 'La ansiedad es una señal del Yo ante la percepción de un peligro interno o externo inminente. Nuestro enfoque busca desarmar el exceso de excitación psíquica mediante técnicas de regulación vagal y el análisis de los deseos inconscientes que generan la alarma.',
    icon: <Wind className="w-8 h-8 text-cyan-500" />
  },
  {
    id: 'burnout',
    title: 'Estrés Laboral y Burnout',
    description: 'Reconecta con tu propósito sin sacrificar tu salud mental.',
    fullDefinition: 'El Burnout surge cuando la búsqueda de reconocimiento externo agota los recursos internos. Intervenimos en la gestión de límites saludables y en la reconfiguración de la relación con la autoridad y la productividad para evitar el vaciamiento emocional.',
    icon: <BatteryLow className="w-8 h-8 text-orange-500" />
  },
  {
    id: 'adicciones',
    title: 'Alcoholismo y Adicciones',
    description: 'Un camino libre de juicios hacia la sobriedad y la recuperación.',
    fullDefinition: 'Entendemos la adicción como un intento fallido de silenciar el sufrimiento ante una realidad gravosa. El programa holístico restaura la integridad física del sistema nervioso mientras se construyen nuevas herramientas de afrontamiento que no dependan de la insensibilidad química.',
    icon: <WineOff className="w-8 h-8 text-purple-500" />
  },
  {
    id: 'duelos',
    title: 'Duelos Afectivos',
    description: 'Acompañamiento compasivo para sanar pérdidas y rupturas.',
    fullDefinition: 'El duelo es el trabajo psíquico de desligar la libido del objeto perdido. Es un proceso lento que requiere validación y la construcción de un nuevo significado vital para evitar que la persona quede fijada a una nostalgia paralizante.',
    icon: <HeartCrack className="w-8 h-8 text-rose-400" />
  },
  {
    id: 'obesidad',
    title: 'Obesidad y Atracones',
    description: 'Reconstruye tu relación con la comida y con tu cuerpo.',
    fullDefinition: 'La ingesta compulsiva suele ser una armadura para silenciar una angustia que no encuentra palabras. Nuestro abordaje es multidisciplinar: nutrición terapéutica y escucha clínica para transformar el vacío emocional en expresión saludable.',
    icon: <Utensils className="w-8 h-8 text-green-500" />
  },
  {
    id: 'sueno',
    title: 'Higiene del Sueño',
    description: 'Técnicas para combatir el insomnio y lograr un descanso reparador.',
    fullDefinition: 'Dormir implica la capacidad de soltar el control. El insomnio crónico es una manifestación de hipervigilancia. Aplicamos técnicas de higiene del sueño y análisis de la ansiedad nocturna para restaurar el ciclo biológico del descanso.',
    icon: <Moon className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 'violencia',
    title: 'Violencia Familiar',
    description: 'Espacio seguro y confidencial. Protocolos de seguridad activados.',
    fullDefinition: 'La violencia intrafamiliar fractura la seguridad básica del ser humano. Activamos protocolos de seguridad inmediata y trabajamos en la desarticulación del ciclo de abuso, priorizando la protección de los hijos y la recuperación de la autonomía personal.',
    icon: <ShieldAlert className="w-8 h-8 text-red-600" />,
    specialAction: true
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleQuickExit = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.replace('https://www.google.com');
  };

  const openModal = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const navigateToPrograms = () => {
    closeModal();
    window.location.href = '#programas';
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-700 font-semibold uppercase tracking-wider text-sm">Nuestras Áreas de Atención</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900">
            Programas Terapéuticos Integrales
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            Abordamos cada situación con empatía, ciencia y profesionalismo basado en más de 20 años de experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => openModal(service)}
              className={`group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 border cursor-pointer flex flex-col justify-between ${service.specialAction ? 'bg-red-50 border-red-100 hover:shadow-red-100' : 'bg-stone-50 border-stone-100 hover:shadow-xl hover:shadow-brand-900/5'}`}
            >
              <div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${service.specialAction ? 'bg-white' : 'bg-white group-hover:bg-brand-50'}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-brand-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="flex items-center text-sm font-medium text-brand-700 group-hover:text-brand-900">
                  <span className="mr-2">Más información</span>
                  <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                {service.specialAction && (
                  <button 
                    onClick={handleQuickExit}
                    className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    Salida Rápida
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={closeModal}>
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in slide-in-from-bottom-8 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`p-6 border-b flex justify-between items-center ${selectedService.specialAction ? 'bg-red-50 border-red-100' : 'bg-brand-50 border-brand-100'}`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${selectedService.specialAction ? 'bg-red-100 text-red-600' : 'bg-white text-brand-600 shadow-sm'}`}>
                  {selectedService.icon}
                </div>
                <h3 className={`text-xl font-bold font-serif ${selectedService.specialAction ? 'text-red-900' : 'text-brand-900'}`}>
                  {selectedService.title}
                </h3>
              </div>
              <button 
                onClick={closeModal}
                className="text-stone-400 hover:text-stone-600 p-1 rounded-full hover:bg-black/5 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-accent-500 shrink-0 mt-1" />
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wide">Marco Terapéutico</h4>
                  <p className="text-stone-600 leading-relaxed text-lg font-serif">
                    {selectedService.fullDefinition || selectedService.description}
                  </p>
                </div>
              </div>

              {selectedService.specialAction && (
                 <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-6">
                   <p className="text-red-800 text-sm font-medium mb-2">Atención prioritaria 24/7:</p>
                   <a 
                    href="tel:+593980819319"
                    className="block w-full bg-red-600 text-center hover:bg-red-700 text-white py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    Llamar a Emergencia
                  </a>
                 </div>
              )}
            </div>
            
            <div className="bg-stone-50 p-4 text-center border-t border-stone-100">
              <button 
                onClick={navigateToPrograms}
                className="text-brand-600 font-bold hover:underline"
              >
                Ver Programa Completo de 8 Semanas
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
