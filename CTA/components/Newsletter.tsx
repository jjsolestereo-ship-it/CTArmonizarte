"use client";

import React, { useState } from "react";
// Verifica que esta ruta sea correcta según tu estructura de carpetas
import { sendEmail } from "./Api/send-email";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Si los campos están vacíos, no hacemos nada
    if (!email || !name) return;

    setStatus("loading");
    console.log("Iniciando envío para:", name, email);

    try {
      const result = await sendEmail({
        name: name,
        email: email,
        message: "Nueva suscripción desde el sitio web CTArmonizarte",
      });

      if (result.success) {
        setStatus("success");
        setEmail("");
        setName("");
        console.log("¡Envío exitoso detectado por el componente!");
      } else {
        setStatus("error");
        console.log("El envío falló en la función sendEmail");
      }
    } catch (err) {
      console.error("Error crítico en el formulario:", err);
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Suscríbete a nuestro Newsletter</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="px-6 py-3 rounded-full border border-gray-300 text-black w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="tu@email.com"
            className="px-6 py-3 rounded-full border border-gray-300 text-black w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold disabled:opacity-50 transition-all"
          >
            {status === "loading" ? "Procesando..." : "Suscribirme"}
          </button>
          
          {status === "success" && (
            <div className="bg-green-100 p-4 rounded-lg mt-4 border border-green-200">
               <p className="text-green-700 font-bold">¡Mensaje Enviado!</p>
               <p className="text-green-600 text-sm">Revisa tu bandeja de entrada de CTArmonizarte.</p>
            </div>
          )}
          
          {status === "error" && (
            <div className="bg-red-100 p-4 rounded-lg mt-4 border border-red-200">
              <p className="text-red-600 font-bold">Error de conexión.</p>
              <p className="text-red-500 text-sm">Intenta recargar la página (F5).</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;