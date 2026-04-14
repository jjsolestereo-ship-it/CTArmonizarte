import { Resend } from 'resend';

// Inicializa Resend con tu API KEY desde Vercel (NO hardcodear)
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { name, email, message } = req.body;

    // Validación básica
    if (!email) {
      return res.status(400).json({ error: 'Email requerido' });
    }

    // Envío del correo
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // luego lo cambiamos por tu dominio
      to: 'ctarmonizarte@gmail.com',
      subject: 'Nuevo contacto desde la web',
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${name || 'No especificado'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message || 'Suscripción al newsletter'}</p>
      `,
    });

    return res.status(200).json({ success: true, response });

  } catch (error) {
    console.error('ERROR:', error);
    return res.status(500).json({ error: 'Error enviando correo' });
  }
}