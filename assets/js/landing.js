(() => {
  "use strict";
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let observer;
  const revealAll = () => {
    observer?.disconnect();
    document
      .querySelectorAll(".reveal.pending")
      .forEach((el) => el.classList.remove("pending"));
    document.documentElement.classList.remove("motion-ready");
  };
  if (!motion.matches && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("pending");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    document.documentElement.classList.add("motion-ready");
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("pending");
      observer.observe(el);
    });
  }
  motion.addEventListener("change", (event) => {
    if (event.matches) revealAll();
  });
  // Anchor and keyboard navigation must never land on an invisible section.
  document.addEventListener("focusin", (event) =>
    event.target.closest(".reveal")?.classList.remove("pending"),
  );
})();
