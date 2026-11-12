import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Perfil from "./components/Perfil/Perfil";
import Habilidades from "./components/Habilidades/Habilidades";
import Proyectos from "./components/Proyectos/Proyectos";
import Certificados from "./components/Certificados/Certificados";
import Contacto from "./components/Contacto/Contacto";
import useReveal from "./hooks/useReveal";
import "./App.css";
import "./neon.css";
import "./redesign.css";

const portfolioYear = new Date().getFullYear();

export default function App() {
  const [motionPaused, setMotionPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useReveal();
  return (
    <div data-motion={motionPaused ? "paused" : "running"}>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Banner paused={motionPaused} setPaused={setMotionPaused} />
        <Perfil />
        <Habilidades globalPaused={motionPaused} />
        <Proyectos paused={motionPaused} />
        <Certificados />
        <Contacto />
      </main>
      <footer className="professional-footer">
        <div className="pf-container footer-columns">
          <div><a className="footer-brand" href="#inicio">PRHB<span>.</span></a><h3>Piero Huamani</h3><p>Estudiante de Ingeniería de Software e Inteligencia Artificial en SENATI.</p><p>Lima, Perú · Desarrollo web y diseño UX/UI</p></div>
          <div><h3>Áreas de trabajo</h3><a href="#proyectos">Desarrollo full stack</a><a href="#proyectos">Aplicaciones Android</a><a href="#proyectos">Diseño de interfaces UX/UI</a><a href="#certificados">Formación y certificaciones</a></div>
          <div><h3>Conectemos</h3><p>Consultas sobre mis proyectos, prácticas y colaboraciones.</p><a href="https://github.com/Piero200314" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/pieror-huamanib-82b825336/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#contacto">Escríbeme →</a></div>
        </div>
        <div className="pf-container footer-base"><span>© {portfolioYear} Piero Huamani</span><span>Software · Diseño · Aprendizaje continuo</span><a href="#inicio">Volver al inicio ↑</a></div>
      </footer>
      <details className="privacy-details"><summary>Privacidad y datos del formulario</summary><p>Este portfolio no incorpora analítica ni establece cookies propias o almacenamiento persistente para visitantes. El formulario envía nombre, correo y mensaje mediante EmailJS únicamente para gestionar tu consulta. No incluyas contraseñas ni datos sensibles. Los enlaces a plataformas externas tienen sus propias políticas de privacidad.</p></details>
    </div>
  );
}
