import { useRef, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { enviarMensajeContacto } from "../services/contactoEmailJS";

const formularioVacio = { nombre: "", email: "", mensaje: "" };
const estiloAlerta = {
  confirmButtonColor: "#007b99",
  background: "#111a2e",
  color: "#ffffff",
};

// Se puede reutilizar en otra página React sin depender del diseño del portafolio.
export default function useContactoEmailJS() {
  const [formulario, setFormulario] = useState(formularioVacio);
  const [cargando, setCargando] = useState(false);
  const [response, setResponse] = useState("");
  const enviando = useRef(false);

  const manejarCambio = (event) => {
    const { name, value } = event.target;
    if (enviando.current || !(name in formularioVacio)) return;
    setFormulario((current) => ({ ...current, [name]: value }));
    setResponse("");
  };

  const manejarEnvio = async (event) => {
    event.preventDefault();
    if (enviando.current) return;
    if (!event.currentTarget.reportValidity()) return;
    enviando.current = true;
    setCargando(true);
    setResponse("Enviando tu mensaje...");
    try {
      await enviarMensajeContacto(formulario);
      setFormulario(formularioVacio);
      setResponse("Tu mensaje fue enviado correctamente.");
      await Swal.fire({
        ...estiloAlerta,
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarme. Te responderé a la brevedad.",
        icon: "success",
        confirmButtonText: "Entendido",
      });
    } catch (error) {
      let message = "No se pudo enviar tu mensaje. Tus datos siguen en el formulario para que puedas intentarlo nuevamente.";
      if (error?.message === "EMAILJS_NOT_CONFIGURED") {
        message = "El formulario no está disponible en este momento. Puedes contactarme por mis redes sociales.";
      } else if (error?.message === "CONTACT_INVALID") {
        message = "Revisa tu nombre, correo y mensaje. Los campos no pueden contener solo espacios.";
      }
      setResponse(message);
      await Swal.fire({
        ...estiloAlerta,
        title: "No se envió el mensaje",
        text: message,
        icon: "error",
        confirmButtonText: "Volver al formulario",
      });
    } finally {
      setCargando(false);
      enviando.current = false;
    }
  };

  return { formulario, cargando, response, manejarCambio, manejarEnvio };
}
