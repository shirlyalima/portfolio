/* ==============================
   1. DADOS DOS PROJETOS
================================ */

const projectData = [
    {
        id: "1",
        type: "Full Stack · Employee Experience",
        title: "Employee Experience Journey",
        description_pt: "Projeto interno desenvolvido para uma plataforma gamificada de Employee Experience. Atuei no desenvolvimento Full Stack implementando funcionalidades como autenticação JWT e Google OAuth, dashboards, APIs REST, controle de permissões, geração de certificados e relatórios em PDF e Excel. Algumas informações, imagens e funcionalidades foram omitidas por questões de confidencialidade.",
        description_en: "Internal Employee Experience platform developed as a corporate project. I worked as a Full Stack Developer implementing JWT and Google OAuth authentication, dashboards, REST APIs, role-based access, certificate generation, and PDF/Excel reports. Some information, screenshots, and features have been omitted due to confidentiality.",
        stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "JWT", "OAuth", "PDF", "Excel"],
       image: "imgs/1.png",
        demoLink: "",
        repositoryLink: "",
        private: true
    },
    {
        id: "2",
        type: "Chrome Extension · Recruitment",
        title: "Hunting Tracker",
        description_pt: "Extensão criada para fornecer clareza sobre o tempo investido em Direct Sourcing. A ferramenta automatiza a mensuração das atividades de hunting, transforma o esforço em dados visíveis e ajuda profissionais de recrutamento a acompanharem sua produtividade.",
        description_en: "A Chrome extension created to provide clarity about the time invested in Direct Sourcing. It automates hunting activity measurement, turns effort into visible data, and helps recruitment professionals track productivity.",
        stack: ["JavaScript", "Manifest V3", "Chrome API", "HTML", "CSS"],
        image: "imgs/HuntingTracker.png",
        demoLink: "https://shirlyalima.github.io/extensions/",
        repositoryLink: "",
        private: false
    },
    {
        id: "3",
        type: "Web App · AI",
        title_pt: "Recomendador de Livros",
        title_en: "Book Recommender",
        description_pt: "Aplicação que integra a OpenLibrary e recursos de IA para gerar recomendações de leitura personalizadas. O projeto combina consumo de APIs REST, interpretação das preferências do usuário e uma interface responsiva.",
        description_en: "An application that integrates OpenLibrary and AI resources to generate personalized reading recommendations. It combines REST API consumption, interpretation of user preferences, and a responsive interface.",
        stack: ["JavaScript", "REST API", "OpenLibrary", "OpenAI", "Responsive Design"],
        image: "imgs/Recomendador.png",
        demoLink: "https://recomendador-livros-ia.vercel.app/",
        repositoryLink: "",
        private: false
    },
    {
        id: "4",
        type: "Chrome Extension · Productivity",
        title_pt: "Destacador de Palavras-chave",
        title_en: "Keyword Highlighter",
        description_pt: "Extensão publicada para superar a limitação do Ctrl + F, permitindo destacar múltiplos termos simultaneamente. Foi criada a partir de uma necessidade real durante análises de perfis e grandes volumes de texto.",
        description_en: "A published extension that overcomes the Ctrl + F limitation by allowing users to highlight multiple terms simultaneously. It was created from a real need while reviewing profiles and large amounts of text.",
        stack: ["JavaScript", "Manifest V3", "Chrome API", "HTML", "CSS"],
        image: "imgs/Destacador.png",
        demoLink: "https://chromewebstore.google.com/detail/destacador-de-palavras/nmefhbmcdilnmmidmnklfjjajppjnpin",
        repositoryLink: "",
        private: false
    },
    {
        id: "5",
        type: "2D Game · JavaScript",
        title: "Athena",
        description_pt: "Endless runner inspirado na mitologia grega. Desenvolvi a movimentação, colisões, física, animações, loop de renderização, narrativa e direção visual, combinando programação e criação artística em uma experiência autoral.",
        description_en: "An endless runner inspired by Greek mythology. I developed movement, collision, physics, animations, the rendering loop, narrative, and visual direction, combining programming and art in an original experience.",
        stack: ["JavaScript", "Canvas", "HTML", "CSS", "Game Design"],
        image: "imgs/Athena.png",
        demoLink: "https://shirlyalima.itch.io/athena",
        repositoryLink: "",
        private: false
    },
    {
        id: "6",
        type: "Web · Education",
        title_pt: "RPG Educacional",
        title_en: "Educational RPG",
        description_pt: "Landing page responsiva criada para apoiar uma experiência pedagógica baseada em RPG e matemática. O projeto transforma uma narrativa de sala de aula em uma apresentação digital mais visual, imersiva e acessível.",
        description_en: "A responsive landing page created to support an educational experience based on RPG and mathematics. The project turns a classroom narrative into a more visual, immersive, and accessible digital presentation.",
        stack: ["HTML", "CSS", "Responsive Design", "UX"],
        image: "imgs/RPG-2.png",
        demoLink: "https://shirlyalima.github.io/desvendando-os-segredos-da-escola/index.html",
        repositoryLink: "",
        private: false
    }
];

