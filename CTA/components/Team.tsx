import React from 'react';

const Team = () => {
  const members = [
    {
      name: "Dr. Menthor Sanchez",
      role: "Psicoterapeuta e Investigador",
      image: "/CTA_public_temp/menthor.jpg"
    },
    {
      name: "Dra. Gladys Montero",
      role: "Psicóloga Forense y Directora",
      image: "/CTA_public_temp/gladys.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-center">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center">
              <img src={m.image} alt={m.name} className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-orange-100" />
              <h3 className="text-2xl font-bold text-stone-800">{m.name}</h3>
              <p className="text-orange-600 font-medium">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;