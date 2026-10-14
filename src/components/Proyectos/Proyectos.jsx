import { useState } from "react";
import { projects } from "../../data/portfolio";
import TechLogo from "../TechLogo";
import Icon from "../Icon";
import "./Proyectos.css";

function ProjectVisual({ project }) {
  // Ilustraciones de presentación; sustitúyelas por tus capturas cuando las tengas.
  if (project.image)
    return (
      <img
        className="project-image"
        src={project.image}
        alt={`Captura de ${project.name}`}
        loading="lazy"
      />
    );
  return (
    <div className={`project-visual visual-${project.id}`} aria-hidden="true">
      <span className="visual-label">{project.type}</span>
      {project.id === "appescuela" ? (
        <div className="school-preview">
          <div className="school-title">
            <span>AppEscuela</span>
            <i className="devicon-react-original" />
          </div>
          <div className="school-preview-grid">
            <span>
              Directorio
              <br />
              <b>Alumnos</b>
            </span>
            <span>
              Estado
              <br />
              <b>Matriculado</b>
            </span>
          </div>
        </div>
      ) : project.id === "fitcoach" ? (
        <div className="fit-preview">
          <span className="fit-brand">FITCOACH</span>
          <strong>
            Tu progreso,
            <br />
            más claro.
          </strong>
          <span className="fit-line" />
        </div>
      ) : project.id === "placas" ? (
        <div className="plate-preview">
          <div className="plate-frame">
            <span>ALPR</span>
          </div>
          <span className="plate-scan" />
          <span className="plate-caption">DETECCIÓN · OCR · REGISTRO</span>
        </div>
      ) : (
        <div className="generic-project-preview">
          <Icon name={project.status === "Por hacer" ? "plus" : "code"} />
          <strong>{project.name}</strong>
        </div>
      )}
    </div>
  );
}
export default function Proyectos() {
  const [filter, setFilter] = useState("Todos");
  const options = ["Todos", "Realizado", "En desarrollo", "Por hacer"];
  const displayed = projects.filter(
    (project) => filter === "Todos" || project.status === filter,
  );
  return (
    <section id="proyectos" className="pf-section pf-container">
      <p className="pf-eyebrow">03 / PROYECTOS</p>
      <div className="pf-section-heading reveal">
        <h2>Ideas que toman forma.</h2>
        <p>
          Proyectos realizados, trabajos en desarrollo y espacio para lo que
          viene.
        </p>
      </div>
      <div className="filter-row" aria-label="Filtrar proyectos por estado">
        {options.map((option) => (
          <button
            key={option}
            aria-pressed={filter === option}
            className={filter === option ? "selected" : ""}
            onClick={() => setFilter(option)}
          >
            {option === "Realizado" ? "Realizados" : option}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {displayed.length} proyectos visibles
      </p>
      <div className="projects-grid">
        {displayed.map((project) => (
          <article className="project-card" key={project.id}>
            <ProjectVisual project={project} />
            <div className="project-body">
              <div className="project-meta">
                <span>{project.type}</span>
                <span
                  className={`project-status ${project.status === "Realizado" ? "done" : ""}`}
                >
                  <Icon
                    name={project.status === "Realizado" ? "check" : "clock"}
                  />
                  {project.status}
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.tech.map((id) => (
                  <TechLogo key={id} id={id} label />
                ))}
              </div>
              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Ver proyecto <Icon name="arrow" />
                  </a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <i className="devicon-github-original" aria-hidden="true" />
                    Código
                  </a>
                )}
                {!project.demo && !project.code && (
                  <span>Detalles próximamente</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {displayed.length === 0 && (
        <div className="upcoming-empty">
          <Icon name="plus" />
          <h3>Las próximas ideas empiezan aquí.</h3>
          <p className="empty-label">
            Este espacio reunirá mis proyectos por hacer.
          </p>
        </div>
      )}
      <div className="projects-bottom">
        <span>Cada proyecto es una oportunidad para seguir aprendiendo.</span>
        <a
          href="https://github.com/Piero200314"
          target="_blank"
          rel="noreferrer"
        >
          Explorar GitHub <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
