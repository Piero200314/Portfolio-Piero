import emailjs from "@emailjs/browser";

// Estas variables son públicas en Vite. No colocar contraseñas ni claves privadas.
export function obtenerConfiguracionEmailJS(env = import.meta.env ?? {}) {
  const config = {
    serviceId: env.VITE_EMAILJS_SERVICE_ID?.trim(),
    templateId: env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
    publicKey: env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
  };
  if (Object.values(config).some((value) => !value || value.startsWith("REEMPLAZAR_"))) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }
  return config;
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
