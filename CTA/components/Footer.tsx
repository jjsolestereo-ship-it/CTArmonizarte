
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, BarChart3, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center border border-stone-600 rounded-full bg-stone-800">
                 <span className="font-serif font-bold text-white text-lg tracking-tighter pt-0.5">CTA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-xl leading-none">Armonizarte</span>
                <span className="text-[9px] uppercase tracking-wider text-stone-500">Comunidad Terapéutica</span>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              Somos una comunidad terapéutica dedicada a restaurar el equilibrio emocional, mental, fisico y social de nuestros pacientes a través de un enfoque humano y profesional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-4 text-lg">Explorar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-brand-400 transition-colors">Servicios Terapéuticos</a></li>
              <li><a href="#planes" className="hover:text-brand-400 transition-colors">Planes y Membresías</a></li>
              <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Nuestro Equipo</a></li>
              <li><a href="#blog" className="hover:text-brand-400 transition-colors">Blog de Bienestar</a></li>
              <li className="pt-4 border-t border-stone-800 mt-4">
                <a 
                  href="https://lookerstudio.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-400 hover:text-accent-300 font-bold transition-colors group"
                >
                  <BarChart3 size={16} /> 
                  Dashboard de Analíticas
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-4 text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 mt-0.5 shrink-0" />
                <span>Platón y Rutherford<br/><span className="text-stone-500 text-xs">Ambato, Tungurahua, Ecuador</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <span>(+593) 98 081 9319</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <span>ctarmonizarte@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Map (Interactive) */}
          <div className="h-48 rounded-xl overflow-hidden bg-stone-800 relative shadow-lg border border-stone-700">
            <iframe 
              src="https://maps.google.com/maps?q=Plat%C3%B3n+y+Rutherford,+Ambato,+Tungurahua,+Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Armonizarte"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>© 2024 Armonizarte. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Aviso Legal</a>
            <a href="#" className="hover:text-stone-300">Privacidad</a>
            <a href="#" className="hover:text-stone-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
