import { useState } from "react";
import FondoEspacial from "../FondoEspacial/FondoEspacial";
import TechLogo from "../TechLogo";
import Icon from "../Icon";
import "./Banner.css";

export default function Banner() {
  const [paused, setPaused] = useState(false);
  return (
    <section id="inicio" className="hero-section">
      <FondoEspacial paused={paused} />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content pf-container">
        <p className="hero-label">
          <span /> DESARROLLO DE SOFTWARE · UX/UI
        </p>
        <h1>
          Piero
          <br />
          <span>Huamani</span>
          <span className="sr-only"> Portfolio</span>
        </h1>
        <p className="hero-description">
          Diseño y código para convertir
          <br className="desktop-break" /> ideas en experiencias digitales.
        </p>
        <div className="hero-actions">
          <a href="#proyectos" className="pf-button">
            Ver proyectos <Icon name="arrow" />
          </a>
          <a href="#sobre-mi" className="pf-button secondary">
            Conocerme <Icon name="down" />
          </a>
        </div>
        <div className="hero-technologies" aria-label="Tecnologías destacadas">
          {["html", "css", "javascript", "react", "figma", "python"].map(
            (id) => (
              <TechLogo id={id} key={id} />
            ),
          )}
        </div>
      </div>
      <div className="hero-bottom pf-container">
        <span>LIMA, PERÚ</span>
        <a href="#sobre-mi" className="hero-scroll">
          EXPLORA MI TRABAJO <Icon name="down" />
        </a>
        <button
          className="motion-toggle"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
        >
          <Icon name={paused ? "play" : "pause"} />
          {paused ? "Reanudar fondo" : "Pausar fondo"}
        </button>
      </div>
    </section>
  );
}
