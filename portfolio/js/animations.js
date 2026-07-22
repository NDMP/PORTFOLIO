// Reusable reveal-on-scroll behavior for future sections.
const initRevealAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length === 0) {
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16,
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
};

initRevealAnimations();
