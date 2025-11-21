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
        description_pt: 'Interface minimalista e responsiva, com personalização de cores e foco em performance e experiência do usuário. Criei durante meu estágio para facilitar buscas no LinkedIn, destacando automaticamente palavras-chave importantes. Desenvolvida para solucionar um problema real meu e das minhas colegas de trabalho durante análises de perfis. A solução aumenta a produtividade de quem lida com grandes volumes de texto.',
        description_en: 'A minimalist and responsive interface, with customizable colors and a focus on performance and user experience. I created it during my internship to facilitate searches on LinkedIn, automatically highlighting important keywords. Developed to solve a real problem for me and my colleagues during profile analyses. The solution increases the productivity of those who deal with large volumes of text.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://chromewebstore.google.com/detail/destacador-de-palavras/nmefhbmcdilnmmidmnklfjjajppjnpin?hl=pt-BR&utm_source=ext_sidebar',
        extraContent: '<img src="imgs/Destacador.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">'    },
    {
        id: '2',
        title: 'Athena 2D Game',
        description_pt: 'Corrida infinita de progressão cujo o loop principal simula a viagem da deusa Atena em direção ao Olimpo. Athena é um jogo 2D desenvolvido inteiramente em JavaScript e inspirado na mitologia grega — um tema que sempre me fascinou. A ideia surgiu durante exercícios de cursos que propunham recriar o clássico jogo do Mario. Em vez de seguir o caminho tradicional, decidi transformar o desafio em algo pessoal, criando um projeto autoral alinhado aos meus próprios interesses. Além de programar toda a lógica do jogo — movimentação, colisões, física, animações e o loop de renderização — também desenvolvi todo o design visual do zero. Criei personagens, cenários e elementos gráficos no Canva, complementados com imagens gratuitas ajustadas para manter a consistência estética do universo. O projeto me permitiu unir programação, narrativa e direção visual em uma experiência completa, explorando tanto a criatividade quanto o raciocínio técnico no desenvolvimento de jogos.',
        description_en: 'An endless runner game with progression, where the main loop simulates the journey of the goddess Athena towards Mount Olympus. Athena is a 2D game developed entirely in JavaScript and inspired by Greek mythology — a theme that has always fascinated me. The idea arose during exercises from courses that proposed recreating the classic Mario game. Instead of following the traditional path, I decided to turn the challenge into something personal, creating an original project aligned with my own interests. In addition to programming all the game logic — movement, collisions, physics, animations, and the rendering loop — I also developed all the visual design from scratch. I created characters, backgrounds, and graphic elements using Canva, complemented with free images adjusted to maintain the aesthetic consistency of the universe. The project allowed me to combine programming, storytelling, and visual direction into a complete experience, exploring both creativity and technical reasoning in game development.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://shirlyalima.itch.io/athena',
        extraContent: '<img src="imgs/Athena.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">',
    },

    {
        id: '3',
        title: 'Recomendador de Livros - Book Recommender',
        description_pt: 'O Recomendador de Livros é um site desenvolvido para explorar, simultaneamente, o consumo de APIs RESTful e a aplicação de agentes de IA na recomendação de leituras personalizadas. O projeto integra a API da OpenLibrary, responsável por fornecer dados de livros reais, e a API da OpenAI, utilizada para gerar sugestões inteligentes com base nas preferências inseridas pelo usuário. A ideia surgiu da minha experiência em clubes do livro que participo e gerencio, onde sempre debatemos qual será nossa próxima leitura. Transformei essa necessidade em uma solução prática, capaz de combinar dados literários e interpretação feita por IA para gerar recomendações relevantes. Além do desenvolvimento técnico, também assumi o design completo do projeto. A interface foi construída com elementos criados no Canva, enquanto a imagem de fundo foi gerada por IA (Copilot), resultando em um visual moderno, coerente e agradável. A interface é totalmente responsiva e focada em usabilidade. Esse projeto uniu integração de APIs, lógica de recomendação, design de interface e agentes de IA, permitindo que eu aprofundasse minhas habilidades em desenvolvimento web e criação de experiências digitais funcionais e reais. ',
        description_en: 'The Book Recommender is a website developed to simultaneously explore the consumption of RESTful APIs and the application of AI agents in personalized reading recommendations. The project integrates the OpenLibrary API, which provides real book data, and the OpenAI API, used to generate intelligent suggestions based on user preferences. The idea arose from my experience in book clubs that I participate in and manage, where we always discuss what our next read will be. I turned this need into a practical solution capable of combining literary data and AI interpretation to generate relevant recommendations. In addition to the technical development, I also took on the complete design of the project. The interface was built with elements created in Canva, while the background image was generated by AI (Copilot), resulting in a modern, coherent, and pleasant visual. The interface is fully responsive and focused on usability. This project combined API integration, recommendation logic, interface design, and AI agents, allowing me to deepen my skills in web development and create functional and real digital experiences.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://shirlyalima.itch.io/athena',
        extraContent: '<img src="imgs/Recomendador.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">',
    },

    {
        id: '4',
        title: 'Site - RPG',
        description_pt: 'Este projeto foi criado para um amigo professor que integra atividades de RPG e matemática em sala de aula e buscava uma forma mais visual e envolvente de apresentar a narrativa do jogo aos alunos. A landing page foi desenvolvida com foco em contar uma história de maneira clara, imersiva e motivadora, servindo como porta de entrada para a experiência pedagógica. O objetivo principal foi construir uma interface limpa, elegante e interativa, facilitando a imersão e tornando o conteúdo mais acessível para estudantes do ensino fundamental. Todo o design e a estrutura foram planejados para apoiar o uso educacional, com elementos visuais capazes de capturar a atenção sem comprometer a usabilidade. O site ainda está em desenvolvimento e evolui continuamente conforme as necessidades do cliente. Cada etapa é construída com zelo e atenção aos detalhes, garantindo que as funcionalidades e o visual se adaptem ao contexto real de sala de aula. Embora a codificação seja minha responsabilidade, o design foi pensado em conjunto com o cliente, utilizando imagens criadas por ele e ajustadas para manter coerência estética. O resultado é uma ferramenta intuitiva, envolvente e alinhada ao propósito pedagógico.',
        description_en: 'This project was created for a friend who is a teacher and integrates RPG and mathematics activities in the classroom. He was looking for a more visual and engaging way to present the game narrative to students. The landing page was developed with a focus on telling a story in a clear, immersive, and motivating way, serving as an entry point for the educational experience. The main objective was to build a clean, elegant, and interactive interface that facilitates immersion and makes the content more accessible for elementary school students. The entire design and structure were planned to support educational use, with visual elements capable of capturing attention without compromising usability. The site is still under development and continuously evolves according to the needs of the client. Each stage is built with care and attention to detail, ensuring that the functionalities and visuals adapt to the real classroom context. Although I am responsible for the coding, the design was conceived in collaboration with the client, using images created by him and adjusted to maintain aesthetic coherence. The result is an intuitive, engaging tool aligned with the pedagogical purpose.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://shirlyalima.github.io/desvendando-os-segredos-da-escola/index.html',
        extraContent: '<img src="imgs/RPG-2.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">'
    },
    
    {
        id: '5',
        title: 'Site - Comercial',
        description_pt: 'Este foi o primeiro site comercial que desenvolvi. Embora o projeto original que me inspirou sugerisse a criação de um site para dentista, decidi adaptá-lo para algo mais alinhado à minha realidade. Criei, então, uma versão personalizada, utilizando fotos escolhidas por mim, paleta de cores própria e descrições que fariam sentido caso o site fosse realmente voltado para um serviço meu. O objetivo foi transformar um exercício técnico em um projeto mais autêntico, explorando identidade visual, organização de conteúdo e apresentação profissional. Essa abordagem me permitiu trabalhar tanto o design quanto a estrutura funcional de um site comercial, construindo uma página responsiva, com interface minimalista e focada na experiência do usuário.',
        description_en: 'This was the first commercial website I developed. Although the original project that inspired me suggested creating a site for a dentist, I decided to adapt it to something more aligned with my reality. I created a personalized version, using photos chosen by me, my own color palette, and descriptions that would make sense if the site were actually aimed at a service of mine. The goal was to transform a technical exercise into a more authentic project, exploring visual identity, content organization, and professional presentation. This approach allowed me to work on both the design and functional structure of a commercial website, building a responsive page with a minimalist interface focused on user experience.',
        stack: ['HTML', 'CSS'],
        demoLink: 'https://shirlyalima.github.io/aulas-de-ingles/',
        extraContent: '<img src="/imgs/Aulas_2.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">'
    },

    {id: '6',
        title: 'Jogo Athmosphere',
        description_pt: 'Atmosphere é um jogo da memória desenvolvido para praticar e aprimorar minhas habilidades em JavaScript. Inspirado no livro Atmosfera, de Taylor Jenkins Reid, o projeto explora uma temática espacial leve e envolvente, tornando a experiência visualmente agradável enquanto eu consolidava fundamentos de lógica de programação. O jogo foi construído inteiramente com JavaScript puro, sem frameworks, o que me permitiu aprofundar o entendimento de manipulação do DOM, eventos, estados e fluxo de jogo. O objetivo é simples e clássico: encontrar pares de cartas idênticas, testando memória e concentração — mas o foco do projeto estava em estruturar uma lógica clara, eficiente e fácil de expandir. Além da implementação, trabalhei no design visual do zero. Criei cartas temáticas, paleta de cores harmoniosa e uma interface simples e intuitiva, garantindo acessibilidade e boa experiência para o usuário. O Canva foi utilizado para compor a identidade estética, mantendo coerência com a proposta espacial da narrativa. Atmosfera foi meu primeiro jogo e um marco importante no meu aprendizado. Ele uniu lógica, design e narrativa em um só projeto e abriu caminho para que eu continuasse explorando a criação de jogos simples, interativos e visualmente atraentes na web.',
        description_en: 'Atmosphere is a memory game developed to practice and enhance my JavaScript skills. Inspired by the book Atmosphere by Taylor Jenkins Reid, the project explores a light and engaging space theme, making the experience visually pleasant while I consolidated programming logic fundamentals. The game was built entirely with pure JavaScript, without frameworks, which allowed me to deepen my understanding of DOM manipulation, events, states, and game flow. The objective is simple and classic: to find pairs of identical cards, testing memory and concentration — but the focus of the project was on structuring clear, efficient, and easily expandable logic. In addition to the implementation, I worked on the visual design from scratch. I created thematic cards, a harmonious color palette, and a simple and intuitive interface, ensuring accessibility and a good user experience. Canva was used to compose the aesthetic identity, maintaining coherence with the space theme of the narrative. Atmosphere was my first game and an important milestone in my learning. It combined logic, design, and narrative in one project and paved the way for me to continue exploring the creation of simple, interactive, and visually appealing games on the web.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://shirlyalima.itch.io/atmosphere-memory-game',
        extraContent: '<img src="imgs/Atmosphere2.png" alt="Mockup do Projeto" style="width:70%; margin-bottom: 20px; border-radius: 8px;">'
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
        'home-description': 'Dev de Jogos JS • Agentes de IA • Criatividade & Tecnologia.',
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
        'heading-texto': '<h3><p>Estudo Análise e Desenvolvimento de Sistemas e sou pós-graduada em Letras, duas áreas que me ensinaram a pensar com lógica, mas também com criatividade. Gosto de transformar ideias em interfaces funcionais e intuitivas, explorando o lado criativo do desenvolvimento web.</p><p>Sou fascinada por jogos: eles me inspiram a criar experiências digitais envolventes, onde cada detalhe importa, do design à interação.</p><p>Além disso, tenho grande interesse por IA aplicada, especialmente no desenvolvimento de agentes e ferramentas capazes de interpretar contexto e ajudar usuários em tarefas reais.</p><p>Meu objetivo é continuar criando experiências digitais que conectem tecnologia, criatividade e propósito, projetos que unam lógica, imaginação e boas histórias.</p></h3>',
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
        'proj5-tag-2': 'CSS',

        'proj6-title': 'Jogo Atmosphere',
        'proj6-desc': 'Jogo da memória desenvolvido para praticar habilidades em JavaScript.',
        'proj6-tag-1': 'HTML',
        'proj6-tag-2': 'CSS',
        'proj6-tag-3': 'JavaScript'


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
        'home-description': '    JS Game Dev • AI Agents • Creativity & Technology.',
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
        'heading-texto': '<h3><p>I study Systems Analysis and Development and have a postgraduate degree in Literature, two areas that have taught me to think logically, but also creatively. I enjoy transforming ideas into functional and intuitive interfaces, exploring the creative side of web development.</p><p>I am fascinated by games: they inspire me to create engaging digital experiences where every detail matters, from design to interaction.</p><p>In addition, I have a great interest in applied AI, especially in the development of agents and tools capable of interpreting context and assisting users in real-world tasks.</p><p>My goal is to continue creating digital experiences that connect technology, creativity, and purpose; projects that unite logic, imagination, and good stories.</p></h3>',
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
        'proj5-tag-2': 'CSS',

        'proj6-title': 'Atmosphere Game',
        'proj6-desc': 'A memory game developed to practice JavaScript skills.',
        'proj6-tag-1': 'HTML',
        'proj6-tag-2': 'CSS',
        'proj6-tag-3': 'JavaScript'


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