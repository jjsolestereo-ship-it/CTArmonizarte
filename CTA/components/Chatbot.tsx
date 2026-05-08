import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
    { role: 'bot', content: '¡Hola! Soy el asistente de Armonizarte. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicialización de la IA con la API Key de las variables de entorno
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `
        Eres el asistente virtual de la Comunidad Terapéutica Armonizarte, dirigida por el Dr. Menthor Sánchez en Ecuador.
        Tu objetivo es ser empático, profesional y resolutivo.
        
        INFORMACIÓN CLAVE:
        - Servicios: Psicoterapia, programas de autoayuda, comunidad terapéutica.
        - Precios: Membresía Mensual $20 / Suscripción Permanente $59.
        - Pagos: PayPal en la web o Transferencia al Banco Pichincha (Ahorros #2210518360).
        - Contacto Directo: Si el usuario quiere hablar con un humano, indícale que use el botón verde de WhatsApp.
        
        Responde de forma breve y amable a: ${userMessage}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'bot', content: text }]);
    } catch (error) {
      console.error("Error con Gemini:", error);
      setMessages(prev => [...prev, { role: 'bot', content: 'Lo siento, tuve un problema técnico. ¿Podrías intentar de nuevo o escribirme por WhatsApp?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Ventana de Chat */}
      {isOpen && (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-stone-200 overflow-hidden">
          {/* Cabecera */}
          <div className="bg-orange-600 p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold">Asistente Armonizarte</h3>
              <p className="text-xs opacity-80">En línea ahora</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-orange-700 rounded-full p-1">
              <X size={20} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-tr-none' 
                    : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none shadow-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 size={16} className="animate-spin text-orange-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-stone-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu duda aquí..."
              className="flex-grow p-2 border border-stone-200 rounded-lg focus:outline-none focus:border-orange-50