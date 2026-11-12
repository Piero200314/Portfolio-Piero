import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const elements = document.querySelectorAll(".reveal");
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    const moving = document.querySelectorAll(".skills-track, .hero-portrait, .ambient-shapes");
    const motionObserver = new IntersectionObserver((entries) => entries.forEach(entry => { entry.target.classList.toggle("motion-offscreen", !entry.isIntersecting); }), {rootMargin: "100px"});
    moving.forEach(element => motionObserver.observe(element));
    const onVisibility = () => document.documentElement.classList.toggle("page-hidden", document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      motionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
}