/* ==============================
   2. TRADUÇÕES
================================ */

const translations = {
    pt: {
        "nav-home": "Home",
        "nav-specialties": "Especialidades",
        "nav-projects": "Projetos",
        "nav-tech": "Tecnologias",
        "nav-about": "Sobre",
        "nav-contact": "Contato",

        "home-eyebrow": "Olá, eu sou",
        "home-role": 'Desenvolvedora <span class="highlight">Full Stack</span>',
        "home-description": "Desenvolvo aplicações web, APIs, automações com IA e extensões para Google Chrome, combinando tecnologia, criatividade e foco em problemas reais.",
        "btn-projects": "Ver projetos",
        "btn-extensions": "Minhas extensões",
        "btn-cv": "Baixar CV",

        "hero-card-label": "Foco atual",
        "hero-card-title": "Produtos digitais completos",
        "hero-item-1": "Frontend moderno e responsivo",
        "hero-item-2": "Backend, autenticação e banco de dados",
        "hero-item-3": "Integrações, APIs REST e automações",
        "hero-item-4": "Extensões e ferramentas de produtividade",

        "specialties-eyebrow": "O que eu desenvolvo",
        "specialties-title": "Soluções que unem produto, código e experiência",
        "specialties-description": "Atuo em diferentes etapas do desenvolvimento, da interface à integração com serviços externos.",
        "specialty-1-title": "Aplicações Web",
        "specialty-1-desc": "Interfaces responsivas e sistemas modernos com React, TypeScript e foco em usabilidade.",
        "specialty-2-title": "Backend e APIs",
        "specialty-2-desc": "APIs REST, autenticação JWT/OAuth, regras de negócio e persistência com PostgreSQL.",
        "specialty-3-title": "IA e Automação",
        "specialty-3-desc": "Fluxos com n8n, integrações entre sistemas e recursos de IA aplicados a tarefas reais.",
        "specialty-4-title": "Extensões Chrome",
        "specialty-4-desc": "Ferramentas para produtividade, recrutamento e análise de conteúdo no navegador.",

        "projects-eyebrow": "Portfólio",
        "projects-title": "Projetos em destaque",
        "projects-description": "Uma seleção de produtos, ferramentas e experiências digitais que desenvolvi.",
        "project-featured": "Destaque",
        "project-details": "Ver detalhes",
        "filter-all": "Todos",
        "filter-extensions": "Extensões",
        "filter-ai": "IA e automação",
        "filter-games": "Jogos",
        "filter-education": "Educação",

        "proj1-desc": "Plataforma gamificada com autenticação, dashboards, campanhas, cursos, recompensas e relatórios.",
        "proj2-desc": "Extensão que mensura e organiza o tempo investido em atividades de Direct Sourcing.",
        "proj3-title": "Recomendador de Livros",
        "proj3-desc": "Aplicação que combina dados da OpenLibrary e IA para sugerir leituras personalizadas.",
        "proj4-title": "Destacador de Palavras-chave",
        "proj4-desc": "Permite localizar e destacar diversos termos simultaneamente em páginas da web.",
        "proj5-desc": "Endless runner inspirado na mitologia grega, com lógica, física, colisões e arte autoral.",
        "proj6-title": "RPG Educacional",
        "proj6-desc": "Experiência web responsiva criada para apresentar uma narrativa de RPG em sala de aula.",

        "extensions-eyebrow": "Catálogo",
        "extensions-title": "Conheça todos os meus jogos",
        "extensions-description": "Explore meu catálogo de jogos desenvolvidos.",
        // "extensions-button": "Página de Extensões",
        "games-button": "Página de jogos",

        "tech-eyebrow": "Stack",
        "tech-title": "Tecnologias e ferramentas",
        "tech-description": "Tecnologias que utilizo para desenvolver, integrar e publicar soluções digitais.",

        "about-eyebrow": "Sobre mim",
        "about-title": "Educação, tecnologia e desenvolvimento de produtos",
        "about-text": "<p>Minha trajetória profissional começou na educação, onde desenvolvi habilidades de comunicação,planejamento e compreensão das necessidades das pessoas enquanto professora de Inglês. Hoje, aplico essa experiência também ao desenvolvimento de produtos digitais.</p><p>Sou formada em Análise e Desenvolvimento de Sistemas e atuo com desenvolvimento Full Stack, criando interfaces, APIs, integrações, automações e ferramentas de produtividade. Trabalho principalmente com React, TypeScript, NestJS, PostgreSQL, n8n e extensões Chrome.</p><p>Gosto de transformar problemas reais em soluções claras, funcionais e intuitivas, acompanhando o projeto desde a ideia até a experiência final do usuário.</p>",
        "about-github": "Conheça meu código no GitHub",
        "about-location": "Maceió, Alagoas · Brasil",

        "contact-eyebrow": "Vamos conversar",
        "contact-title": "Tem um projeto ou oportunidade?",
        "contact-description": "Entre em contato para conversar sobre desenvolvimento web, automações, APIs e produtos digitais.",
        "contact-email": "Enviar email",
        "contact-extensions": "Extensões",
        "footer-text": "Desenvolvido com HTML, CSS e JavaScript.",

        "modal-demo": "Ver projeto",
        "modal-repository": "Ver código",
        "modal-private": "Projeto interno ou privado",
        "modal-close": "Fechar modal"
    },

    en: {
        "nav-home": "Home",
        "nav-specialties": "Expertise",
        "nav-projects": "Projects",
        "nav-tech": "Technologies",
        "nav-about": "About",
        "nav-contact": "Contact",

        "home-eyebrow": "Hello, I am",
        "home-role": 'Full Stack <span class="highlight">Developer</span>',
        "home-description": "I build web applications, APIs, AI-powered automations, and Google Chrome extensions, combining technology, creativity, and a focus on real problems.",
        "btn-projects": "View projects",
        "btn-extensions": "My extensions",
        "btn-cv": "Download CV",

        "hero-card-label": "Current focus",
        "hero-card-title": "Complete digital products",
        "hero-item-1": "Modern, responsive frontend",
        "hero-item-2": "Backend, authentication, and databases",
        "hero-item-3": "Integrations, REST APIs, and automation",
        "hero-item-4": "Extensions and productivity tools",

        "specialties-eyebrow": "What I build",
        "specialties-title": "Solutions connecting product, code, and experience",
        "specialties-description": "I work across different development stages, from interface design to external service integration.",
        "specialty-1-title": "Web Applications",
        "specialty-1-desc": "Responsive interfaces and modern systems with React, TypeScript, and a focus on usability.",
        "specialty-2-title": "Backend and APIs",
        "specialty-2-desc": "REST APIs, JWT/OAuth authentication, business rules, and PostgreSQL persistence.",
        "specialty-3-title": "AI and Automation",
        "specialty-3-desc": "n8n workflows, system integrations, and AI resources applied to real tasks.",
        "specialty-4-title": "Chrome Extensions",
        "specialty-4-desc": "Tools for productivity, recruitment, and browser content analysis.",

        "projects-eyebrow": "Portfolio",
        "projects-title": "Featured projects",
        "projects-description": "A selection of products, tools, and digital experiences I have developed.",
        "project-featured": "Featured",
        "project-details": "View details",
        "filter-all": "All",
        "filter-extensions": "Extensions",
        "filter-ai": "AI and automation",
        "filter-games": "Games",
        "filter-education": "Education",

        "proj1-desc": "A gamified platform featuring authentication, dashboards, campaigns, courses, rewards, and reports.",
        "proj2-desc": "An extension that measures and organizes the time invested in Direct Sourcing activities.",
        "proj3-title": "Book Recommender",
        "proj3-desc": "An application combining OpenLibrary data and AI to suggest personalized reads.",
        "proj4-title": "Keyword Highlighter",
        "proj4-desc": "Finds and highlights multiple terms simultaneously across web pages.",
        "proj5-desc": "A Greek mythology-inspired endless runner featuring logic, physics, collision, and original art.",
        "proj6-title": "Educational RPG",
        "proj6-desc": "A responsive web experience created to present an RPG narrative in the classroom.",

        "extensions-eyebrow": "Catalog",
        "extensions-title": "Explore all my extensions",
        "extensions-description": "I gathered my Google Chrome tools on one page, organized as a small extension store.",
        "extensions-button": "Open catalog",

        "tech-eyebrow": "Stack",
        "tech-title": "Technologies and tools",
        "tech-description": "Technologies I use to develop, integrate, and publish digital solutions.",

        "about-eyebrow": "About me",
        "about-title": "Education, technology, and product development",
        "about-text": "<p>My professional journey began in education, where I developed communication, planning, and user-understanding skills. Today, I apply this background to digital product development.</p><p>I work in Full Stack development, building interfaces, APIs, integrations, automations, and productivity tools. My main technologies include React, TypeScript, NestJS, PostgreSQL, n8n, and Chrome extensions.</p><p>I enjoy turning real problems into clear, functional, and intuitive solutions, following a project from the initial idea to the final user experience.</p>",
        "about-github": "Explore my code on GitHub",
        "about-location": "Maceió, Alagoas · Brazil",

        "contact-eyebrow": "Let's talk",
        "contact-title": "Have a project or opportunity?",
        "contact-description": "Get in touch to discuss web development, automation, APIs, and digital products.",
        "contact-email": "Send email",
        "contact-extensions": "Extensions",
        "footer-text": "Built with HTML, CSS, and JavaScript.",

        "modal-demo": "View project",
        "modal-repository": "View code",
        "modal-private": "Internal or private project",
        "modal-close": "Close modal"
    }
};

