
import React, { useState, useEffect } from 'react';
import { Check, CreditCard, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { PricingPlan } from '../types';
import CheckoutModal from './CheckoutModal';

const plans: PricingPlan[] = [
  {
    name: 'Comunidad Abierta',
    price: 'Gratis',
    features: [
      'Acceso al blog de bienestar',
      'Foro de comunidad abierta',
      'Boletín semanal de consejos',
      'Entrevista de orientacion'
    ],
    cta: 'Unirme Gratis'
  },
  {
    name: 'Membresía Mensual',
    price: '$20',
    period: '/mes',
    recommended: true,
    features: ['1 sesion individual',
      '1 programa de autoayuda por mes',
      '1 sesión grupal moderada por mes',
      'Material descargable técnico',
      'Seguimiento y evaluación'
    ],
    cta: 'Empezar Mensual'
  },
  {
    name: 'Suscripcion Premium',
    price: '$ 59',
    period: 'Permanente',
    features: [
      'Acceso a todos los programas de autoayuda',
      'Diagnostico de personalidad',
      '3 sesiones individuales',
      '3 sesiones grupales',
      'Evaluacion y seguimiento',
      'Mensajeria profesional'
    ],
    cta: 'Suscribirse Premium'
  }
];

const Pricing: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState<string | null>(null);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<{name: string, price: string} | null>(null);

  const updateCurrentPlan = () => {
    const savedPlan = localStorage.getItem('armonizarte_subscription');
    setCurrentPlan(savedPlan);
  };

  useEffect(() => {
    updateCurrentPlan();
    
    window.addEventListener('subscriptionUpdated', updateCurrentPlan);
    window.addEventListener('storage', updateCurrentPlan);
    
    return () => {
      window.removeEventListener('subscriptionUpdated', updateCurrentPlan);
      window.removeEventListener('storage', updateCurrentPlan);
    };
  }, []);

  const handleSubscribeClick = (plan: PricingPlan) => {
    if (currentPlan === plan.name) return;

    if (plan.price === 'Gratis') {
      localStorage.setItem('armonizarte_subscription', plan.name);
      window.dispatchEvent(new Event('subscriptionUpdated'));
      return;
    }
    
    setSelectedPlanForCheckout({ 
      name: plan.name, 
      price: plan.price + (plan.period || '') 
    });
  };

  return (
    <section id="planes" className="py-32 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-6">
            <ShieldCheck size={16} className="text-brand-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Transacciones Seguras & Encriptadas</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-900 font-serif tracking-tighter mb-6">
            Invierte en tu <span className="italic text-accent-500 font-normal">Tranquilidad</span>
          </h2>
          <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            Elige el nivel de acompañamiento clínico que mejor se adapte a tu etapa actual de sanación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => {
            const isCurrent = currentPlan === plan.name;
            const isAnnual = plan.name.includes('Anual');

            return (
              <div 
                key={plan.name}
                className={`relative bg-white rounded-[3rem] transition-all duration-700 flex flex-col overflow-hidden border ${
                  plan.recommended 
                  ? 'border-accent-200 shadow-[0_30px_100px_-20px_rgba(255,139,114,0.15)] scale-105 z-10' 
                  : isAnnual 
                  ? 'border-amber-200 shadow-xl bg-gradient-to-b from-white to-amber-50/20'
                  : 'border-stone-100 shadow-xl'
                } ${isCurrent ? 'ring-4 ring-brand-500/20' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-accent-500 text-white py-2 text-center text-[10px] font-bold uppercase tracking-[0.3em]">
                    Sugerencia Clínica
                  </div>
                )}

                {isAnnual && !isCurrent && (
                  <div className="absolute top-4 right-6 text-amber-300">
                    <Star size={24} fill="currentColor" />
                  </div>
                )}
                
                <div className={`p-10 ${plan.recommended ? 'pt-14' : ''}`}>
                  <h3 className="text-2xl font-bold text-brand-900 font-serif mb-2">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-brand-800 tracking-tighter">{plan.price}</span>
                    {plan.period && <span className="text-stone-400 font-medium text-lg">{plan.period}</span>}
                  </div>
                </div>

                <div className="px-10 pb-10 flex-1">
                  <div className="w-full h-px bg-stone-100 mb-8"></div>
                  <ul className="space-y-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.recommended ? 'bg-accent-50 text-accent-500' : 'bg-brand-50 text-brand-500'}`}>
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-stone-600 text-sm font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-10 pt-0 mt-auto">
                  <button 
                    onClick={() => handleSubscribeClick(plan)}
                    disabled={isCurrent}
                    className={`w-full py-5 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-3 text-sm tracking-wide ${
                      isCurrent 
                      ? 'bg-brand-50 text-brand-800 cursor-default border border-brand-200' 
                      : isAnnual
                      ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-xl shadow-amber-500/30'
                      : plan.recommended 
                      ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-xl shadow-accent-500/30' 
                      : 'bg-white text-brand-800 border-2 border-brand-100 hover:border-brand-500 hover:bg-brand-50'
                    }`}
                  >
                    {isCurrent ? (
                      <>
                        <Sparkles size={18} className="text-amber-500" />
                        Plan {isAnnual ? 'Premium' : ''} Activado
                      </>
                    ) : (
                      <>
                        <CreditCard size={18} />
                        {plan.cta}
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-stone-400 text-center mt-6 uppercase tracking-widest font-bold">
                    Pichincha / PayPal / Débito
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CheckoutModal 
        isOpen={!!selectedPlanForCheckout}
        onClose={() => setSelectedPlanForCheckout(null)}
        planName={selectedPlanForCheckout?.name || ''}
        planPrice={selectedPlanForCheckout?.price || ''}
      />
    </section>
  );
};

export default Pricing;
