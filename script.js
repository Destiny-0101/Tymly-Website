
// TYMly mobile navigation

const navbar = document.querySelector(".tymly-navbar");

if (navbar) {
  const menu = navbar.querySelector(".tymly-navbar__menu");
  const toggle = navbar.querySelector(".tymly-navbar__toggle");
  const navLinks = navbar.querySelectorAll(".tymly-navbar__link");
  const cta = navbar.querySelector(".tymly-navbar__cta");

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  }

  function openMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
  }

  if (menu && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.contains("is-open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close the menu after selecting a navigation link.
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Also close it after selecting the main CTA.
    if (cta) {
      cta.addEventListener("click", closeMenu);
    }

    // Close the menu when Escape is pressed.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Ensure the menu is reset when returning to desktop width.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });
  }
}


const tymlyYear = document.getElementById("tymly-year");

if (tymlyYear) {
  tymlyYear.textContent = new Date().getFullYear();
}
