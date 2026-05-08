import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Landmark, Check, MessageCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Membresía Mensual",
      price: "20.00",
      features: ["1 sesión individual", "Programa de autoayuda", "Sesión grupal moderada", "Material descargable"]
    },
    {
      name: "Suscripción Permanente",
      price: "59.00",
      features: ["Acceso vitalicio", "Soporte prioritario", "Certificación", "Todos los beneficios"]
    }
  ];

  return (
    <section className="py-20 bg-stone-50" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Opciones de Pago</h2>

        {/* BOTONES DE PAYPAL */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white p-8 border rounded-2xl shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-5xl font-black text-orange-600 mb-6">${plan.price}</p>
              <ul className="text-left mb-8 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="mb-2 text-stone-600 flex items-center italic">
                    <Check size={16} className="text-orange-500 mr-2" /> {f}
                  </li>
                ))}
              </ul>
              <PayPalButtons 
                style={{ layout: "vertical", color: "blue", shape: "rect" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      amount: { value: plan.price },
                      description: `Armonizarte - ${plan.name}`
                    }]
                  });
                }}
              />
            </div>
          ))}
        </div>

        {/* DATOS BANCARIOS SIMPLIFICADOS */}
        <div className="max-w-xl mx-auto bg-white border-2 border-orange-100 rounded-3xl p-8 shadow-sm text-center">
          <div className="flex items-center justify-center mb-6">
            <Landmark className="text-orange-600 mr-3" size={32} />
            <h3 className="text-2xl font-bold text-stone-800">Transferencia Directa (Ecuador)</h3>
          </div>
          
          <div className="bg-stone-50 p-8 rounded-xl border border-stone-100 mb-6">
            <p className="text-stone-500 uppercase text-xs font-bold tracking-wider mb-1">Banco</p>
            <p className="text-xl font-bold text-stone-800 mb-6">Banco Pichincha</p>
            
            <p className="text-stone-500 uppercase text-xs font-bold tracking-wider mb-1">Número de Cuenta (Ahorros)</p>
            <p className="text-2xl font-mono font-bold text-orange-600 tracking-tighter">2210518360</p>
          </div>
          
          <a 
            href="https://wa.link/pyasv5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20ba5a] transition-colors"
          >
            <MessageCircle size={20} />
            Enviar Comprobante
          </a>
          
          <p className="mt-4 text-stone-500 text-sm italic">
            * El acceso se activará inmediatamente tras validar tu transferencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;