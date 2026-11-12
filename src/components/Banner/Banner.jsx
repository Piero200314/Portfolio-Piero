import FondoEspacial from "../FondoEspacial/FondoEspacial";
import Icon from "../Icon";
import "./Banner.css";
export default function Banner({ paused, setPaused }) {
 return <section id="inicio" className="hero-section">
  <FondoEspacial paused={paused}/>
  <div className="hero-content pf-container">
   <div className="hero-editorial">
    <p className="hero-label">PRHB / PORTFOLIO DE DESARROLLO</p>
    <h1>Piero <span>Huamani</span></h1>
    <p className="hero-specialty">Software, interfaces<br/>y soluciones conectadas.</p>
    <p className="hero-description">Estudiante de Ingeniería de Software e Inteligencia Artificial en SENATI. Desarrollo proyectos full stack, aplicaciones Android y experiencias UX/UI.</p>
    <div className="hero-actions"><a href="#proyectos" className="pf-button">Explorar proyectos <Icon name="arrow"/></a><a href="#contacto" className="pf-button secondary">Contactar</a><a className="cv-download-button" href="/cv/CV_Piero_Huamani.pdf" download="CV_Piero_Huamani.pdf">Descargar CV <span aria-hidden="true">↓</span><small>PDF</small></a></div>
   </div>
   <div className="energy-window" aria-hidden="true"><span>PRHB<span>.</span></span><small>DISEÑO · CÓDIGO · INNOVACIÓN</small></div>

  </div>
  <div className="hero-bottom pf-container"><span>DISEÑO → DESARROLLO → IMPLEMENTACIÓN</span><a href="#sobre-mi" className="hero-scroll">CONOCE MI TRABAJO <Icon name="down"/></a><button className="motion-toggle" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused ? "Reanudar animaciones" : "Pausar animaciones"}</button></div>
 </section>;
}
