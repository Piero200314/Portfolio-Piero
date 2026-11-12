import { useEffect, useRef } from "react";

export default function GalleryViewer({ images, index, setIndex, onClose, projectName }) {
 const dialogRef = useRef(null);
 const touch = useRef(null);
 const closeRef = useRef(null);
 useEffect(() => {
  const dialog = dialogRef.current;
  const previous = document.activeElement;
  dialog.showModal(); closeRef.current?.focus();
  return () => { dialog.close(); previous?.focus(); };
 }, []);
 const move = delta => setIndex(value => (value + delta + images.length) % images.length);
 const image = images[index];
 return <dialog ref={dialogRef} className="gallery-viewer" aria-label={`Galería ampliada de ${projectName}`}
  onCancel={event => { event.preventDefault(); event.stopPropagation(); onClose(); }}
  onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); event.stopPropagation(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
  <header><div><small>{projectName} · {index + 1} / {images.length}</small><h2>{image.title}</h2></div><button ref={closeRef} type="button" onClick={onClose} aria-label="Cerrar galería ampliada">✕</button></header>
  <div className="gallery-screen" onTouchStart={event => { touch.current = event.touches[0].clientX; }} onTouchEnd={event => { if (touch.current !== null) { const delta = event.changedTouches[0].clientX - touch.current; if (Math.abs(delta) > 45) move(delta < 0 ? 1 : -1); touch.current = null; } }}>
   <img src={image.src} alt={`${projectName}: ${image.title}`} />
  </div>
  <footer><button type="button" onClick={() => move(-1)} aria-label="Captura anterior">← Anterior</button><p>{image.caption}</p><button type="button" onClick={() => move(1)} aria-label="Captura siguiente">Siguiente →</button></footer>
 </dialog>;
}
