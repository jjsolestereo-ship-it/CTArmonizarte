import React from 'react';
import './SubscriptionPlans.css'; // archivo de estilos que crearemos

const plans = [
  {
    name: "Gratuito",
    features: [
      "Acceso al blog de bienestar",
      "Foro de comunidad abierta",
      "Guía de programas",
      "Entrevista de orientación"
    ]
  },
  {
    name: "Membresía Mensual",
    features: [
      "1 programa de autoayuda por mes",
      "1 sesión grupal moderada",
      "2 sesiones individuales"
    ]
  },
  {
    name: "Programas Permanentes",
    features: [
      "Psicoterapia individual, pareja y familiar",
      "Atención en crisis",
      "Orientación vocacional",
      "Formación en Psicodrama, Psicopatología y Clínica",
      "Asesoría en salud mental"
    ]
  }
];

const SubscriptionPlans = () => {
  return (
    <div className="plans-container">
      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          <h2>{plan.name}</h2>
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button onClick={() => alert(`Suscribirse al plan ${plan.name}`)}>
            Suscribirse
          </button>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionPlans;
