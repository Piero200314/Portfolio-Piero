import { useState } from "react";
import { technologies } from "../../data/portfolio";
import TechLogo from "../TechLogo";
import "./Habilidades.css";

export default function Habilidades() {
  const [area, setArea] = useState("Todas");
  const areas = ["Todas", "Web", "Diseño", "Software", "Herramientas"];
  return (
    <section id="tech-stack" className="skills-section pf-section">
      <div className="pf-container">
        <p className="pf-eyebrow">02 / HABILIDADES Y HERRAMIENTAS</p>
        <div className="pf-section-heading reveal">
          <h2>Mi caja de herramientas.</h2>
          <p>
            Tecnologías que utilizo y sigo aprendiendo para diseñar y construir.
          </p>
        </div>
        <div className="filter-row" aria-label="Filtrar habilidades">
          {areas.map((item) => (
            <button
              key={item}
              aria-pressed={area === item}
              className={area === item ? "selected" : ""}
              onClick={() => setArea(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {Object.entries(technologies)
            .filter(([, tech]) => area === "Todas" || tech.area === area)
            .map(([id, tech]) => (
              <article className="skill-item" key={id}>
                <div className="skill-circle">
                  <TechLogo id={id} />
                </div>
                <h3>{tech.name}</h3>
                <p>{tech.level}</p>
              </article>
            ))}
        </div>
        <p className="skills-note">
          También tengo conocimientos básicos de análisis de datos y comprensión
          de machine learning.
        </p>
      </div>
    </section>
  );
}
