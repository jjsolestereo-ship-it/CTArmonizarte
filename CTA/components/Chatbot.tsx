
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Minimize2, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hola, soy el asistente virtual de Armonizarte. 🌿 Puedo responder tus dudas sobre programas y terapias. Si prefieres hablar con un humano, puedes escribirnos directamente al WhatsApp +593 980819319. ¿En qué te ayudo hoy?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const SYSTEM_INSTRUCTION = `
    Eres el asistente virtual empático y profesional de "Armonizarte", una comunidad terapéutica de salud mental.
    
    INFORMACIÓN DE CONTACTO (MUY IMPORTANTE):
    - WhatsApp Oficial / Contacto Humano: +593 980819319. Si el usuario pide hablar con una persona, agendar una cita real o precios personalizados, dale este enlace: https://wa.me/593980819319.
    
    TUS CONOCIMIENTOS:
    1. Servicios: Depresión, Ansiedad, Estrés Laboral/Burnout, Alcoholismo/Adicciones, Duelos, Obesidad, Higiene del Sueño, Violencia Familiar.
    2. Planes de Membresía (Precios Actualizados):
       - Comunidad Abierta (Gratis): Blog, foro, boletín, recursos PDF básicos.
       - Mensual ($10 USD): Incluye 1 programa de autoayuda por mes, 1 sesión grupal moderada al mes, material descargable, seguimiento y evaluación.
       - Anual Premium ($79.90 USD): Incluye TODOS los programas de autoayuda, 1 sesión grupal moderada al mes, material descargable, 2 sesiones individuales, seguimiento personalizado y evaluación.
    
    PROTOCOLO CRÍTICO DE CRISIS (PRIORIDAD MÁXIMA):
    Si el usuario expresa intenciones de suicidio, autolesión, violencia doméstica inminente, o dice palabras como "matarme", "morir", "peligro", "golpes", "auxilio", "ayuda urgente":
    1. DEBES INTERRUMPIR cualquier explicación comercial.
    2. Responde con un mensaje corto, directo y compasivo instando a buscar ayuda inmediata.
    3. Diles explícitamente: "Por favor, llama al 911 o a tu servicio de emergencias local inmediatamente. También puedes contactar directamente a nuestros profesionales por WhatsApp."
    
    ESTILO DE RESPUESTA:
    - Sé conciso (máximo 3-4 oraciones) a menos que se pida detalle.
    - Usa un tono relajante, cálido y acogedor ("Te entiendo", "Es un paso valiente").
    - Invita sutilmente a revisar la sección de Servicios o Planes si la pregunta es general.
    - Nunca diagnostiques médicamente.
  `;

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputText('');
    setIsLoading(true);

    try {
      // Initialize the GoogleGenAI client using the API key from environment variables as required
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct conversation history for the model
      // We limit context to last 10 messages to save tokens and keep context fresh
      const historyContext = messages.slice(-10).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      // Create a chat session with the appropriate Gemini 3 model for this task
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7, // Balanced creativity and precision
        },
        history: historyContext
      });

      // Send the message and extract the generated text directly from the response object
      const result = await chat.sendMessage({ message: userMsg });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Error communicating with Gemini:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, tuve un problema técnico momentáneo. Por favor, contáctanos por WhatsApp o llama al 911 si es una emergencia.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-24 z-40 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300 origin-bottom-right" style={{ height: '500px', maxHeight: '80vh' }}>
          
          {/* Header */}
          <div className="bg-brand-700 p-4 flex justify-between items-center text-white shadow-md z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-full">
                <Sparkles size={16} className="text-brand-100" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Asistente Armonizarte</h3>
                <p className="text-xs text-brand-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  En línea
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors" title="Minimizar">
                <Minimize2 size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-tr-none' 
                      : 'bg-white text-stone-700 border border-stone-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-stone-100 shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-brand-500" />
                  <span className="text-xs text-stone-400">Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-stone-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
            <button 
              type="submit" 
              disabled={isLoading || !inputText.trim()}
              className="bg-brand-600 hover:bg-brand-700 disabled:bg-stone-300 text-white p-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
          
          <div className="bg-stone-100 px-4 py-1 text-center">
            <p className="text-[10px] text-stone-400">
              La IA puede cometer errores. En caso de crisis, llama al 911.
            </p>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-white hover:bg-stone-50 text-brand-700 p-3.5 rounded-full shadow-lg border border-stone-100 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Abrir chat de ayuda"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
          <MessageSquare size={24} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ¿Dudas? Chatea con IA aquí
          </span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
