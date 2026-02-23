
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Brain, 
  ChevronRight, 
  X,
  Leaf, 
  Crown, 
  Download,
  Loader2,
  FileText,
  CheckCircle,
  ShieldAlert,
  HeartCrack,
  PenTool,
  RefreshCcw,
  Palette,
  Sparkles,
  Lock,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Sunrise,
  Zap,
  Star,
  ShieldCheck as ShieldIcon
} from 'lucide-react';
import CheckoutModal from './CheckoutModal';

type ProgramType = 'depression' | 'anxiety' | 'addiction' | 'burnout' | 'grief' | 'obesity' | 'insomnia' | 'violence' | null;

const Programs: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<ProgramType>(null);
  const [activeTab, setActiveTab] = useState<'intro' | 'weeks' | 'tools' | 'nutrition'>('intro');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [planType, setPlanType] = useState('');
  const [checkoutData, setCheckoutData] = useState<{name: string, price: string} | null>(null);

  const checkSubscription = () => {
    const sub = localStorage.getItem('armonizarte_subscription');
    setPlanType(sub || '');
    // RECONOCIMIENTO CRÍTICO: El Plan Anual Premium debe habilitar el acceso.
    setHasSubscription(!!sub && (sub === 'Membresía Mensual' || sub === 'Plan Anual Premium'));
  };

  useEffect(() => {
    checkSubscription();
    window.addEventListener('subscriptionUpdated', checkSubscription);
    window.addEventListener('storage', checkSubscription);
    return () => {
      window.removeEventListener('subscriptionUpdated', checkSubscription);
      window.removeEventListener('storage', checkSubscription);
    };
  }, []);

  const openProgram = (program: ProgramType) => {
    setActiveProgram(program);
    setActiveTab('intro');
    setDownloadSuccess(false);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProgram = () => {
    setActiveProgram(null);
    document.body.style.overflow = 'unset';
  };

  const handleDownload = () => {
    if (!hasSubscription) return;
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
    }, 2000);
  };

  const handleQuickPay = (planName: string, planPrice: string) => {
    setCheckoutData({ name: planName, price: planPrice });
  };

  const getHeaderColor = () => {
    switch (activeProgram) {
      case 'depression': return 'bg-brand-700';
      case 'anxiety': return 'bg-cyan-800';
      case 'addiction': return 'bg-purple-800';
      case 'burnout': return 'bg-orange-700';
      case 'grief': return 'bg-rose-700';
      case 'obesity': return 'bg-emerald-700';
      case 'insomnia': return 'bg-indigo-800';
      case 'violence': return 'bg-red-900';
      default: return 'bg-brand-700';
    }
  };

  const isAnnual = planType === 'Plan Anual Premium';

  return (
    <section id="programas" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-600 font-semibold uppercase tracking-widest text-xs flex items-center justify-center gap-2 mb-4">
            <Crown size={16} /> Contenido Premium Especializado
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-900 font-serif mb-6 tracking-tighter">
            Programas de Autoayuda
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            Metodologías clínicas diseñadas para guiar tu proceso de sanación con soporte constante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            { id: 'depression', title: 'Holístico Depresión', time: '8 Semanas', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', color: 'bg-brand-900/40' },
            { id: 'anxiety', title: 'Manejo de Ansiedad', time: '8 Semanas', img: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=1000&auto=format&fit=crop', color: 'bg-cyan-900/40' },
            { id: 'addiction', title: 'Alcoholismo y Adicción', time: '8 Semanas', img: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1000&auto=format&fit=crop', color: 'bg-purple-900/40' },
            { id: 'burnout', title: 'Estrés y Burnout', time: '8 Semanas', img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80', color: 'bg-orange-800/40' },
            { id: 'grief', title: 'Duelos y Rupturas', time: '8 Semanas', img: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80', color: 'bg-rose-900/40' },
            { id: 'obesity', title: 'Holístico Obesidad', time: '8 Semanas', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', color: 'bg-emerald-900/40' },
            { id: 'insomnia', title: 'Higiene del Sueño', time: '4 Semanas', img: 'https://images.unsplash.com/photo-1517177646641-83fe10f14633?w=800&q=80', color: 'bg-indigo-900/40' },
            { id: 'violence', title: 'Violencia Intrafamiliar', time: '8 Semanas', img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop', color: 'bg-red-900/40' },
          ].map((prog) => (
            <div key={prog.id} className="bg-white rounded-[2.5rem] shadow-xl border border-stone-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer" onClick={() => openProgram(prog.id as ProgramType)}>
              <div className="h-48 overflow-hidden relative">
                <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className={`absolute inset-0 ${prog.color} group-hover:opacity-30 transition-opacity duration-700 flex items-center justify-center`}>
                  {!hasSubscription && (
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Lock className="text-white" size={24} />
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-brand-800 text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm uppercase tracking-widest">
                  <FileText size={10} /> {hasSubscription ? 'Kit PDF Disponible' : 'Bloqueado'}
                </div>
              </div>
              <div className="p-8">
                <span className="text-accent-600 text-[10px] font-bold uppercase tracking-widest mb-2 block">{prog.time}</span>
                <h3 className="text-xl font-bold text-brand-900 font-serif mb-6 leading-tight">{prog.title}</h3>
                <button className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-xs font-bold transition-all duration-300 ${hasSubscription ? 'bg-brand-50 text-brand-700 hover:bg-brand-700 hover:text-white' : 'bg-stone-100 text-stone-400'}`}>
                  {hasSubscription ? 'Acceder al Material' : 'Suscripción Requerida'} <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProgram && (
        <div className="fixed inset-0 z-[60] bg-stone-900/80 backdrop-blur-md flex items-center justify-center p-0 md:p-6 animate-in fade-in duration-500">
          <div className="bg-white w-full max-w-6xl md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col h-[100dvh] md:h-[90vh] animate-in slide-in-from-bottom-10 duration-500 relative">
            
            {/* Modal Header */}
            <div className={`p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 shrink-0 ${getHeaderColor()}`}>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md mb-4 border border-white/10">
                  {hasSubscription ? <ShieldIcon size={14} className="text-accent-300" /> : <Lock size={14} className="text-white/60" />}
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{hasSubscription ? `Acceso Socio ${isAnnual ? 'Premium' : ''}` : 'Membresía Pendiente'}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-serif leading-none tracking-tighter">
                  {activeProgram === 'violence' ? 'Violencia Intrafamiliar' : 
                   activeProgram === 'grief' ? 'Duelos o Rupturas' : 
                   activeProgram === 'burnout' ? 'Stress Laboral' : 
                   activeProgram === 'addiction' ? 'Control de Adicciones' : 'Módulo de Sanación'}
                </h2>
              </div>
              
              <div className="flex items-center gap-4">
                {hasSubscription && (
                  <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-2xl ${downloadSuccess ? 'bg-green-500 text-white' : 'bg-white text-brand-900 hover:scale-105 active:scale-95'}`}
                  >
                    {isDownloading ? <Loader2 size={20} className="animate-spin" /> : downloadSuccess ? <CheckCircle size={20} /> : <Download size={20} />}
                    {isDownloading ? 'Generando Kit...' : downloadSuccess ? 'Kit Descargado' : 'Descargar Material (PDF)'}
                  </button>
                )}
                <button onClick={closeProgram} className="bg-black/10 hover:bg-black/20 p-3 rounded-full transition-colors backdrop-blur-sm border border-white/20">
                  <X size={28} />
                </button>
              </div>
            </div>

            {/* Content or Paywall */}
            {!hasSubscription ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-stone-50 overflow-y-auto">
                <div className="max-w-2xl w-full">
                  <div className="mb-8 relative">
                    <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl relative z-10 animate-bounce">
                      <Lock size={36} className="text-brand-500" />
                    </div>
                    <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-full scale-150"></div>
                  </div>
                  <h3 className="text-4xl font-bold text-brand-900 font-serif mb-4 tracking-tight">Acceso Bloqueado</h3>
                  <p className="text-stone-500 text-lg mb-12 leading-relaxed font-light">
                    Este programa clínico de 8 semanas está disponible exclusivamente para nuestros socios activos. Elige tu plan para desbloquear todo el material.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* ACCESO AL PLAN ANUAL PREMIUM */}
                    <button 
                      onClick={() => handleQuickPay('Plan Anual Premium', '$79.90/año')}
                      className="group flex flex-col items-center p-10 bg-brand-900 text-white border-4 border-amber-500/40 rounded-[3rem] hover:border-amber-500 transition-all shadow-2xl relative overflow-hidden active:scale-95"
                    >
                      <div className="absolute top-2 right-4 text-amber-400 rotate-12 opacity-60"><Star size={24} fill="currentColor" /></div>
                      <Crown className="text-amber-400 mb-5 group-hover:scale-110 transition-transform" size={40} />
                      <span className="font-bold text-xl mb-1">Plan Anual Premium</span>
                      <span className="text-3xl font-serif font-bold text-amber-300">$79.90</span>
                      <span className="text-[10px] text-brand-300 mt-3 uppercase tracking-[0.3em] font-bold">La mejor opción (Ahorro 35%)</span>
                    </button>

                    {/* ACCESO AL PLAN MENSUAL */}
                    <button 
                      onClick={() => handleQuickPay('Membresía Mensual', '$10.00/mes')}
                      className="group flex flex-col items-center p-10 bg-white border-2 border-brand-100 rounded-[3rem] hover:border-brand-500 transition-all shadow-xl active:scale-95"
                    >
                      <Zap className="text-brand-600 mb-5 group-hover:scale-110 transition-transform" size={40} />
                      <span className="font-bold text-brand-900 text-xl mb-1">Membresía Mensual</span>
                      <span className="text-3xl font-serif font-bold text-brand-800">$10.00</span>
                      <span className="text-[10px] text-stone-400 mt-3 uppercase tracking-[0.3em] font-bold">Acceso flexible</span>
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#planes" onClick={closeProgram} className="px-10 py-5 bg-white text-brand-800 border border-brand-200 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-50 shadow-md transition-all">
                      Comparar Planes <ArrowRight size={18} />
                    </a>
                    <button onClick={closeProgram} className="px-10 py-5 text-stone-400 font-bold hover:text-stone-600 transition-all">
                      Volver
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex border-b border-stone-100 px-6 shrink-0 bg-stone-50/50 overflow-x-auto no-scrollbar">
                  {[
                    { id: 'intro', label: 'Introducción', icon: BookOpen },
                    { id: 'weeks', label: 'Cronograma Semanal', icon: Calendar },
                    { id: 'tools', label: 'Técnicas Clínicas', icon: Brain },
                    { id: 'nutrition', label: 'Apoyo Nutricional', icon: Leaf }
                  ].map(tab => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-8 py-6 font-bold text-xs uppercase tracking-widest whitespace-nowrap flex items-center gap-3 transition-all relative ${activeTab === tab.id ? 'text-brand-900' : 'text-stone-400 hover:text-brand-500'}`}
                    >
                      <tab.icon size={18} /> {tab.label}
                      {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500 rounded-t-full"></div>}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar bg-white p-8 md:p-16">
                  {activeTab === 'intro' && (
                    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
                      <div className="bg-brand-50/50 p-10 rounded-[3rem] border border-brand-100/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-brand-100 rotate-12"><Sparkles size={80} /></div>
                        <h4 className="text-brand-900 font-serif text-3xl font-bold mb-6 flex items-center gap-4">
                           <Sunrise size={32} className="text-accent-500" />
                           Punto de Partida
                        </h4>
                        <p className="text-stone-700 text-xl leading-relaxed italic font-light">
                          Bienvenido a tu proceso de transformación. Este programa ha sido diseñado para guiarte paso a paso hacia la recuperación de tu equilibrio.
                        </p>
                      </div>
                      
                      <div className="prose prose-stone max-w-none">
                        <h3 className="text-3xl font-serif font-bold text-brand-900 mb-8">Material Técnico Incluido (PDF)</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <p className="font-bold text-brand-800 uppercase tracking-widest text-xs">Documentación Oficial:</p>
                            <ul className="space-y-3">
                              {['Guía clínica completa del programa', 'Cuadernillo de ejercicios diarios', 'Diagnóstico de personalidad especializado', 'Manual de técnicas de relajación'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-stone-600">
                                  <ShieldCheck size={18} className="text-accent-500" /> {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <p className="font-bold text-brand-800 uppercase tracking-widest text-xs">Lectura Sugerida:</p>
                             <ul className="space-y-3">
                              {['Libro de apoyo (Edición Digital)', 'Formato de autoevaluación semanal', 'Guía de nutrición para salud mental', 'Podcast exclusivo de relajación'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-stone-600">
                                  <CheckCircle size={18} className="text-green-500" /> {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'weeks' && (
                    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
                        <div className="grid md:grid-cols-2 gap-6">
                           {[1,2,3,4,5,6,7,8].map(w => (
                              <div key={w} className="p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:border-brand-300 transition-all group">
                                 <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-bold text-brand-500 uppercase tracking-[0.3em]">Semana {w}</span>
                                    <div className="p-2 bg-white rounded-xl text-brand-400 group-hover:text-brand-600 transition-colors"><FileText size={18} /></div>
                                 </div>
                                 <h5 className="font-bold text-brand-900 text-lg mb-2">Objetivo de Sanación {w}</h5>
                                 <p className="text-stone-500 text-sm">Contenido técnico desbloqueado para miembros {isAnnual ? 'Premium' : ''}.</p>
                              </div>
                           ))}
                        </div>
                    </div>
                  )}

                  {activeTab === 'tools' && (
                    <div className="max-w-4xl mx-auto text-center py-20 animate-in zoom-in duration-500">
                       <Palette size={64} className="text-brand-200 mx-auto mb-6" />
                       <h4 className="text-3xl font-serif font-bold text-brand-900 mb-4">Manual de Técnicas Exclusivas</h4>
                       <p className="text-stone-500 max-w-md mx-auto">Técnicas de respiración, visualización y gestión emocional disponibles en tu Kit de Bienvenida.</p>
                       <button onClick={handleDownload} className="mt-8 px-8 py-4 bg-brand-800 text-white rounded-2xl font-bold hover:bg-brand-900 transition-all">Acceder al Manual Completo</button>
                    </div>
                  )}

                  {activeTab === 'nutrition' && (
                    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
                       <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
                          <div className="shrink-0 w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-emerald-500 shadow-sm"><Leaf size={48} /></div>
                          <div>
                             <h4 className="text-2xl font-bold text-emerald-900 mb-2">Guía Nutricional Anti-Estrés</h4>
                             <p className="text-emerald-800/70 leading-relaxed">Tu alimentación influye directamente en tu química cerebral. Hemos incluido un recetario especializado para potenciar tu recuperación.</p>
                          </div>
                       </div>
                    </div>
                  )}
                </div>
              </>
            )}
            
            <div className="bg-stone-50 p-6 md:p-8 text-center border-t border-stone-100 shrink-0">
               <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-4">Comunidad Terapéutica Armonizarte - Centro Especializado en Salud Mental</p>
               <button onClick={closeProgram} className="text-brand-600 hover:text-brand-900 font-extrabold text-xs uppercase tracking-widest transition-colors">
                 Cerrar y Volver al Catálogo
               </button>
            </div>
          </div>
        </div>
      )}

      <CheckoutModal 
        isOpen={!!checkoutData}
        onClose={() => setCheckoutData(null)}
        planName={checkoutData?.name || ''}
        planPrice={checkoutData?.price || ''}
      />
    </section>
  );
};

export default Programs;
