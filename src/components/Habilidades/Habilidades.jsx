import { useEffect, useRef, useState } from "react";
import { technologies } from "../../data/portfolio";
import TechLogo from "../TechLogo";
import "./Habilidades.css";

export default function Habilidades({ globalPaused = false }) {
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [area, setArea] = useState("Todas");
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  useEffect(() => {
    const track = trackRef.current;
    if (!track || area !== "Todas") return;
    let frame, last = 0, visible = true;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(track.parentElement);
    function advance(now) {
      frame = requestAnimationFrame(advance);
      const elapsed = last ? Math.min((now - last) / 1000, .1) : 0;
      last = now;
      if (paused || globalPaused || document.hidden || !visible) return;
      const width = track.firstElementChild?.getBoundingClientRect().width || 0;
      if (!width) return;
      positionRef.current = (positionRef.current + elapsed * 55) % width;
      track.style.transform = `translate3d(${-positionRef.current}px,0,0)`;
    }
    frame = requestAnimationFrame(advance);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [area, paused, globalPaused]);
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
            <div ref={trackRef} className={`skills-track${(paused || globalPaused) ? " is-paused" : ""}`}>
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
