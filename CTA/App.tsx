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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Programs />
      <Team />
      <Pricing />
      <Blog />
      <Newsletter />
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}

export default App;