import emailjs from '@emailjs/browser';

export const sendEmail = async (data: { name: string; email: string; message: string }) => {
  try {
    // Usamos las etiquetas exactas que están en tu plantilla de EmailJS
    const templateParams = {
      nombre: data.name,
      email: data.email, 
      mensaje: data.message,
    };

    const response = await emailjs.send(
      'service_gvl6fhs', 
      'wl385cf', 
      templateParams,
      'r4aap4lstVza-plCG'
    );

    console.log("Respuesta de EmailJS:", response.status, response.text);
    return { success: true };
  } catch (error: any) {
    // Esto nos dirá en la consola exactamente qué falló
    console.error("Error al conectar con EmailJS:", error);
    return { success: false };
  }
};