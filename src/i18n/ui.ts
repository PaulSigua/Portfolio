export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",

    // Hero
    "hero.available": "Disponible para trabajar",
    "hero.greeting": "Hola, soy",
    "hero.name": "Paúl Sigua",
    "hero.eyebrow": "Frontend Engineer & Full Stack Dev",
    "hero.title.main": "Desarrollador Frontend",
    "hero.title.highlight": "& Full Stack Engineer.",
    "hero.description":
      "Especialista en desarrollo Frontend con Angular, React y TypeScript, complementado con sólida experiencia Full Stack en JavaScript, PHP y WordPress. Construyo interfaces dinámicas, código limpio y sistemas escalables.",
    "hero.intro":
      'Soy <strong>desarrollador Frontend & Full Stack</strong> enfocado en crear experiencias interactivas modernas con <span class="text-subtle font-semibold">Angular, React, TypeScript, PHP y WordPress</span>. Ayudo a negocios y equipos a construir productos web rápidos, accesibles y de alto impacto.',
    "hero.passion":
      "Disfruto transformar requerimientos complejos en interfaces fluidas y arquitecturas robustas que garantizan una experiencia de usuario impecable.",
    "hero.cta": "Disponible para proyectos freelance y equipos remotos 🚀",
    "hero.cta.projects": "Explorar Proyectos",
    "hero.cta.contact": "Contáctame",
    "hero.badge.card": "Disponible para proyectos freelance y roles remotos",
    "hero.badge.action": "Hablemos",
    "hero.location": "Cuenca, Ecuador 🇪🇨",
    "hero.avatar": "Avatar de Paúl Sigua",

    // Hero HTTP Status & Code Window
    "hero.status.200": "200 OK • UI Renderizada",
    "hero.status.201": "201 Created • Componente Activo",
    "hero.status.404": "404 Not Found • 0 Errores UI",
    "hero.status.401": "401 Auth • Token Validado",
    "hero.status.304": "304 Cache • Carga Instantánea",
    "hero.code.role": "Frontend & Full Stack Dev",
    "hero.code.stack": "TS · JS · PHP · Angular · React · WordPress",
    "hero.code.terminal": "HTTP/2.0 200 OK • Core Web Vitals 99.9%",

    // Experiencia
    "experience.badge": "Experiencia",
    "experience.title": "Experiencia Laboral",
    "experience.subtitle": "Trayectoria profesional y proyectos destacados en los que he colaborado.",
    "experience.current": "Actualidad",
    "experience.footer.text": "¿Tienes alguna duda sobre mi trayectoria?",
    "experience.footer.cta": "Contáctame",
    "experience.visitCompany": "Visitar empresa",
    "experience.job1.date": "Noviembre 2025 - Actualidad",
    "experience.job1.title": "Desarrollador Frontend",
    "experience.job1.company": "MyCodedMind",
    "experience.job1.description":
      "Especialización en desarrollo Frontend creando experiencias web atractivas y funcionales con Angular, React y WordPress. Construcción de componentes modulares, consumo de APIs y optimización de rendimiento.",
    "experience.job2.date": "Abril 2024 - 2025",
    "experience.job2.title": "Desarrollador de Software",
    "experience.job2.company": "StarFlowers Cia. Ltda.",
    "experience.job2.description":
      "Desarrollo de interfaces con Angular, integración con backend FastAPI y bases de datos SQL. Mantenimiento y optimización de sistemas críticos con alta disponibilidad.",
    "experience.job3.date": "Septiembre 2021 - Agosto 2025",
    "experience.job3.title": "Formación Profesional",
    "experience.job3.company": "Universidad Politécnica Salesiana",
    "experience.job3.description":
      "Proyectos de ingeniería de software aplicando arquitecturas frontend y backend, TypeScript, algoritmos complejos y patrones de diseño modernos.",

    // Proyectos
    "projects.badge": "Proyectos Seleccionados",
    "projects.title": "Proyectos Destacados",
    "projects.subtitle":
      "Selección de aplicaciones web, plataformas e-commerce y sistemas a medida desarrollados con altos estándares de calidad y rendimiento.",
    "projects.visit": "Ver Proyecto",
    "projects.viewCode": "Ver Código",
    "projects.thearomatrace.title": "The Aroma Trace",
    "projects.thearomatrace.badge": "WordPress & E-Commerce",
    "projects.thearomatrace.description":
      "Plataforma global de comercio electrónico para marketing olfativo y fragancias personalizadas. Desarrollo y personalización frontend con WordPress, WooCommerce, PHP y CSS.",
    "projects.thearomatrace.alt": "Captura de The Aroma Trace",
    "projects.ordania.title": "Ordania",
    "projects.ordania.badge": "Angular SaaS",
    "projects.ordania.description":
      "Software de agendamiento y gestión clínica para profesionales de la salud. Desarrollado con Angular, TypeScript y Tailwind CSS con arquitectura reactiva modular.",
    "projects.ordania.alt": "Captura de Ordania",
    "projects.kea.title": "Kea",
    "projects.kea.badge": "Frontend App",
    "projects.kea.description":
      "Sistema integral de gestión escolar para el control de calificaciones, asistencias y roles administrativos en tiempo real con Angular y TypeScript.",
    "projects.kea.alt": "Captura de Kea",

    // Servicios
    "services.badge": "Proceso & Servicios",
    "services.title": "Cómo Trabajo",
    "services.subtitle":
      "Un flujo de trabajo transparente, ágil y probado para llevar tu proyecto desde la idea inicial hasta producción con calidad garantizada.",
    "services.step1.num": "01",
    "services.step1.title": "Descubrimiento & Arquitectura UI",
    "services.step1.desc":
      "Reunión 1 a 1 de 30-45 min para entender tu visión, definir estructura de componentes, stack ideal (Angular/React/WordPress) y objetivos clave.",
    "services.step1.badge": "Kickoff",
    "services.step2.num": "02",
    "services.step2.title": "Propuesta Técnica & Roadmap",
    "services.step2.desc":
      "Diseño de arquitectura (Frontend, Backend, APIs), cronograma claro con entregables por hitos y presupuesto transparente sin costos ocultos.",
    "services.step2.badge": "Planificación",
    "services.step3.num": "03",
    "services.step3.title": "Desarrollo Frontend & Integración",
    "services.step3.desc":
      "Construcción iterativa con código limpio (TypeScript, Angular, React, PHP). Demos funcionales periódicos para revisar avances y retroalimentar.",
    "services.step3.badge": "Construcción",
    "services.step4.num": "04",
    "services.step4.title": "Pruebas, QA & Optimización",
    "services.step4.desc":
      "Pruebas exhaustivas de responsive, optimización de velocidad de carga, validación de endpoints y accesibilidad web.",
    "services.step4.badge": "Calidad",
    "services.step5.num": "05",
    "services.step5.title": "Despliegue & Soporte Continuo",
    "services.step5.desc":
      "Puesta en marcha en producción (Vercel, Cloud, VPS o Hosting), entrega de código fuente documentado y acompañamiento post-lanzamiento.",
    "services.step5.badge": "Producción",

    "services.service1.title": "Desarrollo Frontend React & Angular",
    "services.service1.description":
      "Construyo aplicaciones SPA fluidas, componentes modulares en TypeScript y arquitecturas escalables con React y Angular.",
    "services.service2.title": "Desarrollo WordPress & PHP",
    "services.service2.description":
      "Personalizo y desarrollo sitios web de alto impacto, temas a medida, plugins y plataformas WooCommerce con PHP y JavaScript.",
    "services.service3.title": "Integración Full Stack & APIs",
    "services.service3.description":
      "Conecto interfaces Frontend con servicios Backend robustos, autenticación segura y consumo eficiente de APIs REST.",
    "services.service4.title": "Diseño UI/UX & Tailwind CSS",
    "services.service4.description":
      "Transformo requerimientos en interfaces visuales modernas, adaptativas y con animaciones sutiles cuidando cada detalle visual.",
    "services.service5.title": "Refactorización & Solución de Bugs",
    "services.service5.description":
      "Diagnostico y resuelvo errores complejos en aplicaciones web, optimizando rendimiento y migrando código a TypeScript.",
    "services.cta.title": "¿Tienes un proyecto en mente?",
    "services.cta.description":
      "Estoy disponible para proyectos freelance y roles remotos. Hablemos sobre cómo puedo ayudarte a construir una gran experiencia digital.",
    "services.cta.button": "Agendar Reunión",

    // Modales & General
    "contact.modal.title": "Opciones de Contacto",
    "contact.modal.message": "¿Por qué medio prefieres contactarme?",
    "contact.modal.email": "Enviar Correo Electrónico",
    "contact.modal.linkedin": "Conectar en LinkedIn",
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.system": "Sistema",
    "theme.select": "Elige tema",
    "language.select": "Cambiar idioma",
    "header.color-selector": "Elige tu color",
  },
  en: {
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero
    "hero.available": "Available for work",
    "hero.greeting": "Hi, I'm",
    "hero.name": "Paúl Sigua",
    "hero.eyebrow": "Frontend Engineer & Full Stack Dev",
    "hero.title.main": "Frontend Developer",
    "hero.title.highlight": "& Full Stack Engineer.",
    "hero.description":
      "High-performance Frontend specialist with Angular, React, and TypeScript, backed by strong Full Stack expertise in JavaScript, PHP, and WordPress. Crafting fluid user interfaces, clean architectures, and scalable web solutions.",
    "hero.intro":
      'I’m a <strong>Frontend & Full Stack Developer</strong> specialized in building modern web applications using <span class="text-subtle font-semibold">Angular, React, TypeScript, PHP, and WordPress</span>. I help teams and businesses create fast, accessible, and high-impact digital products.',
    "hero.passion":
      "I love transforming complex requirements into delightful interfaces while ensuring top-tier performance and solid architecture.",
    "hero.cta": "Open for freelance projects and remote teams 🚀",
    "hero.cta.projects": "Explore Projects",
    "hero.cta.contact": "Let's Talk",
    "hero.badge.card": "Available for freelance projects & remote roles",
    "hero.badge.action": "Get in touch",
    "hero.location": "Cuenca, Ecuador 🇪🇨",
    "hero.avatar": "Paúl Sigua's Avatar",

    // Hero HTTP Status & Code Window
    "hero.status.200": "200 OK • UI Rendered",
    "hero.status.201": "201 Created • Component Active",
    "hero.status.404": "404 Not Found • 0 UI Bugs",
    "hero.status.401": "401 Auth • Token Validated",
    "hero.status.304": "304 Cache • Instant Load",
    "hero.code.role": "Frontend & Full Stack Dev",
    "hero.code.stack": "TS · JS · PHP · Angular · React · WordPress",
    "hero.code.terminal": "HTTP/2.0 200 OK • Core Web Vitals 99.9%",

    // Experience
    "experience.badge": "Experience",
    "experience.title": "Work Experience",
    "experience.subtitle": "Professional journey and featured projects I have contributed to.",
    "experience.current": "Present",
    "experience.footer.text": "Have any questions about my background?",
    "experience.footer.cta": "Contact Me",
    "experience.visitCompany": "Visit company",
    "experience.job1.date": "November 2025 - Present",
    "experience.job1.title": "Frontend Developer",
    "experience.job1.company": "MyCodedMind",
    "experience.job1.description":
      "Frontend engineering building responsive web experiences with Angular, React, and WordPress. Modular component design, API consumption, and speed optimization.",
    "experience.job2.date": "April 2024 - 2025",
    "experience.job2.title": "Software Developer",
    "experience.job2.company": "StarFlowers Cia. Ltda.",
    "experience.job2.description":
      "Interface engineering with Angular, backend integration with FastAPI, and SQL databases. Maintenance and performance improvements on high-reliability systems.",
    "experience.job3.date": "September 2021 - August 2025",
    "experience.job3.title": "Professional Training",
    "experience.job3.company": "Salesian Polytechnic University",
    "experience.job3.description":
      "Software engineering coursework and projects applying frontend & backend architectures, TypeScript, advanced algorithms, and modern UI patterns.",

    // Projects
    "projects.badge": "Featured Projects",
    "projects.title": "Featured Projects",
    "projects.subtitle":
      "Curated selection of web applications, e-commerce platforms, and custom software systems built with high engineering and design standards.",
    "projects.visit": "View Project",
    "projects.viewCode": "View Code",
    "projects.thearomatrace.title": "The Aroma Trace",
    "projects.thearomatrace.badge": "WordPress & E-Commerce",
    "projects.thearomatrace.description":
      "International e-commerce platform for olfactory marketing. Developed and customized responsive frontend with WordPress, WooCommerce, PHP, and modern CSS.",
    "projects.thearomatrace.alt": "Screenshot of The Aroma Trace",
    "projects.ordania.title": "Ordania",
    "projects.ordania.badge": "Angular SaaS",
    "projects.ordania.description":
      "Healthcare scheduling and clinic practice management SaaS. Engineered with Angular, TypeScript, and Tailwind CSS using a reactive modular architecture.",
    "projects.ordania.alt": "Screenshot of Ordania",
    "projects.kea.title": "Kea",
    "projects.kea.badge": "Frontend App",
    "projects.kea.description":
      "Comprehensive school and academic management application to streamline student grades, attendance, and administrative workflows in real time with Angular.",
    "projects.kea.alt": "Screenshot of Kea",

    // Services
    "services.badge": "Process & Services",
    "services.title": "How I Work",
    "services.subtitle":
      "A transparent, agile, and proven workflow designed to take your ideas from initial discovery to high-performance, production-ready software.",
    "services.step1.num": "01",
    "services.step1.title": "Discovery & UI Architecture",
    "services.step1.desc":
      "1-on-1 session to analyze your needs, define component structures, recommend technical stacks (Angular/React/WordPress), and align business goals.",
    "services.step1.badge": "Kickoff",
    "services.step2.num": "02",
    "services.step2.title": "Technical Proposal & Roadmap",
    "services.step2.desc":
      "Designing optimal architecture (Frontend, Backend, APIs), clear milestone roadmap with deliverables, and upfront transparent pricing.",
    "services.step2.badge": "Planning",
    "services.step3.num": "03",
    "services.step3.title": "Frontend Engineering & Integration",
    "services.step3.desc":
      "Iterative development with clean, typed code (TypeScript, Angular, React, PHP). Regular live demos to review progress and refine features.",
    "services.step3.badge": "Build",
    "services.step4.num": "04",
    "services.step4.title": "Testing, Performance & QA",
    "services.step4.desc":
      "Cross-browser and responsive testing, Core Web Vitals optimization, accessibility auditing, and API validation.",
    "services.step4.badge": "Quality",
    "services.step5.num": "05",
    "services.step5.title": "Deployment & Handover",
    "services.step5.desc":
      "Production deployment (Vercel, Cloud, VPS, Hosting), documented clean code handover, and post-launch support to ensure stability.",
    "services.step5.badge": "Production",

    "services.service1.title": "Frontend React & Angular Development",
    "services.service1.description":
      "I engineer dynamic SPAs, reusable TypeScript components, and scalable architectures with React and Angular.",
    "services.service2.title": "WordPress & PHP Engineering",
    "services.service2.description":
      "Custom WordPress theme and plugin development, WooCommerce integrations, and tailored PHP web applications built for speed and security.",
    "services.service3.title": "Full Stack & API Integration",
    "services.service3.description":
      "Seamlessly connecting frontend interfaces with robust backend services, secure authentication, and optimized REST APIs.",
    "services.service4.title": "UI/UX Design & Tailwind CSS",
    "services.service4.description":
      "Translating wireframes and ideas into pixel-perfect, responsive interfaces with fluid micro-interactions.",
    "services.service5.title": "Code Refactoring & Bug Fixing",
    "services.service5.description":
      "Diagnosing and resolving tricky frontend/backend bugs, optimizing performance, and migrating legacy codebases to TypeScript.",
    "services.cta.title": "Have a project in mind?",
    "services.cta.description":
      "I'm available for freelance projects, frontend consulting, and remote roles. Let's talk about how I can help you achieve your goals.",
    "services.cta.button": "Schedule a Call",

    // Modals & General
    "contact.modal.title": "Contact Options",
    "contact.modal.message": "How would you prefer to contact me?",
    "contact.modal.email": "Send an Email",
    "contact.modal.linkedin": "Connect on LinkedIn",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
    "theme.select": "Choose theme",
    "language.select": "Change language",
    "header.color-selector": "Choose your color",
  },
} as const;