/* ==============================
   3. INTERNACIONALIZAÇÃO
================================ */

const langToggle = document.getElementById("langToggle");

function getCurrentLanguage() {
    return localStorage.getItem("language") || "pt";
}

function setLanguage(lang) {
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.body.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        const value = translations[lang][key];

        if (!value) return;

        if (element.hasAttribute("data-i18n-html")) {
            element.innerHTML = value;
        } else {
            element.textContent = value;
        }
    });

    langToggle.textContent = lang === "pt" ? "EN" : "PT";
    langToggle.dataset.currentLang = lang;

    const closeButton = document.querySelector(".close-btn");
    if (closeButton) {
        closeButton.setAttribute("aria-label", translations[lang]["modal-close"]);
    }
}

langToggle?.addEventListener("click", () => {
    setLanguage(getCurrentLanguage() === "pt" ? "en" : "pt");
});

/* ==============================
   4. TEMA
================================ */

const darkModeToggle = document.getElementById("darkModeToggle");

function updateThemeIcon() {
    const icon = darkModeToggle?.querySelector("i");
    if (!icon) return;

    const isDark = document.body.classList.contains("dark-mode");
    icon.className = isDark ? "fas fa-moon" : "fas fa-sun";
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark-mode");
    }

    updateThemeIcon();
}

darkModeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    updateThemeIcon();
});

/* ==============================
   5. MENU MOBILE
================================ */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle?.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector("i").className = isOpen ? "fas fa-xmark" : "fas fa-bars";
});

navbar?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
        const icon = menuToggle?.querySelector("i");
        if (icon) icon.className = "fas fa-bars";
    });
});

/* ==============================
   6. SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

revealElements.forEach(element => revealObserver.observe(element));

/* ==============================
   7. NAVEGAÇÃO ATIVA
================================ */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar > a");

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
);

sections.forEach(section => sectionObserver.observe(section));

/* ==============================
   8. CURSOR PERSONALIZADO
================================ */

const customCursor = document.getElementById("customCursor");

if (customCursor && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", event => {
        customCursor.style.transform =
            `translate3d(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%), 0)`;
    });

    document.addEventListener("mouseover", event => {
        if (event.target.closest("a, button, .projeto-card")) {
            customCursor.classList.add("active");
        }
    });

    document.addEventListener("mouseout", event => {
        if (event.target.closest("a, button, .projeto-card")) {
            customCursor.classList.remove("active");
        }
    });
}

/* ==============================
   9. FILTRO DOS PROJETOS
================================ */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".projeto-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            const categories = card.dataset.category.split(" ");
            const shouldShow = filter === "all" || categories.includes(filter);
            card.classList.toggle("hidden", !shouldShow);
        });
    });
});

