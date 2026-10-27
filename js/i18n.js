
/* =========================================
   NEXORA.GROWTH — I18N
   Языки: русский, английский, казахский
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        ru: {
            "nav.services": "Услуги",
            "nav.about": "О нас",
            "nav.showcase": "Концепции",
            "nav.process": "Процесс",
            "nav.faq": "FAQ",
            "nav.contact": "Обсудить проект",
            "hero.title": "Делаем бизнес",
            "hero.highlight": "заметным.",
            "hero.description": "Создаём сайты, AI-видео и digital-контент, чтобы ваш бренд выделялся и уверенно развивался в цифровой среде.",
            "hero.cta": "Обсудить проект",
            "hero.services": "Наши услуги",
            "services.title": "Всё, чтобы ваш бренд",
            "services.highlight": "вышел на новый уровень.",
            "services.web": "Разработка сайтов",
            "services.ai": "AI-видео и креативы",
            "services.content": "SMM и контент",
            "services.ads": "Digital-реклама",
            "about.title": "Не просто присутствие в сети.",
            "about.highlight": "А узнаваемый бренд."
        },

        en: {
            "nav.services": "Services",
            "nav.about": "About",
            "nav.showcase": "Concepts",
            "nav.process": "Process",
            "nav.faq": "FAQ",
            "nav.contact": "Discuss a project",
            "hero.title": "Make your business",
            "hero.highlight": "stand out.",
            "hero.description": "We create websites, AI videos, and digital content to help your brand stand out and grow in the digital world.",
            "hero.cta": "Discuss a project",
            "hero.services": "Our services",
            "services.title": "Everything your brand needs",
            "services.highlight": "to move forward.",
            "services.web": "Website development",
            "services.ai": "AI videos and creatives",
            "services.content": "SMM and content",
            "services.ads": "Digital advertising",
            "about.title": "More than just an online presence.",
            "about.highlight": "A recognizable brand."
        },

        kk: {
            "nav.services": "Қызметтер",
            "nav.about": "Біз туралы",
            "nav.showcase": "Тұжырымдамалар",
            "nav.process": "Жұмыс барысы",
            "nav.faq": "Сұрақтар",
            "nav.contact": "Жобаны талқылау",
            "hero.title": "Бизнесіңізді",
            "hero.highlight": "танымал етеміз.",
            "hero.description": "Брендіңізді ерекшелендіріп, цифрлық ортада дамуға көмектесетін сайттар, AI-бейнелер және контент жасаймыз.",
            "hero.cta": "Жобаны талқылау",
            "hero.services": "Қызметтеріміз",
            "services.title": "Брендіңізге қажеттінің бәрі",
            "services.highlight": "жаңа деңгейге өсу үшін.",
            "services.web": "Сайт әзірлеу",
            "services.ai": "AI-бейнелер және креативтер",
            "services.content": "SMM және контент",
            "services.ads": "Цифрлық жарнама",
            "about.title": "Интернетте болу ғана емес.",
            "about.highlight": "Танымал бренд болу."
        }
    };

    function setLanguage(language) {
        if (!translations[language]) {
            return;
        }

        document.documentElement.lang =
            language === "kk" ? "kk" : language;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            const value = translations[language][key];

            if (value) {
                element.textContent = value;
            }
        });

        document.querySelectorAll("[data-set-language]").forEach((button) => {
            const active =
                button.getAttribute("data-set-language") === language;

            button.setAttribute("aria-pressed", String(active));
        });

        try {
            localStorage.setItem("nexora-language", language);
        } catch (error) {
            // Сайт продолжит работать, даже если хранилище недоступно.
        }
    }

    document.querySelectorAll("[data-set-language]").forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.getAttribute("data-set-language"));
        });
    });

    let savedLanguage = "ru";

    try {
        const storedLanguage = localStorage.getItem("nexora-language");

        if (storedLanguage && translations[storedLanguage]) {
            savedLanguage = storedLanguage;
        }
    } catch (error) {
        // Используем русский язык по умолчанию.
    }

    setLanguage(savedLanguage);
});
