import { useEffect, useRef } from "react";
import "./FondoEspacial.css";

// Esfera de energía y campo estelar: un solo canvas 2D, sin imágenes ni WebGL.
export default function FondoEspacial({ paused }) {
  const canvasRef = useRef(null);
  const pausedRef = useRef(paused);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0, height = 0, frame = 0, last = 0, time = 0, visible = true;
    let seed = 200314;
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    const stars = Array.from({ length: 680 }, () => ({ x: random(), y: random(), z: .2 + random(), phase: random() * 6.28 }));
    const particles = Array.from({ length: 1100 }, () => ({ angle: random() * Math.PI * 2, radius: Math.sqrt(random()), phase: random() * 6.28, size: .4 + random() * 1.3 }));
    function draw() {
      ctx.clearRect(0, 0, width, height);
      const area = canvas.closest(".hero-section").querySelector(".energy-window").getBoundingClientRect();
      const origin = canvas.getBoundingClientRect();
      const cx = area.left - origin.left + area.width / 2;
      const cy = area.top - origin.top + area.height / 2;
      const radius = Math.min(area.width, area.height) * .40;
      // Stars cross the entire hero, not just the energy ring.
      for (const star of stars) {
        const x = ((star.x * width + time * 12 * star.z) % (width + 20)) - 10;
        const y = ((star.y * height + time * 7 * star.z) % (height + 20)) - 10;
        ctx.globalAlpha = .4 + .5 * (.5 + .5 * Math.sin(time * 1.6 + star.phase));
        ctx.fillStyle = star.z > .8 ? "#ffffff" : "#c0d0ef";
        ctx.beginPath(); ctx.arc(x, y, star.z * 1.45, 0, Math.PI * 2); ctx.fill();
        if (star.z > 1.12) { ctx.fillRect(x - 4, y - .4, 8, .8); ctx.fillRect(x - .4, y - 4, .8, 8); }
      }
      ctx.globalAlpha = 1;
      const glow = ctx.createRadialGradient(cx, cy, radius * .4, cx, cy, radius * 1.6);
      glow.addColorStop(0, "#0f1c3000"); glow.addColorStop(.46, "#668dc025"); glow.addColorStop(.64, "#668dc050"); glow.addColorStop(1, "#668dc000");
      ctx.fillStyle = glow; ctx.fillRect(0, 0, width, Math.min(height, cy + radius * 2));
      // Rotating particle globe: depth changes brightness and projected position.
      for (const p of particles) {
        const angle = p.angle + time * .32;
        const x = Math.cos(angle) * p.radius;
        const depth = Math.sin(angle);
        const y = Math.sin(p.phase) * Math.sqrt(1 - x * x);
        ctx.globalAlpha = .18 + (depth + 1) * .22;
        ctx.fillStyle = depth > .4 ? "#c0d0ef" : "#668dc0";
        ctx.beginPath(); ctx.arc(cx + x * radius * .96, cy + y * radius * .96, p.size, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      // Three independent electric filaments create a visibly evolving silhouette.
      ctx.globalCompositeOperation = "lighter";
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        for (let i = 0; i <= 300; i++) {
          const angle = i / 300 * Math.PI * 2;
          const turbulence = Math.sin(angle * 17 + time * 3.8 + layer) * 4 + Math.sin(angle * 43 - time * 5.2 + layer * 2) * 2.8 + Math.sin(angle * 7 + time * 2) * 5;
          const r = radius + turbulence + layer * 3;
          const x = cx + Math.cos(angle) * r, y = cy + Math.sin(angle) * r;
          if (!i) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath(); ctx.strokeStyle = ["#668dc0", "#a8caff", "#e5efff"][layer];
        ctx.lineWidth = [7, 3, 1.4][layer]; ctx.shadowColor = "#668dc0"; ctx.shadowBlur = layer === 0 ? 27 : 10; ctx.stroke();
      }
      ctx.shadowBlur = 0;
      for (let i = 0; i < 45; i++) {
        const a = i * 2.399 + time * (i % 2 ? .6 : -.4);
        const r = radius + 9 + Math.sin(time * 2 + i) * 12;
        ctx.fillStyle = "#c0d0ef"; ctx.globalAlpha = .3 + .6 * Math.abs(Math.sin(time + i));
        ctx.beginPath(); ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 1.5, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
    }
    function resize() {
      const box = canvas.parentElement.getBoundingClientRect();
      width = box.width; height = box.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
    }
    function tick(now) {
      frame = requestAnimationFrame(tick);
      if (now - last < 1000 / 30) return;
      const elapsed = Math.min((now - last) / 1000, .06); last = now;
      if (!visible || document.hidden || pausedRef.current) return;
      time += elapsed; canvas.dataset.motionTime = time.toFixed(3); draw();
    }
    const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(canvas.parentElement);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }); observer.observe(canvas);
    resize(); frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect(); };
  }, []);
  return <div className="energy-cosmos" aria-hidden="true"><canvas ref={canvasRef}/></div>;
}
