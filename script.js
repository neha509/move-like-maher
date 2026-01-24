(function () {
  // Active nav highlighting
  const path = window.location.pathname;
  const current = path.endsWith("/") ? "index.html" : path.split("/").pop();
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const target = a.getAttribute("href").split("/").pop();
    if (target === current) a.classList.add("active");
  });

  // Mobile menu toggle
  const toggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".nav-menu");
  const header = document.querySelector(".header");
  
  if (toggle && menu) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (header) {
        header.classList.toggle("menu-open", isOpen);
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (menu.classList.contains("open") && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        if (header) {
          header.classList.remove("menu-open");
        }
      }
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        if (header) {
          header.classList.remove("menu-open");
        }
      });
    });
  }
})();
