import { certificates, profile } from "../../data/portfolio";
import TechLogo from "../TechLogo";
import Icon from "../Icon";
import "./Certificados.css";

export default function Certificados() {
  return (
    <section id="certificados" className="certificates-section pf-section">
      <div className="pf-container">
        <p className="pf-eyebrow">04 / CERTIFICADOS</p>
        <div className="pf-section-heading reveal">
          <h2>Aprender es parte del camino.</h2>
          <p>
            Un espacio para mis cursos, certificaciones y formación
            complementaria.
          </p>
        </div>
        {certificates.length ? (
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <article key={cert.id} className="certificate-card">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`Certificado de ${cert.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="certificate-preview">
                    <Icon name="award" />
                  </div>
                )}
                <div className="certificate-body">
                  <span>
                    {cert.issuer} · {cert.date}
                  </span>
                  <h3>{cert.title}</h3>
                  <div className="certificate-tech">
                    {(cert.tech || []).map((id) => (
                      <TechLogo id={id} key={id} label />
                    ))}
                  </div>
                  {cert.file && (
                    <a href={cert.file} target="_blank" rel="noreferrer">
                      Ver certificado <Icon name="arrow" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="certificate-empty">
            <div className="certificate-symbol">
              <Icon name="award" />
            </div>
            <div>
              <h3>Formación y desarrollo profesional.</h3>
              <p>
                Consulta mi trayectoria y formación en LinkedIn.
              </p>
            </div>
            <a className="certificate-profile-link" href={profile.linkedin} target="_blank" rel="noreferrer">Ver LinkedIn <Icon name="arrow" /></a>
          </div>
        )}
      </div>
    </section>
  );
}