/* ==============================
   10. MODAL DOS PROJETOS
================================ */

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalDetails = document.getElementById("modal-details");
const closeModalButton = document.querySelector(".close-btn");

function getProjectTitle(project, lang) {
    return project.title || (lang === "pt" ? project.title_pt : project.title_en);
}

function openProjectModal(projectId) {
    const project = projectData.find(item => item.id === projectId);
    if (!project) return;

    const lang = getCurrentLanguage();
    const description = lang === "pt" ? project.description_pt : project.description_en;

    modalType.textContent = project.type;
    modalTitle.textContent = getProjectTitle(project, lang);

    const stackHtml = project.stack
        .map(tech => `<span>${tech}</span>`)
        .join("");

    let actionsHtml = "";

    if (project.demoLink) {
        actionsHtml += `
            <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="btn primary">
                ${translations[lang]["modal-demo"]}
                <i class="fas fa-arrow-up-right-from-square"></i>
            </a>
        `;
    }

    if (project.repositoryLink) {
        actionsHtml += `
            <a href="${project.repositoryLink}" target="_blank" rel="noopener noreferrer" class="btn secondary">
                ${translations[lang]["modal-repository"]}
                <i class="fab fa-github"></i>
            </a>
        `;
    }

    const privateHtml = project.private
        ? `<div class="private-notice"><i class="fas fa-lock"></i>${translations[lang]["modal-private"]}</div>`
        : "";

    modalDetails.innerHTML = `
        <p class="modal-description">${description}</p>
        <div class="tags">${stackHtml}</div>
        <img class="modal-image" src="${project.image}" alt="${getProjectTitle(project, lang)}">
        ${privateHtml}
        <div class="modal-actions">${actionsHtml}</div>
    `;

    modal.classList.add("show");
    document.body.classList.add("modal-open");
    closeModalButton.focus();
}

function closeProjectModal() {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

projectCards.forEach(card => {
    card.addEventListener("click", event => {
        if (event.target.closest("a")) return;
        openProjectModal(card.dataset.projectId);
    });
});

closeModalButton?.addEventListener("click", closeProjectModal);

modal?.addEventListener("click", event => {
    if (event.target === modal) closeProjectModal();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeProjectModal();
    }
});

/* ==============================
   11. INICIALIZAÇÃO
================================ */

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    setLanguage(getCurrentLanguage());

    const yearElement = document.getElementById("currentYear");
    if (yearElement) yearElement.textContent = new Date().getFullYear();
});
