import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Minimize2, Loader2, Sparkles, X } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'Hola, soy el asistente virtual de Armonizarte. 🌿 ¿En qué puedo ayudarte hoy? Puedo informarte sobre nuestras membresías, darte los datos para transferencia bancaria o conectarte con el Dr. Menthor.' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText.trim();
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Usamos la API Key configurada en tu .env
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Actúa como el asistente de la Comunidad Terapéutica Armonizarte. El director es el Dr. Menthor Sanchez. Ofrecemos dos planes: Membresía Mensual ($20) y Suscripción Permanente ($59). Si piden datos bancarios, dales estos: Banco Pichincha, Cuenta de Ahorros 2210518360. Si quieren hablar con un humano, diles que usen el botón de WhatsApp. Sé amable, profesional y breve." }],
          },
          {
            role: "model",
            parts: [{ text: "Entendido. Soy el asistente oficial de Armonizarte y estoy listo para ayudar con información de planes, pagos y servicios del Dr. Menthor Sanchez." }],
          },
        ],
      });

      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Error en Chatbot:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, tuve un pequeño problema técnico. ¿Podrías intentar escribirme de nuevo o contactarnos por WhatsApp?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col border border-stone-200 max-h-[500px]">
          {/* Header */}
          <div className="bg-orange-600 p-4 rounded-t-2xl flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={20} />
              <span className="font-bold">Asistente Armonizarte</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-orange-700 p-1 rounded">
              <Minimize2 size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-orange-600 text-white' : 'bg-stone-100 text-stone-800'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-100 p-3 rounded-2xl text-stone-500 italic text-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" /> Escribiendo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu duda aquí..."
                className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-transform hover:scale-110 flex items-center gap-2"
        >
          <MessageSquare size={24} />
          <span className="hidden md:inline font-medium text-sm">¿Dudas? Chatea conmigo</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;