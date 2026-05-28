import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Landmark, Check, MessageCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Membresía Mensual",
      price: "25.00",
      period: "/mes",
      features: [
        "1 sesión individual",
        "1 programa de autoayuda por mes",
        "1 sesión grupal moderada por mes",
        "Material descargable técnico",
        "Seguimiento y evaluación"
      ]
    },
    {
      name: "Suscripción Premium",
      price: "59.00",
      period: "/mes",
      features: [
        "Acceso a todos los programas de autoayuda",
        "Diagnóstico de personalidad",
        "3 sesiones individuales",
        "3 sesiones grupales",
        "Evaluación y seguimiento",
        "Mensajería profesional"
      ]
    }
  ];

  return (
    <section className="py-20 bg-stone-50" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">
          Opciones de Pago
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col justify-between relative ${
                plan.name === "Membresía Mensual" ? "border-orange-200" : ""
              }`}
            >
              {plan.name === "Membresía Mensual" && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm">
                  Sugerencia Clínica
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-stone-800 font-serif mb-4">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-stone-900">$ {plan.price}</span>
                  <span className="text-stone-500 ml-1 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm">
                      <Check className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-stone-100">
                {/* Aquí se renderizan tus botones de pago */}
                <div className="w-full space-y-3">
                  <PayPalButtons 
                    style={{ layout: "vertical", label: "checkout" }} 
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [{
                          description: plan.name,
                          amount: { currency_code: "USD", value: plan.price }
                        }]
                      });
                    }}
                  />
                  <button className="w-full flex items-center justify-center gap-2 border border-stone-300 text-stone-700 hover:bg-stone-50 py-2.5 rounded-xl text-sm font-medium transition-colors">
                    <Landmark className="w-4 h-4" />
                    Transferencia Bancaria
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;