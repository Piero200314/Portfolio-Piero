import emailjs from "@emailjs/browser";

// Identificadores públicos de EmailJS para el formulario del portafolio.
// No añadir contraseñas ni claves privadas a este archivo.
const EMAILJS_PUBLIC_CONFIG = Object.freeze({
  serviceId: "service_spcyn7q",
  templateId: "template_ahwcspk",
  publicKey: "2Qt4sOpix23dioNsT",
});

export function obtenerConfiguracionEmailJS() {
  return { ...EMAILJS_PUBLIC_CONFIG };
}

export function prepararMensajeContacto(formulario) {
  const params = {
    nombre: formulario.nombre.trim(),
    email: formulario.email.trim(),
    mensaje: formulario.mensaje.trim(),
  };
  if (!params.nombre || !params.mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(params.email)) {
    throw new Error("CONTACT_INVALID");
  }
  if (params.nombre.length > 100 || params.email.length > 150 || params.mensaje.length > 3000) {
    throw new Error("CONTACT_INVALID");
  }
  return params;
}

export async function enviarMensajeContacto(formulario, config = obtenerConfiguracionEmailJS()) {
  const params = prepararMensajeContacto(formulario);
  return emailjs.send(config.serviceId, config.templateId, params, {
    publicKey: config.publicKey,
  });
}
