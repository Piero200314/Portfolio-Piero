import { useEffect, useRef } from "react";
import TechLogo from "../TechLogo";

export default function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);
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
          <div><span className="project-dialog-eyebrow">{project.type} · {project.status}</span><h2 id="project-dialog-title">{project.name}</h2></div>
          <button type="button" className="project-dialog-close" onClick={onClose} aria-label="Cerrar detalles del proyecto" autoFocus>✕</button>
        </header>
        {project.image && <img className="project-dialog-image" src={project.image} alt={project.imageAlt || project.name} />}
        <p className="project-dialog-role">{project.role}</p>
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
