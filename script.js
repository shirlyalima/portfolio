/* ====================================================================== */
/* 1. SCROLL REVEAL */
/* ====================================================================== */

const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const triggerHeight = window.innerHeight * 0.8;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerHeight) {
            element.classList.add('active');
        } 
    });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('resize', checkReveal);
checkReveal();


/* ====================================================================== */
/* 2. DARK MODE TOGGLE */
/* ====================================================================== */

const darkModeToggle = document.getElementById('darkModeToggle');

function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        // Trocar ícone para lua
        const icon = darkModeToggle?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

if (darkModeToggle) {
    checkSavedTheme();

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        const icon = darkModeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        } else {
            localStorage.setItem('theme', 'light');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }
    });
}


/* ====================================================================== */
/* 3. LÓGICA DE MOVIMENTO E INTERAÇÃO */
/* ====================================================================== */

const customCursor = document.getElementById('customCursor');

if (customCursor) {
    // 1. Fazer o cursor seguir o mouse (Usa translate3d para melhor performance)
    document.addEventListener('mousemove', (e) => {
        // -50% para centralizar o cursor no ponteiro do mouse
        customCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });

    // 2. Aplicar o efeito 'active' (expansão) em elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .projeto-card, .close-btn');

    interactiveElements.forEach(element => {
        // Ao entrar no elemento (hover)
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('active');
        });
        
        // Ao sair do elemento
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('active');
        });
    });
}


/* ====================================================================== */
/* 4. MODAL DE PROJETOS  */
/* ====================================================================== */

// Dados dos Projetos
const projectData = [
    {
        id: '1',
        title: 'Extensão do Google Chrome - Google Extension',
        description_pt: 'Interface minimalista e responsiva, com personalização de cores e foco em performance e experiência do usuário. A solução aumenta a produtividade de quem lida com grandes volumes de texto.',
        description_en: 'A minimalist and responsive interface, with customizable colors and a focus on performance and user experience. The solution increases the productivity of those who deal with large volumes of text.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://chromewebstore.google.com/detail/destacador-de-palavras/nmefhbmcdilnmmidmnklfjjajppjnpin?hl=pt-BR&utm_source=ext_sidebar',
        extraContent: '<img src="imgs/Destacador.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">'    },
    {
        id: '2',
        title: 'Jogo - Game',
        description_pt: 'Endless runner de progressão cujo o loop principal simula a viagem da deusa Atena em direção ao Olimpo. Criei desde a concepção, passando pelo design até a implementação completa do jogo.',
        description_en: 'An endless runner game with progression, where the main loop simulates the journey of the goddess Athena towards Mount Olympus. I created everything from conception, design, to full implementation of the game.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://shirlyalima.itch.io/athena',
        extraContent: '<img src="imgs/Athena.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">',
    },

    {
        id: '3',
        title: 'Recomendador de Livros - Book Recommender',
        description_pt: 'API integrada com IA para recomendar livros com base nas preferências do usuário. Interface amigável e responsiva, focada em usabilidade e experiência do usuário.',
        description_en: 'API integrated with AI to recommend books based on user preferences. User-friendly and responsive interface, focused on usability and user experience.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://shirlyalima.itch.io/athena',
        extraContent: '<img src="imgs/Recomendador.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">',
    },

    {
        id: '4',
        title: 'Site - RPG',
        description_pt: 'Landing Page focado na apresentação de uma narrativa envolvente. O projeto foi feito para ser utilizado por alunos de uma escola.',
        description_en: 'This landing page focuses on presenting an engaging narrative. The project was designed to be used by school students.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://shirlyalima.github.io/desvendando-os-segredos-da-escola/index.html',
        extraContent: '<img src="imgs/RPG-2.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">'
    },
    
    {
        id: '5',
        title: 'Site - Comercial',
        description_pt: 'Site responsivo criado para divulgar aulas de inglês. Interface minimalista e focada na experiência do usuário.',
        description_en: 'Responsive website created to promote English classes. Minimalist interface focused on user experience.',
        stack: ['HTML', 'CSS'],
        demoLink: 'https://shirlyalima.github.io/aulas-de-ingles/',
        extraContent: '<img src="/imgs/Aulas_2.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;"'
    }
];


