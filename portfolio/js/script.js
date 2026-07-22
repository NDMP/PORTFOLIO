// Reusable UI helpers for global interface behavior.
const select = (selector, scope = document) => scope.querySelector(selector);

const initNavigation = () => {
  const body = document.body;
  const navToggle = select("[data-nav-toggle]");
  const navMenu = select("[data-nav-menu]");

  if (!navToggle || !navMenu) {
    return;
  }

  const closeNavigation = () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    body.classList.toggle("nav-open", isOpen);
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
    }
  });
};

const initScrollHeader = () => {
  const header = select("[data-header]");

  if (!header) {
    return;
  }

  const updateHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
};

const initTypingEffect = () => {
  const typingTarget = select("[data-typing]");

  if (!typingTarget) {
    return;
  }

  const phrases = ["Full Stack Developer", "MERN Stack Developer", "Database Developer"];
  const typingSpeed = 70;
  const deletingSpeed = 38;
  const holdDelay = 1300;
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentPhrase = phrases[phraseIndex];
    typingTarget.textContent = currentPhrase.slice(0, letterIndex);

    if (!isDeleting && letterIndex < currentPhrase.length) {
      letterIndex += 1;
      window.setTimeout(type, typingSpeed);
      return;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      window.setTimeout(type, holdDelay);
      return;
    }

    if (isDeleting && letterIndex > 0) {
      letterIndex -= 1;
      window.setTimeout(type, deletingSpeed);
      return;
    }

    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    window.setTimeout(type, typingSpeed);
  };

  type();
};

const initParallax = () => {
  const parallaxItems = document.querySelectorAll("[data-parallax]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (parallaxItems.length === 0 || reduceMotion.matches) {
    return;
  }

  let frameId = null;

  const updateParallax = (event) => {
    const pointerX = event.clientX / window.innerWidth - 0.5;
    const pointerY = event.clientY / window.innerHeight - 0.5;

    if (frameId) {
      window.cancelAnimationFrame(frameId);
    }

    frameId = window.requestAnimationFrame(() => {
      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.speed || 0.02);
        item.style.setProperty("--parallax-x", `${pointerX * speed * 100}rem`);
        item.style.setProperty("--parallax-y", `${pointerY * speed * 100}rem`);
      });
    });
  };

  window.addEventListener("pointermove", updateParallax, { passive: true });

  reduceMotion.addEventListener("change", (event) => {
    if (event.matches) {
      parallaxItems.forEach((item) => {
        item.style.removeProperty("--parallax-x");
        item.style.removeProperty("--parallax-y");
      });
    }
  });
};

const initProjectCards = () => {
  const projectCards = document.querySelectorAll("[data-project-card]");

  projectCards.forEach((card) => {
    const toggle = select("[data-project-toggle]", card);
    const details = select("[data-project-details]", card);

    if (!toggle || !details) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      toggle.textContent = isExpanded ? "View Details" : "Hide Details";
      details.setAttribute("aria-hidden", String(isExpanded));
      card.classList.toggle("is-expanded", !isExpanded);
    });
  });
};

initNavigation();
initScrollHeader();
initTypingEffect();
initParallax();
initProjectCards();
