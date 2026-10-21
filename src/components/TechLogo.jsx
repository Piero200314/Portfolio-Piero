import { technologies, projectTechnologies } from "../data/portfolio";

export default function TechLogo({ id, label = false }) {
  const tech = technologies[id] || projectTechnologies[id];
  if (!tech) return null;
  return (
    <span className="tech-logo" title={tech.name}>
      <i className={`${tech.icon} colored`} aria-hidden="true" />
      {label ? (
        <span>{tech.name}</span>
      ) : (
        <span className="sr-only">{tech.name}</span>
      )}
    </span>
  );
}