const modal = document.getElementById('project-modal');
const closeModalBtn = document.querySelector('.close-btn');
const projectCards = document.querySelectorAll('.projeto-card');
const modalTitle = document.getElementById('modal-title');
const modalDetails = document.getElementById('modal-details');

// Função para Abrir o Modal
function openProjectModal(projectId) {
    const project = projectData.find(p => p.id === projectId);
    const currentLang = localStorage.getItem('language') || 'pt';
    
    if (project) {
        modalTitle.textContent = project.title;
        
        // Tradução da descrição do projeto
        const projectDescription = currentLang === 'pt' ? project.description_pt : project.description_en;
        const demoText = translations[currentLang]['modal-demo'];
        const codeText = translations[currentLang]['modal-code'];

        let detailsHtml = `<p style="margin-bottom: 20px;">${projectDescription}</p>`;
        
        // Tags da Stack
        detailsHtml += '<div style="margin-bottom: 20px;">';
        project.stack.forEach(tech => {
            detailsHtml += `<span class="tag-modal">${tech}</span>`;
        });
        detailsHtml += '</div>';

        // Conteúdo Extra (Imagem/Código)
        detailsHtml += project.extraContent;

        // Links Traduzidos
        detailsHtml += `
            <div style="margin-top: 30px;">
                <a href="${project.demoLink}" target="_blank" class="btn primary">${demoText} <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;

        modalDetails.innerHTML = detailsHtml;

        modal.classList.add('show');
    }
}

// Escuta o clique nos cards de projeto
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.projectId;
        openProjectModal(projectId);
    });
});

// Função para Fechar o Modal
function closeProjectModal() {
    modal.classList.remove('show');
}

closeModalBtn.addEventListener('click', closeProjectModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeProjectModal();
    }
});


/* ====================================================================== */
/* 5. INTERNACIONALIZAÇÃO (i18n) - Português e Inglês */
/* ====================================================================== */

const translations = {
    'pt': {
        // NAV BAR
        'nav-home': 'Home',
        'nav-projetos': 'Projetos',
        'nav-sobre': 'Sobre',
        'nav-contato': 'Contato',
        
        // HOME SECTION
        'home-subtitle': 'Olá, eu sou',
        'home-role-text': 'Desenvolvedora <span class="highlight">Web</span>',
        'home-description': 'Criatividade & Tecnologia.',
        'btn-projects': 'Ver Projetos',
        'btn-cv': 'Baixar CV',
        
        // CONTACT SECTION (NOVO)
        'contact-linkedin': 'LinkedIn',
        
        // NOVO: Textos dos botões
        'contact-btn-linkedin': 'LinkedIn',
        'contact-btn-email': 'Email',
        'contact-btn-github': 'GitHub',
        'contact-btn-itchio': 'Itch.io',

        // HEADINGS
        'heading-projetos': 'Projetos em Destaque',
        'heading-sobre': 'Sobre Mim',
        'heading-texto': '<h3><p>Estudo Análise e Desenvolvimento de Sistemas e sou pós-graduada em Letras, duas áreas que me ensinaram a pensar com lógica, mas também com criatividade. Gosto de transformar ideias em interfaces funcionais e intuitivas, explorando o lado criativo do desenvolvimento web.</p><p>Além disso, sou fascinada por jogos: eles me inspiram a criar experiências digitais envolventes, onde cada detalhe importa, do design à interação.</p></h3>',
        'heading-contato': 'Entre em Contato',

        // MODAL
        'modal-demo': 'Ver Projeto',

        // PROJECT CARDS (PT)
        'proj1-title': 'Destacador (Extensão Chrome)',
        'proj1-desc': 'Extensão que resolve uma limitação do atalho Ctrl + F, permitindo destacar múltiplos termos simultaneamente.',
        'proj1-tag-1': 'HTML',
        'proj1-tag-2': 'CSS',
        'proj1-tag-3': 'JavaScript',

        'proj2-title': 'Jogo - Athena',
        'proj2-desc': 'Projeto desenvolvido para explorar a criação de jogos 2D utilizando JavaScript.',
        'proj2-tag-1': 'HTML',
        'proj2-tag-2': 'CSS',
        'proj2-tag-3': 'JavaScript',

        'proj3-title': 'Recomendador de Livros',
        'proj3-desc': 'Site que recomenda livros, integrado com API e IA.',
        'proj3-tag-1': 'HTML',
        'proj3-tag-2': 'CSS',
        'proj3-tag-3': 'JavaScript',

        'proj4-title': 'Site - RPG',
        'proj4-desc': 'Site responsivo. Um RPG criado para a sala de aula.',
        'proj4-tag-1': 'HTML',
        'proj4-tag-2': 'CSS',

        'proj5-title': 'Site - Comercial',
        'proj5-desc': 'Site responsivo criado para divulgar aulas de inglês.',
        'proj5-tag-1': 'HTML',
        'proj5-tag-2': 'CSS'
    },
    'en': {
        // NAV BAR
        'nav-home': 'Home',
        'nav-projetos': 'Projects',
        'nav-sobre': 'About',
        'nav-contato': 'Contact',
        
        // HOME SECTION
        'home-subtitle': 'Hello, I am',
        'home-role-text': 'Web <span class="highlight">Developer</span>',
        'home-description': 'Creativity & Technology.',
        'btn-projects': 'View Projects',
        'btn-cv': 'Download CV',

        // CONTACT SECTION
        'contact-linkedin': 'LinkedIn',
        
        // NOVO: Textos dos botões
        'contact-btn-linkedin': 'LinkedIn',
        'contact-btn-email': 'Email',
        'contact-btn-github': 'GitHub',
        'contact-btn-itchio': 'Itch.io',

        // HEADINGS
        'heading-projetos': 'Featured Projects',
        'heading-sobre': 'About Me',
        'heading-texto': '<h3><p>I study Systems Analysis and Development and hold a postgraduate degree in Languages — two fields that taught me to think both logically and creatively. I enjoy turning ideas into functional, intuitive interfaces, exploring the creative side of web development.</p><p>I am also passionate about games: they inspire me to create engaging digital experiences where every detail matters, from design to interaction.</p></h3>',
        'heading-contato': 'Get in Touch',
        

        // MODAL
        'modal-demo': 'View Demo',

        // PROJECT CARDS (EN)
        'proj1-title': 'Highlighter (Chrome Extension)',
        'proj1-desc': 'Extension that overcomes the Ctrl+F limitation, allowing multiple terms to be highlighted simultaneously.',
        'proj1-tag-1': 'HTML',
        'proj1-tag-2': 'CSS',
        'proj1-tag-3': 'JavaScript',

        'proj2-title': 'Game - Athena',
        'proj2-desc': 'Project developed to explore 2D game creation using JavaScript.',
        'proj2-tag-1': 'HTML',
        'proj2-tag-2': 'CSS',
        'proj2-tag-3': 'JavaScript',

        'proj3-title': 'Book Recommender',
        'proj3-desc': 'Website that recommends books, integrated with API and AI.',
        'proj3-tag-1': 'HTML',
        'proj3-tag-2': 'CSS',
        'proj3-tag-3': 'JavaScript',

        'proj4-title': 'RPG Site',
        'proj4-desc': 'Responsive site. An RPG created for classroom use.',
        'proj4-tag-1': 'HTML',
        'proj4-tag-2': 'CSS',

        'proj5-title': 'Commercial Site',
        'proj5-desc': 'Responsive website created to promote English classes.',
        'proj5-tag-1': 'HTML',
        'proj5-tag-2': 'CSS'
    }
};

const langToggle = document.getElementById('langToggle');

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.body.dataset.lang = lang; 

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translationText = translations[lang][key];

        if (translationText) {
            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = translationText;
            } else {
                element.textContent = translationText;
            }
        }
    });

    updateLangButton(lang);
}

function updateLangButton(currentLang) {
    if (langToggle) {
        langToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';
        langToggle.setAttribute('data-current-lang', currentLang);
    }
}

// Inicialização: Carregar o idioma salvo e eventos
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = langToggle.getAttribute('data-current-lang');
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            setLanguage(newLang);
        });
    }
});