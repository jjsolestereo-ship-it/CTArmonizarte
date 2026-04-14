import React, { useState, useEffect } from 'react';
import { Camera, Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react';

// Importación de imágenes desde la carpeta assets
import gladysImg from '../assets/gladys.jpg';
import menthorImg from '../assets/menthor.jpg';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [image, setImage] = useState(member.image);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem(`team-mem-${member.id}`);
    if (savedImage) {
      setImage(savedImage);
    } else {
      setImage(member.image);
    }
  }, [member.id, member.image]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        localStorage.setItem(`team-mem-${member.id}`, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <div className="relative group aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors flex items-center gap-2 text-sm font-medium text-gray-900"
          >
            <Camera className="w-5 h-5" />
            Cambiar Foto
          </button>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
          accept="image/*"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-blue-600 font-medium tracking-wide uppercase text-sm">{member.role}</p>
        </div>

        <p className="text-gray-600 mb-6 italic leading-relaxed">"{member.bio}"</p>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {member.specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100"
            >
              {specialty}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <a
            href={`mailto:${member.social.email}`}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: 'gladys',
      name: 'Dra. Gladys Montero',
      role: 'Psicóloga Forense & Directora',
      image: gladysImg,
      bio: 'Líder en reestructuración emocional con especialidad en peritaje. Su metodología fusiona la psicología clínica avanzada con un enfoque humano y transformador.',
      specialties: ['Psicología Forense', 'Terapia Familiar', 'Peritaje Psicológico'],
      social: {
        email: 'gladys.montero@armonizarte.com',
        linkedin: '#'
      }
    },
    {
      id: 'menthor',
      name: 'Dr. Menthor Sánchez',
      role: 'Psicólogo Clínico & Autor',
      image: menthorImg,
      bio: 'Especialista en psicodrama y terapia humanista. Con más de dos décadas de trayectoria, ha revolucionado el tratamiento del trauma mediante el diálogo intercultural.',
      specialties: ['Psicodrama', 'Terapia Humanista', 'Investigación'],
      social: {
        email: 'menthor.sanchez@armonizarte.com',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Nuestro Equipo Profesional
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Especialistas comprometidos con tu bienestar integral y el desarrollo humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;