import type { Locale } from "@/i18n/config";

const pt = {
  nav: {
    home: "Home",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  theme: {
    toggle: "Alternar tema claro/escuro",
  },
  hero: {
    availability: "Disponível para oportunidades e projetos",
    intro:
      "Construo produtos SaaS e aplicações web de ponta a ponta — do banco de dados à interface. Trabalho em produtos próprios, projetos diretos para clientes e estou aberto a oportunidades em equipes de tecnologia.",
    seeProjects: "Ver projetos",
    getInTouch: "Entrar em contato",
    downloadCv: "Baixar CV",
  },
  home: {
    featuredEyebrow: "Portfólio",
    featuredTitle: "Projetos em destaque",
    featuredDescription:
      "Case studies com contexto, decisões técnicas e problemas reais resolvidos.",
    viewAll: "Ver todos",
    aboutEyebrow: "Sobre",
    aboutTitle: "Quem sou eu",
    card1Title: "Full-stack de verdade",
    card1Text:
      "Do backend em .NET/C# ao frontend em React, Angular e Next.js, passando por MySQL/PostgreSQL, Docker e integrações como Stripe.",
    card2Title: "Sempre estudando",
    card2Text:
      "Graduando em Ciência da Computação (UNINTER) e em Análise e Desenvolvimento de Sistemas (PUCPR), unindo base acadêmica com prática constante em projetos reais. Inglês C2.",
    card3Title: "Produtos e clientes",
    card3Text:
      "Trabalho tanto em produtos próprios (como um SaaS multi-tenant) quanto em projetos sob medida para clientes.",
    aboutLink: "Conhecer minha trajetória completa",
    ctaTitle: "Tem um projeto em mente — ou uma vaga na sua equipe?",
    ctaText:
      "Atendo clientes que precisam de um produto funcional, de MVPs a sistemas completos, e estou aberto a oportunidades em equipes de tecnologia. Vamos conversar.",
    ctaButton: "Entrar em contato",
  },
  projectsPage: {
    metaTitle: "Projetos",
    metaDescription:
      "Case studies de projetos full-stack: SaaS multi-tenant, aplicações .NET, React, Angular e TanStack Start.",
    eyebrow: "Portfólio",
    title: "Projetos",
    description:
      "Cada projeto abaixo tem um case study completo: o problema, as decisões de arquitetura e os desafios técnicos resolvidos no caminho. Filtre por stack para explorar.",
    filterAll: "Todos",
    empty: "Nenhum projeto encontrado com essa stack.",
  },
  projectCard: {
    viewCaseStudy: "Ver case study",
  },
  caseStudy: {
    backToProjects: "Todos os projetos",
    label: "Case study",
    contextTitle: "Contexto e problema",
    decisionsTitle: "Stack e decisões técnicas",
    challengesTitle: "Desafios técnicos resolvidos",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    resultTitle: "Resultado",
    nextProject: "Próximo projeto",
    metaSuffix: "Case Study",
  },
  about: {
    metaTitle: "Sobre",
    metaDescription:
      "Trajetória, formação e forma de trabalho — Matheus Bulzani, desenvolvedor full-stack em Porto, Portugal.",
    eyebrow: "Sobre",
    roleLine: "Full-stack Developer, baseado em Porto, Portugal.",
    downloadCv: "Baixar CV",
    bio1: "Sou desenvolvedor full-stack e trabalho de forma independente, como pessoa física — sem empresa no meio do caminho. Meu foco é construir aplicações completas: do banco de dados e das regras de negócio no backend até interfaces rápidas e bem acabadas no frontend.",
    bio2: "Atuo em duas frentes: produtos próprios, como um SaaS multi-tenant de gestão para barbearias e salões de beleza, e projetos sob medida para clientes, como sistemas para imobiliárias e aplicações para marcas de cosméticos. Essa combinação me dá tanto a visão de produto (o que vale a pena construir) quanto a disciplina de entrega para terceiros (prazo, comunicação e manutenção). Também estou aberto a oportunidades em equipes de tecnologia, onde essa experiência de dono de projeto se traduz em autonomia e responsabilidade pelo que entrego.",
    bio3: "Gosto de problemas reais: um bug de stale closure que corrompia agendamentos, migrações de banco que precisavam rodar sem perder dados, breaking changes de bibliotecas no meio do desenvolvimento. Os case studies dos meus projetos documentam exatamente esse tipo de situação — e como resolvi cada uma.",
    experienceTitle: "Experiência",
    iatecRole:
      "Instituto Adventista de Tecnologia (IATec) — Estágio em Desenvolvimento de Sistemas",
    iatecPeriod: "Jan 2025 — Set 2025",
    iatecText:
      "Desenvolvimento de aplicações web corporativas com Angular 20: componentes modulares, injeção de dependência, services e data binding avançado. Interfaces responsivas com HTML5, CSS3 e Angular Material, seguindo diretrizes de usabilidade. Docker para containerização e padronização de ambientes, além de controle de versão com Git, code review, testes e deploy contínuo — com foco em boas práticas de arquitetura e clean code.",
    experienceNote: {
      before:
        "Além do estágio, meus projetos (SaaS multi-tenant, sistemas para clientes) são experiência prática contínua — detalhados nos ",
      link: "case studies",
      after: ".",
    },
    educationTitle: "Formação e idiomas",
    education: [
      {
        institution: "UNINTER",
        degree: "Bacharelado em Ciência da Computação",
        period: "2025 — 2029 (em andamento)",
      },
      {
        institution: "PUCPR",
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
        period: "2025 — 2028 (em andamento)",
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "C2" },
      { name: "Espanhol", level: "A1" },
      { name: "Francês", level: "A1" },
    ],
    brandTitle: "Contratação direta",
    brandText:
      "Sem empresa nem intermediário no processo: você contrata diretamente comigo, pessoa física, do orçamento à entrega — com comunicação clara, compromisso com qualidade técnica e responsabilidade de ponta a ponta pelo que entrego.",
    workTitle: "Como trabalho",
    workText:
      "Arquitetura pensada antes do código (Clean Architecture quando faz sentido), testes automatizados nos fluxos críticos, Docker para paridade de ambientes e comunicação clara durante todo o projeto.",
    forWhoTitle: "Para quem",
    forWhoText:
      "Clientes que precisam de um MVP, sistema interno ou SaaS completo — e equipes de tecnologia buscando um desenvolvedor full-stack que assume o problema de ponta a ponta, do banco à interface.",
    stackTitle: "Stack completa",
    stackCategories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Banco de dados",
      infra: "Infra e integrações",
    },
    ctaTitle: "Quer trabalhar comigo?",
    ctaText: "Veja os case studies dos meus projetos ou entre em contato direto.",
    ctaProjects: "Ver projetos",
    ctaContact: "Entrar em contato",
  },
  contact: {
    metaTitle: "Contato",
    metaDescription:
      "Entre em contato com Matheus Bulzani — desenvolvedor full-stack em Porto, Portugal. Email, WhatsApp, LinkedIn e GitHub.",
    eyebrow: "Contato",
    title: "Vamos conversar",
    description:
      "Tem um projeto, uma ideia ou uma vaga? Me mande uma mensagem — respondo rápido.",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "Email",
    emailPlaceholder: "voce@exemplo.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Conte sobre seu projeto...",
    submit: "Enviar mensagem",
    sentNote:
      "Seu cliente de email foi aberto com a mensagem pronta. Se preferir, escreva diretamente para",
    mailSubjectPrefix: "Contato via site",
    channelsTitle: "Canais diretos",
    whatsappValue: "Conversar agora",
    linkedinValue: "Perfil profissional",
    githubValue: "Repositórios e código",
    footerNote:
      "Baseado em Porto, Portugal, disponível para trabalho remoto e projetos em qualquer fuso horário.",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    workTogether: "Vamos trabalhar juntos →",
  },
  notFound: {
    label: "Erro 404",
    title: "Página não encontrada",
    text: "O endereço que você tentou acessar não existe ou foi movido.",
    backHome: "Voltar para a home",
  },
  meta: {
    description:
      "Desenvolvedor full-stack em Porto, Portugal. Construo produtos SaaS e aplicações web com .NET/C#, React, Angular, Next.js e MySQL/PostgreSQL — disponível para projetos de clientes e oportunidades em equipes de tecnologia.",
    ogLocale: "pt_PT",
  },
};

