import { useEffect, useRef } from "react";
import TechLogo from "../TechLogo";
import ParkingDemo from "./ParkingDemo";
import ProjectTour from "./ProjectTour";
import { projectCaseStudies, projectShowcase } from "../../data/portfolio";

export default function ProjectDetails({ project, onClose, paused = false }) {
  const dialogRef = useRef(null);
  const study = projectCaseStudies[project.id];
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="project-dialog-content">
        <header>
          <div><span className="project-dialog-eyebrow">{project.type} · {projectShowcase[project.id]?.delivery || project.status}</span><h2 id="project-dialog-title">{project.name}</h2></div>
          <button type="button" className="project-dialog-close" onClick={onClose} aria-label="Cerrar detalles del proyecto" autoFocus>✕</button>
        </header>
        {project.id === "parksense" && <ParkingDemo paused={paused} />}
        <ProjectTour project={project} paused={paused} />
        {study && <div className="case-columns"><div><h3>El problema</h3><p>{study.problem}</p></div><div><h3>La solución</h3><p>{study.solution}</p></div><div><h3>Mi aporte</h3><p>{study.contribution}</p></div></div>}
        {projectShowcase[project.id] && <section className="project-evidence"><h3>Resultados y alcance</h3><p>{projectShowcase[project.id].access}</p><ul>{projectShowcase[project.id].results.map(result => <li key={result}>{result}</li>)}</ul></section>}
        <h3>Participación y alcance</h3>
        <p className="project-dialog-role">{project.role}</p>
        {project.contribution && <p>{project.contribution}</p>}
        <h3>Cómo funciona</h3>
        <p>{project.overview}</p>
        <h3>Qué hace este proyecto</h3>
        <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="project-dialog-tech">{project.tech.map((id) => <TechLogo id={id} key={id} label />)}</div>
        {project.note && <p className="project-dialog-note">{project.note}</p>}
        <footer>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="pf-button">{project.demoLabel || "Ver proyecto"} ↗</a>}
          {project.code && <a href={project.code} target="_blank" rel="noreferrer" className="pf-button secondary">Ver código ↗</a>}
        </footer>
      </div>
    </dialog>
  );
}
