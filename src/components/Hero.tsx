
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '' });
    }, 1500);
  };

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-stone-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop" 
          alt="Atmósfera de Paz" 
          className="w-full h-full object-cover scale-110 animate-[slowZoom_40s_linear_infinite_alternate] saturate-[0.85] brightness-[1.05] contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/98 via-stone-50/85 to-transparent backdrop-blur-[2px]"></div>
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1) rotate(0deg); }
          to { transform: scale(1.15) rotate(1deg); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-2xl text-brand-800 text-[10px] font-bold uppercase tracking-[0.4em] mb-10 border border-brand-100/50 shadow-xl shadow-brand-900/5">
              <Sparkles size={14} className="text-accent-500" />
              Tu Comunidad de Transformación
            </div>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-brand-900 leading-[0.85] mb-12 font-serif tracking-tighter">
              El Arte de <br/>
              <span className="italic text-accent-500 font-normal">Sanar</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-14 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Armonizarte: El espacio clínico diseñado para restaurar tu equilibrio emocional con ciencia y calidez humana.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="#servicios" className="group px-12 py-6 bg-brand-800 text-white rounded-3xl font-bold hover:bg-brand-900 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-900/40">
                Explorar Programas <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#equipo" className="px-12 py-6 bg-white/60 backdrop-blur-xl text-brand-900 border border-brand-100 rounded-3xl font-bold hover:bg-white transition-all shadow-xl">
                Nuestro Equipo
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white/90 backdrop-blur-3xl rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] p-12 lg:p-16 border border-white/50 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-brand-900 mb-3 font-serif tracking-tight">Comienza Hoy</h3>
                <p className="text-stone-500 mb-12 text-sm font-medium">Recibe una asesoría inicial sin compromiso.</p>
                
                {status === 'success' ? (
                  <div className="py-16 text-center animate-in zoom-in duration-700">
                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <CheckCircle2 size={48} />
                    </div>
                    <h4 className="font-bold text-brand-900 text-2xl mb-4 font-serif">¡Mensaje Enviado!</h4>
                    <p className="text-stone-500 text-base">Nos contactaremos contigo muy pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-2">Nombre Completo</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-8 py-5 rounded-3xl border border-stone-100 focus:ring-8 focus:ring-brand-500/5 focus:border-brand-500 outline-none transition-all bg-stone-50/50 hover:bg-white text-stone-700"
                        placeholder="Ej. Gladys Montero"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-2">Correo Electrónico</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-8 py-5 rounded-3xl border border-stone-100 focus:ring-8 focus:ring-brand-500/5 focus:border-brand-500 outline-none transition-all bg-stone-50/50 hover:bg-white text-stone-700"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full py-6 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-3xl shadow-2xl shadow-accent-500/40 transition-all active:scale-95 disabled:opacity-70 text-lg"
                    >
                      {status === 'loading' ? 'Enviando...' : 'Solicitar Información'}
                    </button>
                    <p className="text-[11px] text-stone-400 text-center mt-10 px-6 leading-relaxed italic">
                      Confidencialidad absoluta garantizada bajo normativa de ética profesional.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