const en: typeof pt = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  theme: {
    toggle: "Toggle light/dark theme",
  },
  hero: {
    availability: "Available for opportunities and projects",
    intro:
      "I build SaaS products and web applications end to end — from database to interface. I work on my own products, direct client projects, and I'm open to opportunities on tech teams.",
    seeProjects: "View projects",
    getInTouch: "Get in touch",
    downloadCv: "Download CV",
  },
  home: {
    featuredEyebrow: "Portfolio",
    featuredTitle: "Featured projects",
    featuredDescription:
      "Case studies with context, technical decisions, and real problems solved.",
    viewAll: "View all",
    aboutEyebrow: "About",
    aboutTitle: "Who I am",
    card1Title: "Truly full-stack",
    card1Text:
      "From .NET/C# backends to React, Angular, and Next.js frontends, through MySQL/PostgreSQL, Docker, and integrations like Stripe.",
    card2Title: "Always learning",
    card2Text:
      "Pursuing degrees in Computer Science (UNINTER) and Systems Analysis and Development (PUCPR), combining academic foundations with constant practice on real projects. English C2.",
    card3Title: "Products and clients",
    card3Text:
      "I work both on my own products (like a multi-tenant SaaS) and on tailor-made projects for clients.",
    aboutLink: "See my full journey",
    ctaTitle: "Have a project in mind — or an opening on your team?",
    ctaText:
      "I serve clients who need a working product, from MVPs to complete systems, and I'm open to opportunities on tech teams. Let's talk.",
    ctaButton: "Get in touch",
  },
  projectsPage: {
    metaTitle: "Projects",
    metaDescription:
      "Full-stack project case studies: multi-tenant SaaS, .NET, React, Angular, and TanStack Start applications.",
    eyebrow: "Portfolio",
    title: "Projects",
    description:
      "Every project below has a full case study: the problem, the architecture decisions, and the technical challenges solved along the way. Filter by stack to explore.",
    filterAll: "All",
    empty: "No projects found for this stack.",
  },
  projectCard: {
    viewCaseStudy: "View case study",
  },
  caseStudy: {
    backToProjects: "All projects",
    label: "Case study",
    contextTitle: "Context and problem",
    decisionsTitle: "Stack and technical decisions",
    challengesTitle: "Technical challenges solved",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultTitle: "Outcome",
    nextProject: "Next project",
    metaSuffix: "Case Study",
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "Journey, education, and how I work — Matheus Bulzani, full-stack developer in Porto, Portugal.",
    eyebrow: "About",
    roleLine: "Full-stack Developer, based in Porto, Portugal.",
    downloadCv: "Download CV",
    bio1: "I'm an independent full-stack developer working directly as an individual — no company in between. My focus is building complete applications: from the database and business rules on the backend to fast, polished interfaces on the frontend.",
    bio2: "I work on two fronts: my own products, like a multi-tenant management SaaS for barbershops and beauty salons, and tailor-made projects for clients, like real estate systems and applications for cosmetics brands. This combination gives me both product vision (what is worth building) and delivery discipline (deadlines, communication, and maintenance). I'm also open to opportunities on tech teams, where this project-owner experience translates into autonomy and accountability for what I ship.",
    bio3: "I like real problems: a stale closure bug corrupting bookings, database migrations that had to run without losing data, library breaking changes in the middle of development. My project case studies document exactly this kind of situation — and how I solved each one.",
    experienceTitle: "Experience",
    iatecRole:
      "Instituto Adventista de Tecnologia (IATec) — Systems Development Intern",
    iatecPeriod: "Jan 2025 — Sep 2025",
    iatecText:
      "Development of corporate web applications with Angular 20: modular components, dependency injection, services, and advanced data binding. Responsive interfaces with HTML5, CSS3, and Angular Material, following usability guidelines. Docker for containerization and environment standardization, plus version control with Git, code review, testing, and continuous deployment — focused on architecture best practices and clean code.",
    experienceNote: {
      before:
        "Beyond the internship, my own projects (multi-tenant SaaS, client systems) are ongoing hands-on experience — detailed in the ",
      link: "case studies",
      after: ".",
    },
    educationTitle: "Education and languages",
    education: [
      {
        institution: "UNINTER",
        degree: "Bachelor's Degree in Computer Science",
        period: "2025 — 2029 (in progress)",
      },
      {
        institution: "PUCPR",
        degree: "Associate Degree in Systems Analysis and Development",
        period: "2025 — 2028 (in progress)",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "C2" },
      { name: "Spanish", level: "A1" },
      { name: "French", level: "A1" },
    ],
    brandTitle: "Direct engagement",
    brandText:
      "No company or middleman in the process: you work directly with me, from quote to delivery — with clear communication, a commitment to technical quality, and end-to-end accountability for what I ship.",
    workTitle: "How I work",
    workText:
      "Architecture designed before code (Clean Architecture when it makes sense), automated tests on critical flows, Docker for environment parity, and clear communication throughout the project.",
    forWhoTitle: "Who it's for",
    forWhoText:
      "Clients who need an MVP, an internal system, or a complete SaaS — and tech teams looking for a full-stack developer who owns the problem end to end, from database to interface.",
    stackTitle: "Full stack",
    stackCategories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Databases",
      infra: "Infra and integrations",
    },
    ctaTitle: "Want to work with me?",
    ctaText: "Check out my project case studies or reach out directly.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
  },
  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Get in touch with Matheus Bulzani — full-stack developer in Porto, Portugal. Email, WhatsApp, LinkedIn, and GitHub.",
    eyebrow: "Contact",
    title: "Let's talk",
    description:
      "Have a project, an idea, or a job opening? Send me a message — I reply fast.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    submit: "Send message",
    sentNote:
      "Your email client was opened with the message ready. If you prefer, write directly to",
    mailSubjectPrefix: "Contact via website",
    channelsTitle: "Direct channels",
    whatsappValue: "Chat now",
    linkedinValue: "Professional profile",
    githubValue: "Repositories and code",
    footerNote:
      "Based in Porto, Portugal, available for remote work and projects in any timezone.",
  },
  footer: {
    rights: "All rights reserved.",
    workTogether: "Let's work together →",
  },
  notFound: {
    label: "Error 404",
    title: "Page not found",
    text: "The address you tried to reach doesn't exist or has been moved.",
    backHome: "Back to home",
  },
  meta: {
    description:
      "Full-stack developer in Porto, Portugal. I build SaaS products and web applications with .NET/C#, React, Angular, Next.js, and MySQL/PostgreSQL — available for client projects and opportunities on tech teams.",
    ogLocale: "en_US",
  },
};

export type Dictionary = typeof pt;

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
