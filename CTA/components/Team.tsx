
import React, { useState, useRef, useEffect } from 'react';
import { Globe, BookOpen, Users, Award, HeartHandshake, Camera, Sparkles } from 'lucide-react';

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  description: string;
  initialImage: string;
  stats: { icon: React.ElementType; label: string; }[];
  gradientClass?: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ id, name, role, description, initialImage, stats, gradientClass = "from-brand-200 to-brand-400" }) => {
  const [imgSrc, setImgSrc] = useState<string>(initialImage);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`team-v-final-${id}`);
      if (saved && saved.startsWith('data:image')) {
        setImgSrc(saved);
        setHasError(false);
      } else {
        setImgSrc(initialImage);
      }
    } catch (e) {
      setImgSrc(initialImage);
    }
  }, [id, initialImage]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImgSrc(base64);
        setHasError(false);
        try { 
          localStorage.setItem(`team-v-final-${id}`, base64); 
        } catch (err) { 
          console.warn("Imagen local guardada en sesión."); 
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <div className="bg-white rounded-[3.5rem] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(22,51,62,0.1)] transition-all duration-1000 border border-stone-100/50 flex flex-col items-center text-center h-full group">
      
      <div className="relative w-64 h-64 mb-12 cursor-pointer group/img" onClick={() => fileInputRef.current?.click()}>
        <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${gradientClass} opacity-10 blur-2xl group-hover/img:opacity-30 transition-opacity duration-1000`}></div>
        
        <div className={`relative w-full h-full rounded-full p-2 bg-gradient-to-tr ${gradientClass} overflow-hidden shadow-2xl transition-all duration-1000 group-hover:scale-[1.03] group-hover:-rotate-1 border border-white/50`}>
          {isLoading && !hasError && (
            <div className="absolute inset-0 bg-stone-100 animate-pulse flex items-center justify-center">
              <Sparkles className="text-brand-200 animate-spin" size={32} />
            </div>
          )}
          
          {!hasError ? (
            <img 
              src={imgSrc} 
              alt={name} 
              onLoad={() => setIsLoading(false)}
              onError={() => { setHasError(true); setIsLoading(false); }}
              className={`w-full h-full object-cover rounded-full border-[8px] border-white bg-stone-50 transition-all duration-700 
              ${isLoading ? 'opacity-0' : 'opacity-100'} 
              contrast-[1.08] brightness-[1.02] saturate-[0.9] grayscale-[0.1]`} 
            />
          ) : (
            <div className="w-full h-full rounded-full border-[8px] border-white bg-stone-50 flex flex-col items-center justify-center">
              <span className="text-5xl font-serif font-bold text-brand-200 tracking-tighter">{initials}</span>
              <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest mt-2">Personalizar</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-brand-900/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md mb-3 scale-75 group-hover/img:scale-100 transition-transform duration-500">
              <Camera size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Cambiar Foto</span>
          </div>
        </div>

        <input type="file" ref={fileInputRef} onChange={handleFile} accept="image/*" className="hidden" />
      </div>

      <div className="flex-1 w-full">
        <h3 className="text-4xl font-bold text-brand-900 font-serif mb-3 tracking-tight">{name}</h3>
        <div className="inline-flex px-7 py-2 rounded-full bg-brand-50 text-brand-800 text-[11px] font-extrabold uppercase tracking-[0.35em] mb-10 border border-brand-100/60">
          {role}
        </div>
        <div className="relative mb-12 px-6">
          <p className="text-stone-500 text-lg leading-relaxed font-light italic relative z-10">
            "{description}"
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-10 border-t border-stone-100/80 pt-12 mt-auto">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-3 group/stat cursor-default">
            <div className="p-5 rounded-[1.5rem] bg-stone-50 text-brand-500 group-hover/stat:bg-brand-700 group-hover/stat:text-white group-hover/stat:-translate-y-2 transition-all duration-700 shadow-sm group-hover/stat:shadow-lg group-hover/stat:shadow-brand-900/10">
              <s.icon size={26} />
            </div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] group-hover/stat:text-brand-800 transition-colors">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team: React.FC = () => (
  <section id="equipo" className="py-32 lg:py-48 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-50/50 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-50/30 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-32">
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-white shadow-xl shadow-stone-200/50 border border-stone-100 rounded-full text-accent-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
          <Award size={16} /> Excelencia Profesional
        </div>
        <h2 className="text-6xl md:text-8xl font-bold text-brand-900 font-serif mb-12 tracking-tighter">Equipo profesional especializado</h2>
        <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 max-w-6xl mx-auto">
        <TeamMemberCard 
          id="directora-gladys-pro"
          name="Dra. Gladys Montero"
          role="Psicóloga Forense & Directora"
          description="Líder en reestructuración emocional con especialidad en peritaje. Su metodología fusiona la psicología clínica avanzada con un acompañamiento humano excepcional."
          initialImage="/Gladys.jpg"
          stats={[{ icon: Globe, label: "Experta Judicial" }, { icon: HeartHandshake, label: "Terapeuta Senior" }]}
          gradientClass="from-fuchsia-100 to-brand-300"
        />
        <TeamMemberCard 
          id="director-menthor-pro"
          name="Dr. Menthor Sánchez"
          role="Psicólogo Clínico & Autor"
          description="Especialista en psicodrama y terapia humanista. Con más de dos décadas de trayectoria, ha revolucionado el tratamiento de adicciones y duelos complejos."
          initialImage="/Menthor.jpg"
          stats={[{ icon: BookOpen, label: "Autor Científico" }, { icon: Users, label: "Líder de Grupo" }]}
          gradientClass="from-brand-200 to-accent-200"
        />
      </div>
    </div>
  </section>
);

export default Team;
