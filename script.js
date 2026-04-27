const revealElements = document.querySelectorAll(".reveal");
const yearElement = document.getElementById("year");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  window.setTimeout(() => {
    document.body.classList.add("is-loaded");
  }, 1100);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const delay = Number(entry.target.dataset.delay || "0");
      window.setTimeout(() => {
        entry.target.classList.add("visible");
      }, delay);

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));