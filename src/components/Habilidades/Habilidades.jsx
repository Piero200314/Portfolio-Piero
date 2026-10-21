import { useState } from "react";
import { technologies } from "../../data/portfolio";
import TechLogo from "../TechLogo";
import "./Habilidades.css";

export default function Habilidades() {
  const [paused, setPaused] = useState(false);
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
        {area === "Todas" && (
          <button className="skills-motion-toggle" aria-pressed={paused}
            onClick={() => setPaused((value) => !value)}>
            {paused ? "Reanudar movimiento" : "Pausar movimiento"}
          </button>
        )}
        <div className={area === "Todas" ? "skills-marquee" : "skills-grid"}>
          {area === "Todas" ? (
            <div className={`skills-track${paused ? " is-paused" : ""}`}>
              {[0, 1].map((copy) => (
                <div className="skills-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {Object.entries(technologies).map(([id, tech]) => (
                    <SkillItem key={id} id={id} tech={tech} />
                  ))}
                </div>
              ))}
            </div>
          ) : Object.entries(technologies)
              .filter(([, tech]) => tech.area === area)
              .map(([id, tech]) => <SkillItem key={id} id={id} tech={tech} />)}
        </div>
        <p className="skills-note">
          También tengo conocimientos básicos de análisis de datos y comprensión
          de machine learning.
        </p>
      </div>
    </section>
  );
}

function SkillItem({ id, tech }) {
  return (
    <article className="skill-item">
      <div className="skill-circle"><TechLogo id={id} /></div>
      <h3>{tech.name}</h3>
      <p>{tech.level}</p>
    </article>
  );
}
