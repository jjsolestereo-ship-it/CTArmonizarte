import React from "react";
// Importación de componentes
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
import CrisisFloatingAction from "./components/CrisisFloatingAction";

const App: React.FC = () => {
  return (
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
      <WhatsAppButton />
      <CrisisFloatingAction />
    </div>
  );
};

export default App;