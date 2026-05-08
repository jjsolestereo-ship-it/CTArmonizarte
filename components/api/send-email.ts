import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ctarmonizarte@gmail.com',
      subject: 'Nuevo mensaje desde la web',
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error enviando correo' });
  }
}