
/* =========================================
   NEXORA.GROWTH — NAVIGATION
   Mobile menu and page navigation
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (!menuToggle || !navigation) {
        return;
    }

    const navLinks = navigation.querySelectorAll("a");

    function openMenu() {
        navigation.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Закрыть меню");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Открыть меню");
        document.body.classList.remove("menu-open");
    }

    function toggleMenu() {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Close the menu after selecting a navigation link.
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // Close the menu with Escape.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Close the menu when clicking outside it.
    document.addEventListener("click", (event) => {
        const clickedInsideNavigation =
            navigation.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (!clickedInsideNavigation && !clickedMenuButton) {
            closeMenu();
        }
    });

    // Restore the desktop navigation when the screen becomes wider.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
});
