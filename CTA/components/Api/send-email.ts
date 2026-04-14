import { Resend } from 'resend';

// Acceso a la API KEY configurada en tu archivo .env
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: EmailData) => {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'tu-correo@ejemplo.com', // <-- Cambia esto por tu correo real
      subject: `Nuevo mensaje de ${formData.name}`,
      html: `
        <p>Has recibido un nuevo mensaje:</p>
        <p><strong>Nombre:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mensaje:</strong> ${formData.message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return { success: false, error };
  }
};