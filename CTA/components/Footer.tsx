import React from 'react';
import { MapPin, Phone, Mail, BarChart3 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-stone-600 rounded-full bg-stone-800">
                 <span className="font-serif font-bold text-white text-lg">CTA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-xl">Armonizarte</span>
                <span className="text-[9px] uppercase tracking-wider text-stone-500">Comunidad Terapéutica</span>
              </div>
            </div>
            <p className="text-sm text-stone-400">
              Restaurando el equilibrio emocional y social con un enfoque profesional y humano.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif font-semibold mb-4">Explorar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
              <li className="pt-4 border-t border-stone-800 mt-4">
                <a href="https://lookerstudio.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-400 font-bold">
                  <BarChart3 size={16} /> Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 shrink-0" />
                <span>Quito. La Merced L 16<br/><span className="text-stone-500 text-xs">Pichincha, Ecuador</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500" />
                <span>(+593) 98 081 9319</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500" />
                <span>ctarmonizarte@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="h-44 rounded-xl border border-stone-700 bg-stone-800 flex items-center justify-center p-4 text-center">
            <span className="text-xs text-stone-500 italic">Ubicación: Sector La Merced, Valle de los Chillos</span>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Armonizarte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;