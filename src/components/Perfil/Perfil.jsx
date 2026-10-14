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
            Una mirada creativa.
            <br />
            <span>Una base técnica.</span>
          </h2>
          <div className="about-avatar">
            {profile.photo ? (
              <img src={profile.photo} alt="Piero Huamani" />
            ) : (
              <span aria-label="Iniciales de Piero Huamani">
                PH<span>.</span>
              </span>
            )}
          </div>
        </div>
        <div className="about-copy">
          <p className="about-intro">
            Hola, soy Piero.
            <br />
            Me interesa cómo se siente una interfaz y cómo funciona por dentro.
          </p>
          <p>
            Estudio Desarrollo de Software y construyo mi experiencia a través
            de proyectos personales y académicos. Combino el diseño UX/UI con el
            desarrollo de aplicaciones web y exploro soluciones con Python y
            visión artificial.
          </p>
          <p>
            Actualmente participo en el diseño UX/UI de FitCoach. También estoy
            aprendiendo React, practicando control de versiones y fortaleciendo
            mis conocimientos básicos de análisis de datos.
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
