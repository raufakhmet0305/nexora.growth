
/* =========================================
   NEXORA.GROWTH — ANIMATIONS.JS
   Анимации при прокрутке
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
        return;
    }

    const elements = document.querySelectorAll(
        ".service-card, " +
        ".principle, " +
        ".showcase-card, " +
        ".process-step, " +
        ".faq-item"
    );

    if (!elements.length) {
        return;
    }

    const style = document.createElement("style");

    style.textContent = `
        .reveal-ready {
            opacity: 0;
            transform: translateY(20px);
            transition:
                opacity 0.6s ease,
                transform 0.6s ease;
        }

        .reveal-ready.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
            .reveal-ready {
                opacity: 1;
                transform: none;
                transition: none;
            }
        }
    `;

    document.head.appendChild(style);

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {
        element.classList.add("reveal-ready");
        observer.observe(element);
    });

    console.log("Nexora.growth: animations.js загружен.");
});
