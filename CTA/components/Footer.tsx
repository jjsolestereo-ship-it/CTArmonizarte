import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, BarChart3 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
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
              Restaurando el equilibrio emocional y social a través de un enfoque humano y profesional.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
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

          {/* Columna 3: Contacto ACTUALIZADO */}
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

          {/* Columna 4: Mapa */}
          <div className="h-44 rounded-xl overflow-hidden bg-stone-800 border border-stone-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7432!2d-78.48!3d-0.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTAnNDguMCJTIDc4wrAyOC'NDguMCJX!5e0!3m2!1ses!2sec!4v1620000000000!5m2!1ses!2sec"
              className="w-full h-full border-0 grayscale"
              allowFullScreen
              loading="lazy"
            ></iframe>
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