import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Perfil from "./components/Perfil/Perfil";
import Habilidades from "./components/Habilidades/Habilidades";
import Proyectos from "./components/Proyectos/Proyectos";
import Certificados from "./components/Certificados/Certificados";
import Contacto from "./components/Contacto/Contacto";
import useReveal from "./hooks/useReveal";
import "./App.css";
import "./neon.css";

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Banner />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Certificados />
        <Contacto />
      </main>
      <footer className="site-footer pf-container">
        <a className="wordmark" href="#inicio">
          piero<span>.</span>
        </a>
        <p>Diseño, código y aprendizaje constante.</p>
        <span>© {new Date().getFullYear()} Piero Huamani</span>
      </footer>
    </>
  );
}
