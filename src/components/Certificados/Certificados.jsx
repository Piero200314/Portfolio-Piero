import { useRef, useState, useEffect } from "react";
import { certificates, profile } from "../../data/portfolio";
import TechLogo from "../TechLogo";
import Icon from "../Icon";
import "./Certificados.css";

export default function Certificados() {
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(false);
  const dialog = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);
  function openCertificate(cert) { setZoom(false); setSelected(cert); }
  function closeCertificate() { dialog.current.close(); setSelected(null); }
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
                  <button type="button" className="certificate-image-button" onClick={() => openCertificate(cert)} aria-label={`Ampliar certificado de ${cert.title}`}>
                  <img
                    src={cert.image}
                    alt={`Certificado de ${cert.title}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>Ampliar certificado ↗</span>
                  </button>
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
                    <button type="button" className="certificate-open" onClick={() => openCertificate(cert)}>
                      Ver certificado <Icon name="arrow" />
                    </button>
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
      {selected && (
        <dialog ref={dialog} className="certificate-dialog" aria-labelledby="certificate-dialog-title"
          onCancel={(event) => { event.preventDefault(); closeCertificate(); }}
          onClick={(event) => { if (event.target === event.currentTarget) closeCertificate(); }}>
          <div className="certificate-dialog-panel">
            <header className="certificate-dialog-header">
              <div><p>{selected.issuer}</p><h2 id="certificate-dialog-title">{selected.title}</h2></div>
              <button type="button" onClick={closeCertificate} aria-label="Cerrar certificado" autoFocus>✕</button>
            </header>
            <div className={`certificate-dialog-view ${zoom ? "is-zoomed" : ""}`}>
              <img key={selected.id} src={selected.image} alt={`Certificado de ${selected.title}`} />
            </div>
            <footer className="certificate-dialog-footer">
              <button type="button" onClick={() => setZoom(!zoom)} aria-pressed={zoom}>{zoom ? "Ajustar a pantalla" : "Ampliar imagen"}</button>
              <a href={selected.file} download>Descargar PDF</a>
              <span>Escape para cerrar</span>
            </footer>
          </div>
        </dialog>
      )}
    </section>
  );
}
