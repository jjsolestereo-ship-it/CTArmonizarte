import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Programs from "./components/Programs";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";
import CrisisFloatingAction from "./components/CrisisFloatingAction";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-stone-50 selection:bg-brand-200 selection:text-brand-900">
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
      
      {/* Floating Action Elements */}
      <div className="z-50">
        <Chatbot />
        <WhatsAppButton />
        <CrisisFloatingAction />
      </div>
    </div>
  );
};

export default App;