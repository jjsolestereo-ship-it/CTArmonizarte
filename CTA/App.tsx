import React from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Programs from "./components/Programs";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./components/Chatbot"; // Agregamos el Chatbot

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
      <div className="min-h-screen font-sans text-stone-800 bg-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Programs />
          <Team />
          <Pricing />
          <Blog />
          <Newsletter />
        </main>
        <Footer />
        <Chatbot /> {/* El asistente inteligente */}
        <WhatsAppButton /> {/* El botón de WhatsApp directo */}
      </div>
    </PayPalScriptProvider>
  );
}

export default App;