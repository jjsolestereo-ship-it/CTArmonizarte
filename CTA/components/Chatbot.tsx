import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Bienvenido a Armonizarte. Soy tu asistente virtual. ¿En qué puedo ayudarte hoy en tu camino de bienestar?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulación de respuesta automática del Bot
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Gracias por tu mensaje. Un especialista de nuestro equipo se comunicará contigo lo antes posible para brindarte una atención personalizada.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Botón flotante para abrir el Chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-24 bg-orange-400 text-white p-3.5 rounded-full shadow-lg hover:bg-orange-500 transition-all duration-300 z-50 hover:scale-110 flex items-center justify-center"
          aria-label="Abrir chat de soporte"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Ventana del Chatbot */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Cabecera */}
          <div className="p-4 bg-stone-900 text-white rounded-t-2xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Asistente Armonizarte</h4>
                <p className="text-[10px] text-stone-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span> En línea
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cuerpo de mensajes */}
          <div className="flex-grow p-4 overflow-y-auto bg-stone-50 space-y-3.5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-orange-400 text-white rounded-tr-none'
                      : 'bg-white text-stone-800 border border-stone-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input de texto inferior */}
          <div className="p-3 bg-white rounded-b-2xl border-t border-stone-100 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu duda aquí..."
              className="flex-grow p-2 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-orange-400 transition-colors"
            />
            <button
              onClick={handleSend}
              className="bg-stone-900 text-white p-2 rounded-xl hover:bg-orange-400 transition-colors flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Chatbot;