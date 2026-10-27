
/* =========================================
   NEXORA.GROWTH — MAIN
   Общие функции сайта
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Автоматически обновляем год в подвале
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Проверяем ссылки на секции текущей страницы
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (!href || href === "#") {
            console.warn("У ссылки не указан адрес:", link);
            return;
        }

        const target = document.getElementById(href.slice(1));

        if (!target) {
            console.warn(
                `Не найдена секция ${href}. Проверь id в HTML:`,
                link
            );
            return;
        }

        link.addEventListener("click", (event) => {
            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });

            // Обновляем адрес страницы без перезагрузки
            if (window.location.hash !== href) {
                history.pushState(null, "", href);
            }
        });
    });

    // 3. Проверяем основные кнопки связи
    const instagramLinks = document.querySelectorAll(
        'a[href*="ig.me/m/nexora.evolve"], ' +
        'a[href*="instagram.com/nexora.evolve"]'
    );

    instagramLinks.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

    // 4. Проверяем ссылки, ведущие на другие страницы сайта
    document.querySelectorAll("a[href]").forEach((link) => {
        const href = link.getAttribute("href");

        if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("https://") &&
            !href.startsWith("http://") &&
            !href.startsWith("mailto:") &&
            !href.startsWith("tel:") &&
            !href.startsWith("javascript:")
        ) {
            console.info("Ссылка на локальный файл:", href);
        }
    });

    console.log("Nexora.growth: основной скрипт загружен.");
});
