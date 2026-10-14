import { useState } from "react";
import { profile } from "../../data/portfolio";
import Icon from "../Icon";
import "./Contacto.css";

export default function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [response, setResponse] = useState("");
  const manejarCambio = (event) => {
    const { name, value } = event.target;
    setFormulario((current) => ({ ...current, [name]: value }));
    setResponse("");
  };
  const manejarEnvio = (event) => {
    event.preventDefault();
    if (!formulario.nombre.trim() || !formulario.mensaje.trim()) {
      setResponse("Completa tu nombre y mensaje.");
      return;
    }
    setResponse(
      `Gracias, ${formulario.nombre.trim()}. La prueba del formulario fue correcta. El mensaje no se ha enviado.`,
    );
    setFormulario({ nombre: "", email: "", mensaje: "" });
  };
  return (
    <section id="contacto" className="pf-section pf-container">
      <p className="pf-eyebrow">05 / CONTACTO</p>
      <div className="contact-grid">
        <div className="contact-copy reveal">
          <h2>
            ¿Creamos
            <br />
            <span>algo juntos?</span>
          </h2>
          <p>
            Me interesan las ideas que combinan diseño y tecnología. Conoce mis
            proyectos o conecta conmigo para conversar.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="contact-social"
          >
            <i className="devicon-github-original" aria-hidden="true" />
            <span>
              Encuéntrame en GitHub
              <br />
              <small>@Piero200314</small>
            </span>
            <Icon name="arrow" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-social contact-linkedin">
            <i className="devicon-linkedin-plain" aria-hidden="true" />
            <span>Conecta conmigo en LinkedIn<br /><small>Piero Huamani</small></span>
            <Icon name="arrow" />
          </a>
          <div className="contact-location">
            <span /> Lima, Perú
          </div>
        </div>
        <form className="contact-form" onSubmit={manejarEnvio}>
          <p className="contact-form-label">
            <Icon name="mail" /> Escribe tu mensaje
          </p>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder="Tu nombre"
            autoComplete="name"
            maxLength={100}
            required
          />
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formulario.email}
            onChange={manejarCambio}
            placeholder="tu@correo.com"
            autoComplete="email"
            maxLength={150}
            required
          />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
            placeholder="Cuéntame sobre tu idea…"
            rows={4}
            maxLength={3000}
            required
          />
          <button type="submit" className="pf-button">
            Probar formulario <Icon name="arrow" />
          </button>
          <p className="form-notice">
            Formulario de demostración. Los mensajes no se envían.
          </p>
          <p className="form-response" role="status">
            {response}
          </p>
        </form>
      </div>
    </section>
  );
}
