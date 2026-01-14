(function () {
  // Active nav highlighting
  const path = window.location.pathname;
  const current = path.endsWith("/") ? "index.html" : path.split("/").pop();
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const target = a.getAttribute("href").split("/").pop();
    if (target === current) a.classList.add("active");
  });

  // Mobile menu toggle
  const toggle = document.querySelector("[data-toggle]");
  const menu = document.querySelector("[data-mobile]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("show");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
})();
