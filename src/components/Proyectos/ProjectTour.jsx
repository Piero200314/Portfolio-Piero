import GalleryViewer from "./GalleryViewer";
import { useEffect, useRef, useState } from "react";
import { projectGalleries } from "../../data/portfolio";

export default function ProjectTour({ project, paused = false }) {
  const captures = projectGalleries[project.id] || [];
  const slides = [
    ...captures.map((capture) => ({ ...capture, kind: capture.video ? "VIDEO DEL PROYECTO" : "CAPTURA REAL" })),
    ...(project.features || []).map((feature, index) => {
      const split = feature.indexOf(":");
      return {
        kind: "RECORRIDO EXPLICATIVO",
        title: split > 0 ? feature.slice(0, split) : `Función ${index + 1}`,
        caption: split > 0 ? feature.slice(split + 1).trim() : feature,
      };
    }),
  ];
  const images = captures.filter(capture => capture.src);
  const [expanded, setExpanded] = useState(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const touch = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    const stop = () => { if (paused || document.hidden) videoRef.current?.pause(); };
    stop(); document.addEventListener("visibilitychange", stop);
    return () => document.removeEventListener("visibilitychange", stop);
  }, [paused]);
  useEffect(() => {
    if (playing && !paused && videoRef.current) videoRef.current.play().catch(() => setPlaying(false));
  }, [current, playing, paused]);
  const [failed, setFailed] = useState(false);
  const move = (delta) => { setCurrent((value) => (value + delta + slides.length) % slides.length); setFailed(false); };
  useEffect(() => {
    if (!playing || paused || expanded !== null || slides[current]?.video) return;
    const timer = setInterval(() => {
      if (!document.hidden) { setCurrent((value) => (value + 1) % slides.length); setFailed(false); }
    }, 4000);
    return () => clearInterval(timer);
  }, [playing, slides.length, paused, current, expanded]);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const stop = () => { if (motion.matches) setPlaying(false); };
    motion.addEventListener("change", stop);
    return () => motion.removeEventListener("change", stop);
  }, []);
  if (!slides.length) return null;
  const slide = slides[current];
  return (
    <section className="project-tour" aria-label={`Recorrido de ${project.name}`}>
      <div className="tour-top"><span>EXPLORADOR DEL PROYECTO</span><span>{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
      <div className="tour-stage" tabIndex={0} aria-label="Vista del proyecto. Usa las flechas para cambiar."
        onKeyDown={(event) => { if (["ArrowRight", "ArrowLeft"].includes(event.key)) { event.preventDefault(); setPlaying(false); move(event.key === "ArrowRight" ? 1 : -1); } }}
        onTouchStart={(event) => { touch.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => { if (touch.current !== null) { const delta = event.changedTouches[0].clientX - touch.current; if (Math.abs(delta) > 45) { setPlaying(false); move(delta < 0 ? 1 : -1); } touch.current = null; } }}>
        <div className={`tour-frame ${slide.portrait ? "tour-portrait" : ""}`} key={current}>
          {slide.video ? <video ref={videoRef} controls playsInline preload="none" poster={slide.poster} onEnded={() => { if (playing) move(1); }} src={slide.video} aria-label={slide.title} /> : slide.src && !failed ? <button type="button" className="tour-expand" aria-label={`Ampliar captura: ${slide.title}`} onClick={() => { setPlaying(false); setExpanded(images.findIndex(image => image.src === slide.src)); }}><img src={slide.src} alt={`${project.name}: ${slide.title}`} onError={() => setFailed(true)} /><span>Ampliar captura ⤢</span></button> : <div className="tour-diagram" aria-hidden="true"><span>{project.name}</span><div className="tour-path"><b>01</b><i /><b>02</b><i /><b>03</b></div><small>{slide.kind === "CAPTURA REAL" ? "Vista no disponible" : "EXPLORAR · COMPRENDER · CONECTAR"}</small></div>}
          <div className="tour-caption"><span>{slide.kind}</span><h3>{slide.title}</h3><p>{slide.caption}</p></div>
        </div>
      </div>
      <div className="tour-controls">
        <button type="button" onClick={() => { setPlaying(false); move(-1); }} aria-label="Vista anterior">←</button>
        <button type="button" onClick={() => { const next = !playing; setPlaying(next); if (videoRef.current) { if (next) videoRef.current.play().catch(() => setPlaying(false)); else videoRef.current.pause(); } }} aria-pressed={playing}>{playing ? "Pausar recorrido" : "Reproducir recorrido"}</button>
        <button type="button" onClick={() => { setPlaying(false); move(1); }} aria-label="Vista siguiente">→</button>
      </div>
      <div className="tour-dots" aria-label="Elegir vista">{slides.map((item, index) => <button key={index} type="button" className={index === current ? "active" : ""} aria-label={`Vista ${index + 1}: ${item.title}`} aria-current={index === current ? "step" : undefined} onClick={() => { setCurrent(index); setFailed(false); setPlaying(false); }} />)}</div>
      {expanded !== null && images[expanded] && <GalleryViewer images={images} index={expanded} setIndex={setExpanded} onClose={() => setExpanded(null)} projectName={project.name} />}
      <p className="tour-disclaimer">{captures.length ? "Las capturas muestran las vistas disponibles. " : "Aún no se han añadido capturas reales de este proyecto. "}Las diapositivas explicativas describen sus funciones; no son capturas de la aplicación.</p>
    </section>
  );
}
