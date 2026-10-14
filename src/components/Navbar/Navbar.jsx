import { useEffect, useState } from "react";
import Icon from "../Icon";
import { profile } from "../../data/portfolio";
import "./Navbar.css";

const links = [
  ["#sobre-mi", "Perfil"],
  ["#tech-stack", "Skills"],
  ["#proyectos", "Proyectos"],
  ["#certificados", "Certificados"],
  ["#contacto", "Contacto"],
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(
              entry.target.id === "inicio" ? "" : `#${entry.target.id}`,
            );
        });
      },
      { rootMargin: "-18% 0px -55% 0px", threshold: 0 },
    );
    links.forEach(([id]) => {
      const section = document.querySelector(id);
      if (section) observer.observe(section);
    });
    const inicio = document.getElementById("inicio");
    if (inicio) observer.observe(inicio);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", close);
    const media = window.matchMedia("(min-width: 861px)");
    const reset = () => {
      if (media.matches) setIsOpen(false);
    };
    media.addEventListener("change", reset);
    return () => {
      window.removeEventListener("keydown", close);
      media.removeEventListener("change", reset);
    };
  }, []);
  return (
    <header className="portfolio-header">
      <nav
        className="portfolio-nav pf-container"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="wordmark"
          aria-label="Piero Huamani Inicio"
          onClick={() => setIsOpen(false)}
        >
          piero<span>.</span>
        </a>
        <div
          id="portfolio-menu"
          className={`portfolio-links ${isOpen ? "is-open" : ""}`}
        >
          {links.map(([href, text]) => (
            <a
              key={href}
              href={href}
              className={active === href ? "active" : ""}
              aria-current={active === href ? "location" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {text}
            </a>
          ))}
        </div>
        <a
          className="nav-github"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Ver mi GitHub"
        >
          <i className="devicon-github-original" aria-hidden="true" />
        </a>
        <a className="nav-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Ver mi LinkedIn">
          <i className="devicon-linkedin-plain" aria-hidden="true" />
        </a>
        <button
          className="nav-toggle"
          aria-controls="portfolio-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>
      </nav>
    </header>
  );
}
