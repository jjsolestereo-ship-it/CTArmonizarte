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
<<<<<<< HEAD
    features: [
      '1 sesion individual',
=======
    features: ['1 sesion individual',
>>>>>>> fa94dc010f81dcf066475d9c4863a8eeeb0e5417
      '1 programa de autoayuda por mes',
      '1 sesión grupal moderada por mes',
      'Material descargable técnico',
      'Seguimiento y evaluación'
    ],
    cta: 'Empezar Mensual'
  },
  {
<<<<<<< HEAD
    name: 'Plan Premium',
    price: '$50',
    period: '/mes',
    features: [
      '4 sesiones individuales',
      'Acceso total a programas',
      'Soporte prioritario 24/7',
      'Talleres exclusivos',
      'Plan personalizado'
    ],
    cta: 'Ir a Premium'
=======
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
>>>>>>> fa94dc010f81dcf066475d9c4863a8eeeb0e5417
  }
];

const Pricing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planes de Acompañamiento</h2>
          <p className="text-xl text-gray-600">Elige el nivel de apoyo que mejor se adapte a tu proceso</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border ${
                plan.recommended
                  ? 'border-blue-500 shadow-xl scale-105 z-10 bg-white'
                  : 'border-gray-200 shadow-sm hover:shadow-md transition-shadow'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Más Popular
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(plan)}
                className={`w-full py-3 px-6 rounded-xl font-bold transition-colors ${
                  plan.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;