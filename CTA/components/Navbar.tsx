
import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Sparkles, UserCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [planType, setPlanType] = useState('');

  const checkSubscription = () => {
    const sub = localStorage.getItem('armonizarte_subscription');
    // Consideramos suscripción si es cualquier plan excepto el gratuito o vacío
    setHasSubscription(!!sub && sub !== 'Comunidad Abierta' && sub !== '');
    setPlanType(sub || '');
  };

  useEffect(() => {
    checkSubscription();
    
    // Escuchamos cambios locales y de otras pestañas
    window.addEventListener('subscriptionUpdated', checkSubscription);
    window.addEventListener('storage', checkSubscription);
    
    return () => {
      window.removeEventListener('subscriptionUpdated', checkSubscription);
      window.removeEventListener('storage', checkSubscription);
    };
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Planes', href: '#planes' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const isAnnual = planType === 'Plan Anual Premium';

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-stone-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-brand-50 to-white rounded-full border border-brand-100 shadow-sm overflow-hidden group-hover:shadow-md transition-all duration-300">
              <div className="absolute w-10 h-10 border border-accent-400/30 rounded-full"></div>
              <span className="font-serif font-bold text-brand-900 text-xl tracking-tighter leading-none z-10 pt-1">
                CTA
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xl tracking-tight text-brand-900 leading-none">
                  Armonizarte
                </span>
                {hasSubscription && (
                  <span className={`${isAnnual ? 'bg-amber-500' : 'bg-accent-500'} text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-1 animate-pulse shadow-sm`}>
                    <Crown size={8} /> {isAnnual ? 'ANNUAL PREMIUM' : 'PREMIUM'}
                  </span>
                )}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-600 font-medium">
                Comunidad Terapéutica
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-brand-700 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            
            {hasSubscription ? (
              <div className="flex items-center gap-3 pl-6 border-l border-stone-200">
                <div className={`w-10 h-10 rounded-full ${isAnnual ? 'bg-amber-100 text-amber-700' : 'bg-brand-100 text-brand-700'} flex items-center justify-center shadow-inner`}>
                  {isAnnual ? <Crown size={18} /> : <UserCheck size={18} />}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-brand-900 leading-none">Socio Activo</span>
                  <span className={`text-[9px] ${isAnnual ? 'text-amber-600' : 'text-accent-600'} font-bold uppercase tracking-tighter mt-1`}>
                    {planType.replace('Plan ', '')}
                  </span>
                </div>
              </div>
            ) : (
              <a href="#planes" className="bg-brand-800 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-900 transition-all shadow-md">
                Unirme
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-brand-700 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-base font-bold text-stone-600 hover:text-brand-700 hover:bg-stone-50 rounded-2xl"
              >
                {link.name}
              </a>
            ))}
            {hasSubscription && (
               <div className="mt-6 p-4 bg-brand-50 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-600 shadow-sm">
                    <Crown size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-900">Estatus: {planType}</p>
                    <p className="text-[10px] text-brand-600 uppercase tracking-widest font-bold">Membresía Activa</p>
                  </div>
               </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
