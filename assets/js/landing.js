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
  const image = document.getElementById("graph-image");
  const description = document.getElementById("graph-description");
  const controls = Array.from(document.querySelectorAll("[data-graph]"));
  if (!image || !description || !controls.length) return;
  document.documentElement.classList.add("graph-ready");
  let revision = 0;
  controls.forEach((button) => {
    button.addEventListener("click", async () => {
      const current = ++revision;
      const selected = button.dataset.graph === "selected";
      const source = selected ? image.dataset.selected : image.dataset.overview;
      const preload = new Image();
      preload.src = source;
      try {
        await preload.decode();
        if (current !== revision) return;
        image.src = source;
        image.alt = selected
          ? "나이아신아마이드를 선택해 연결된 관계를 강조한 앱 그래프 예시"
          : "성분 관계와 연구 참고 연결을 함께 표시하는 그래프 예시";
        controls.forEach((control) =>
          control.setAttribute("aria-pressed", String(control === button)),
        );
        description.textContent = selected
          ? "성분을 선택하면 연결된 관계에 집중해서 살펴볼 수 있어요."
          : "성분 사이의 관계와 연구 참고 연결을 한눈에 살펴봐요.";
      } catch {
        if (current === revision)
          description.textContent =
            "화면 예시를 불러오지 못했어요. 다시 선택해 주세요.";
      }
    });
  });
})();
