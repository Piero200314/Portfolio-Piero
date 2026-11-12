import { profile } from "../../data/portfolio";
import Icon from "../Icon";
import "./Perfil.css";

export default function Perfil() {
  return (
    <section id="sobre-mi" className="pf-section pf-container reveal">
      <p className="pf-eyebrow">01 / PRESENTACIÓN</p>
      <div className="about-grid">
        <div className="about-heading">
          <h2>
            Del diseño al código.
            <br />
            <span>Una visión integral.</span>
          </h2>

        </div>
        <figure className="about-portrait"><img src={profile.photo} alt="Piero Huamani, estudiante de Ingeniería de Software e Inteligencia Artificial" loading="lazy" width="1254" height="1254"/><figcaption><strong>Piero Huamani</strong><span>Ingeniería de Software e IA · SENATI</span></figcaption></figure>
        <div className="about-copy">
          <p className="about-intro">
            Diseño interfaces y desarrollo las funciones que les dan vida.
          </p>
          <p>
            Mi trabajo conecta la parte visual de una aplicación con su lógica y sus datos.
            Diseño pantallas en Figma, construyo componentes y conecto interfaces con APIs
            y bases de datos para dar forma a flujos completos.
          </p>
          <p>
            En los proyectos en equipo he participado tanto en diseño y frontend como
            en modelos y acceso a datos. Esa experiencia me ayuda a entender cómo se
            relacionan las distintas partes de un sistema y a colaborar en su integración.
          </p>
          <a href="#proyectos" className="about-link">
            Conoce mi trabajo <Icon name="arrow" />
          </a>
          <div className="about-areas">
            <span>
              <Icon name="code" />
              Desarrollo web
            </span>
            <span>
              <i className="devicon-figma-plain" aria-hidden="true" />
              Diseño UX/UI
            </span>
            <span>
              <i className="devicon-python-plain" aria-hidden="true" />
              Visión artificial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
