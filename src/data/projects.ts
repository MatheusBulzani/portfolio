import type { Locale } from "@/i18n/config";

export type ProjectTag =
  | ".NET"
  | "React"
  | "Angular"
  | "Next.js"
  | "SaaS"
  | "MySQL"
  | "TanStack"
  | "JavaScript";

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectDecision {
  title: string;
  description: string;
}

export interface ProjectDemoCredentials {
  email: string;
  password: string;
  note?: string;
}

/** Projeto já resolvido para um idioma — o que os componentes consomem. */
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  featured: boolean;
  tags: ProjectTag[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  demoCredentials?: ProjectDemoCredentials;
  image: string;
  imageAlt: string;
  context: string[];
  decisions: ProjectDecision[];
  challenges: ProjectChallenge[];
  results: string[];
  metrics?: { label: string; value: string }[];
}

type Localized<T> = Record<Locale, T>;

/** Fonte dos projetos com todos os textos em PT e EN. */
interface ProjectSource {
  slug: string;
  title: string;
  year: string;
  featured: boolean;
  tags: ProjectTag[];
  stack: Localized<string[]>;
  liveUrl?: string;
  repoUrl?: string;
  image: string;
  subtitle: Localized<string>;
  description: Localized<string>;
  imageAlt: Localized<string>;
  demoCredentials?: {
    email: string;
    password: string;
    note: Localized<string>;
  };
  context: Localized<string[]>;
  decisions: Localized<ProjectDecision[]>;
  challenges: Localized<ProjectChallenge[]>;
  results: Localized<string[]>;
  metrics?: Localized<{ label: string; value: string }[]>;
}

const sources: ProjectSource[] = [
  {
    slug: "essencia-do-estilo",
    title: "Essência do Estilo",
    year: "2025",
    featured: true,
    tags: [".NET", "React", "SaaS", "MySQL"],
    stack: {
      pt: ["ASP.NET Core 8", "React 18", "MySQL", "EF Core", "Stripe", "Hangfire", "MailKit", "Docker Compose", "JWT"],
      en: ["ASP.NET Core 8", "React 18", "MySQL", "EF Core", "Stripe", "Hangfire", "MailKit", "Docker Compose", "JWT"],
    },
    liveUrl: "https://essenciadoestilo.com.br/",
    image: "/projects/essencia-do-estilo.png",
    subtitle: {
      pt: "SaaS multi-tenant de gestão para barbearias e salões de beleza — com painel administrativo completo",
      en: "Multi-tenant management SaaS for barbershops and beauty salons — with a complete admin panel",
    },
    description: {
      pt: "Plataforma SaaS multi-tenant para barbearias e salões: agendamentos, pagamentos com Stripe, painel admin de tenants, autenticação JWT e i18n PT/EN.",
      en: "Multi-tenant SaaS platform for barbershops and salons: bookings, Stripe payments, tenant admin panel, JWT authentication, and PT/EN i18n.",
    },
    imageAlt: {
      pt: "Página inicial da plataforma Essência do Estilo",
      en: "Essência do Estilo platform homepage",
    },
    demoCredentials: {
      email: "admin@teste.com",
      password: "123456",
      note: {
        pt: "Acesso de demonstração ao painel administrativo — entre e explore a plataforma à vontade.",
        en: "Demo access to the admin panel — log in and explore the platform freely.",
      },
    },
    context: {
      pt: [
        "Barbearias e salões de beleza costumam gerenciar agendamentos, clientes e pagamentos em planilhas, papel ou aplicativos genéricos que não conversam entre si. O Essência do Estilo nasceu para resolver isso: uma plataforma de gestão completa, pensada para o dia a dia desses negócios.",
        "O requisito central era o suporte a múltiplos tenants desde o início — cada estabelecimento com seus próprios dados, equipe, serviços e configurações, isolados dos demais, mas rodando sobre uma única infraestrutura.",
        "Além do produto usado pelos estabelecimentos e seus clientes, construí um painel administrativo separado, dedicado à operação do SaaS: criação e suspensão de tenants, acompanhamento de assinaturas, disparo de comunicações e monitoramento de rotinas em background. É o projeto mais completo que já desenvolvi.",
      ],
      en: [
        "Barbershops and beauty salons usually manage bookings, clients, and payments across spreadsheets, paper, or generic apps that don't talk to each other. Essência do Estilo was born to solve this: a complete management platform designed for the daily routine of these businesses.",
        "The core requirement was multi-tenant support from day one — each establishment with its own data, staff, services, and settings, isolated from the others, yet running on a single infrastructure.",
        "Beyond the product used by the establishments and their clients, I built a separate admin panel dedicated to operating the SaaS: creating and suspending tenants, tracking subscriptions, sending communications, and monitoring background routines. It's the most complete project I've built.",
      ],
    },
    decisions: {
      pt: [
        {
          title: "ASP.NET Core 8 + MySQL com EF Core",
          description:
            "Backend em ASP.NET Core 8 pela robustez do ecossistema .NET para regras de negócio complexas (agendamentos, comissões, assinaturas) e pela maturidade do EF Core para modelar o isolamento entre tenants no MySQL.",
        },
        {
          title: "React 18 no frontend",
          description:
            "SPA em React 18 para uma experiência fluida de agenda — arrastar horários, atualizar disponibilidade em tempo real e navegar entre telas sem recarregamento.",
        },
        {
          title: "Stripe e Stripe Connect",
          description:
            "Integração com Stripe para cobrança das assinaturas do SaaS e Stripe Connect para repasses aos estabelecimentos, evitando construir infraestrutura própria de pagamentos.",
        },
        {
          title: "Painel admin separado, stack compartilhada",
          description:
            "A administração do SaaS roda como aplicação separada com a mesma stack base, isolando permissões administrativas do produto voltado ao cliente final sem custo extra de contexto.",
        },
        {
          title: "Hangfire e MailKit na operação",
          description:
            "Rotinas recorrentes — sincronização de assinaturas com o Stripe, verificações de tenants, limpezas — rodam como jobs do Hangfire com dashboard e retry automático; e-mails transacionais (provisionamento, avisos de cobrança) saem via MailKit/SMTP.",
        },
        {
          title: "Docker Compose, i18n e testes",
          description:
            "Ambiente completo orquestrado com Docker Compose para paridade entre desenvolvimento e produção, internacionalização PT/EN desde o início e 17 testes automatizados cobrindo os fluxos críticos de agendamento e cobrança.",
        },
      ],
      en: [
        {
          title: "ASP.NET Core 8 + MySQL with EF Core",
          description:
            "ASP.NET Core 8 backend for the robustness of the .NET ecosystem in complex business rules (bookings, commissions, subscriptions) and EF Core's maturity for modeling tenant isolation on MySQL.",
        },
        {
          title: "React 18 on the frontend",
          description:
            "A React 18 SPA for a fluid scheduling experience — dragging time slots, updating availability in real time, and navigating between screens without reloads.",
        },
        {
          title: "Stripe and Stripe Connect",
          description:
            "Stripe integration for billing the SaaS subscriptions and Stripe Connect for payouts to establishments, avoiding building an in-house payments infrastructure.",
        },
        {
          title: "Separate admin panel, shared stack",
          description:
            "The SaaS administration runs as a separate application on the same base stack, isolating administrative permissions from the customer-facing product without extra context cost.",
        },
        {
          title: "Hangfire and MailKit for operations",
          description:
            "Recurring routines — subscription sync with Stripe, tenant checks, cleanups — run as Hangfire jobs with a dashboard and automatic retries; transactional emails (provisioning, billing notices) go out via MailKit/SMTP.",
        },
        {
          title: "Docker Compose, i18n, and tests",
          description:
            "The full environment is orchestrated with Docker Compose for dev/prod parity, PT/EN internationalization from the start, and 17 automated tests covering the critical booking and billing flows.",
        },
      ],
    },
    challenges: {
      pt: [
        {
          problem:
            "Bug intermitente no fluxo de agendamento: horários selecionados eram salvos com valores desatualizados, causado por uma stale closure dentro de um useEffect no React.",
          solution:
            "Mapeei as dependências reais do efeito, reestruturei o estado com refs e callbacks estáveis e eliminei a closure obsoleta — o agendamento passou a refletir sempre o horário efetivamente selecionado.",
        },
        {
          problem:
            "Migrações do EF Core geravam ALTER TABLE problemáticos no MySQL conforme o modelo multi-tenant evoluía, com risco de perda de dados e travamento de tabelas.",
          solution:
            "Revisei a modelagem das entidades e o pipeline de migrações, quebrando alterações destrutivas em etapas seguras e ajustando o mapeamento no EF Core para gerar DDL compatível com o MySQL.",
        },
        {
          problem:
            "Erros de compilação em C# após atualizações de dependências: a reflection usada pelo Hangfire quebrou com mudanças internas, e o Stripe.net v45 introduziu breaking changes na API.",
          solution:
            "Isolei os pontos de integração atrás de interfaces próprias, reorganizei os jobs do Hangfire em classes com contratos explícitos e estáveis, e migrei as chamadas do Stripe.net para a API v45, validando tudo com a suíte de testes.",
        },
        {
          problem:
            "A sincronização de assinaturas no painel admin precisava sobreviver a falhas transitórias do Stripe sem duplicar cobranças ou perder atualizações de estado dos tenants.",
          solution:
            "Modelei os jobs como operações idempotentes com verificação de estado antes de cada escrita, aproveitando o retry automático do Hangfire com segurança.",
        },
      ],
      en: [
        {
          problem:
            "Intermittent bug in the booking flow: selected time slots were saved with stale values, caused by a stale closure inside a React useEffect.",
          solution:
            "I mapped the effect's real dependencies, restructured the state with refs and stable callbacks, and eliminated the stale closure — bookings started always reflecting the actually selected time.",
        },
        {
          problem:
            "EF Core migrations generated problematic ALTER TABLE statements on MySQL as the multi-tenant model evolved, risking data loss and table locks.",
          solution:
            "I reviewed the entity modeling and the migration pipeline, breaking destructive changes into safe steps and adjusting the EF Core mapping to generate MySQL-compatible DDL.",
        },
        {
          problem:
            "C# compilation errors after dependency upgrades: the reflection used by Hangfire broke with internal changes, and Stripe.net v45 introduced breaking API changes.",
          solution:
            "I isolated the integration points behind my own interfaces, reorganized the Hangfire jobs into classes with explicit, stable contracts, and migrated the Stripe.net calls to the v45 API, validating everything with the test suite.",
        },
        {
          problem:
            "Subscription sync in the admin panel had to survive transient Stripe failures without duplicating charges or losing tenant state updates.",
          solution:
            "I modeled the jobs as idempotent operations with state checks before every write, safely leveraging Hangfire's automatic retries.",
        },
      ],
    },
    results: {
      pt: [
        "Plataforma multi-tenant em produção com autenticação JWT, agendamentos, pagamentos via Stripe/Stripe Connect e stubs prontos para integração com WhatsApp.",
        "Painel administrativo completo para operação do SaaS: gestão de tenants, assinaturas e comunicação, com rotinas em background monitoráveis via dashboard do Hangfire.",
        "Internacionalização PT/EN completa e 17 testes automatizados protegendo os fluxos críticos.",
      ],
      en: [
        "Multi-tenant platform in production with JWT authentication, bookings, Stripe/Stripe Connect payments, and stubs ready for WhatsApp integration.",
        "Complete admin panel for SaaS operations: tenant, subscription, and communication management, with background routines monitorable via the Hangfire dashboard.",
        "Full PT/EN internationalization and 17 automated tests protecting the critical flows.",
      ],
    },
    metrics: {
      pt: [
        { label: "Testes automatizados", value: "17" },
        { label: "Idiomas", value: "PT / EN" },
        { label: "Arquitetura", value: "Multi-tenant" },
      ],
      en: [
        { label: "Automated tests", value: "17" },
        { label: "Languages", value: "PT / EN" },
        { label: "Architecture", value: "Multi-tenant" },
      ],
    },
  },
  {
    slug: "esaint-cosmeticos",
    title: "Esaint Cosméticos",
    year: "2025",
    featured: true,
    tags: ["React", "TanStack", "MySQL"],
    stack: {
      pt: ["TanStack Start", "React", "Bun", "Prisma", "MySQL", "TypeScript"],
      en: ["TanStack Start", "React", "Bun", "Prisma", "MySQL", "TypeScript"],
    },
    liveUrl: "https://esaint.com.br/",
    image: "/projects/esaint-cosmeticos.png",
    subtitle: {
      pt: "Aplicação full-stack para marca brasileira de cosméticos",
      en: "Full-stack application for a Brazilian cosmetics brand",
    },
    description: {
      pt: "Site institucional com painel administrativo para produtos, linhas, distribuidores e depoimentos — TanStack Start + Prisma/MySQL.",
      en: "Institutional website with an admin panel for products, lines, distributors, and testimonials — TanStack Start + Prisma/MySQL.",
    },
    imageAlt: {
      pt: "Página inicial da Esaint Cosméticos",
      en: "Esaint Cosméticos homepage",
    },
    context: {
      pt: [
        "A Esaint, marca brasileira de cosméticos, precisava de uma presença digital que fosse além de um site estático: o catálogo de produtos, as linhas, a rede de distribuidores e os depoimentos mudam com frequência e precisavam ser gerenciados pela própria equipe.",
        "A solução foi uma aplicação full-stack com site institucional público e um painel administrativo para manter todo o conteúdo, sem depender de desenvolvedor para cada alteração.",
      ],
      en: [
        "Esaint, a Brazilian cosmetics brand, needed a digital presence beyond a static site: the product catalog, lines, distributor network, and testimonials change frequently and had to be managed by their own team.",
        "The solution was a full-stack application with a public institutional website and an admin panel to maintain all the content, without depending on a developer for every change.",
      ],
    },
    decisions: {
      pt: [
        {
          title: "TanStack Start com Bun",
          description:
            "Framework full-stack em React com roteamento e data-fetching type-safe de ponta a ponta, rodando sobre Bun para builds e execução rápidos.",
        },
        {
          title: "Prisma + MySQL",
          description:
            "Prisma como ORM sobre MySQL pela produtividade do schema declarativo e pela segurança de tipos compartilhada com o frontend.",
        },
        {
          title: "Camada de API dedicada (api.ts)",
          description:
            "Toda a comunicação com o backend passa por uma camada única em api.ts, o que permitiu desenvolver as telas com dados mock e trocá-los por endpoints reais sem reescrever componentes.",
        },
      ],
      en: [
        {
          title: "TanStack Start with Bun",
          description:
            "Full-stack React framework with end-to-end type-safe routing and data fetching, running on Bun for fast builds and execution.",
        },
        {
          title: "Prisma + MySQL",
          description:
            "Prisma as the ORM over MySQL for the productivity of its declarative schema and the type safety shared with the frontend.",
        },
        {
          title: "Dedicated API layer (api.ts)",
          description:
            "All backend communication goes through a single layer in api.ts, which allowed building the screens with mock data and swapping in real endpoints without rewriting components.",
        },
      ],
    },
    challenges: {
      pt: [
        {
          problem:
            "Breaking changes do Prisma entre versões alteraram a geração do client e o comportamento de queries existentes no meio do desenvolvimento.",
          solution:
            "Atualizei o schema e as queries afetadas de forma incremental, validando cada migração contra o banco e ajustando os tipos gerados em toda a aplicação.",
        },
        {
          problem:
            "As páginas foram construídas inicialmente com dados mock e precisavam ser conectadas aos endpoints reais sem retrabalho nos componentes.",
          solution:
            "A camada api.ts espelhou os contratos dos mocks; a troca para os endpoints reais aconteceu em um único lugar, com os componentes intactos.",
        },
        {
          problem:
            "Evoluções do modelo de dados (linhas, distribuidores, depoimentos) exigiam ajustes de schema com dados já cadastrados.",
          solution:
            "Planejei as migrações do Prisma em etapas compatíveis com os dados existentes, evitando resets de banco durante o desenvolvimento.",
        },
      ],
      en: [
        {
          problem:
            "Prisma breaking changes between versions altered client generation and the behavior of existing queries mid-development.",
          solution:
            "I updated the schema and affected queries incrementally, validating each migration against the database and adjusting the generated types across the application.",
        },
        {
          problem:
            "Pages were initially built with mock data and had to be connected to real endpoints without reworking the components.",
          solution:
            "The api.ts layer mirrored the mock contracts; the switch to real endpoints happened in a single place, with the components untouched.",
        },
        {
          problem:
            "Data model evolutions (lines, distributors, testimonials) required schema changes with data already in place.",
          solution:
            "I planned the Prisma migrations in steps compatible with the existing data, avoiding database resets during development.",
        },
      ],
    },
    results: {
      pt: [
        "Site institucional e painel administrativo em produção, com a equipe da marca gerenciando produtos, linhas, distribuidores e depoimentos de forma autônoma.",
        "Base de código type-safe de ponta a ponta, do schema Prisma aos componentes React.",
      ],
      en: [
        "Institutional website and admin panel in production, with the brand's team autonomously managing products, lines, distributors, and testimonials.",
        "End-to-end type-safe codebase, from the Prisma schema to the React components.",
      ],
    },
    metrics: {
      pt: [
        { label: "Runtime", value: "Bun" },
        { label: "ORM", value: "Prisma" },
        { label: "Painel admin", value: "Completo" },
      ],
      en: [
        { label: "Runtime", value: "Bun" },
        { label: "ORM", value: "Prisma" },
        { label: "Admin panel", value: "Complete" },
      ],
    },
  },
  {
    slug: "gvi-imobiliaria",
    title: "GVI Imobiliária",
    year: "2024",
    featured: true,
    tags: [".NET", "Angular", "React"],
    stack: {
      pt: [".NET 8", "Clean Architecture", "Angular", "React", "TypeScript"],
      en: [".NET 8", "Clean Architecture", "Angular", "React", "TypeScript"],
    },
    liveUrl: "https://gvicorrespondente.com.br/",
    image: "/projects/gvi-imobiliaria.png",
    subtitle: {
      pt: "Sistema de gestão para imobiliária",
      en: "Management system for a real estate agency",
    },
    description: {
      pt: "Sistema para imobiliária com backend .NET 8 em Clean Architecture e frontend Angular, com componente convertido para React.",
      en: "Real estate system with a .NET 8 Clean Architecture backend and Angular frontend, with a component later converted to React.",
    },
    imageAlt: {
      pt: "Página inicial do portal GVI Imóveis",
      en: "GVI Imóveis portal homepage",
    },
    context: {
      pt: [
        "A GVI Imobiliária precisava de um sistema próprio para gerenciar imóveis e atender seu fluxo de trabalho, substituindo processos manuais e ferramentas genéricas.",
        "O projeto envolvia tanto a construção do backend quanto do frontend, com a expectativa de que o sistema evoluísse ao longo do tempo — o que tornou a manutenibilidade um requisito de primeira ordem.",
      ],
      en: [
        "GVI Imobiliária needed its own system to manage properties and support its workflow, replacing manual processes and generic tools.",
        "The project involved building both the backend and the frontend, with the expectation that the system would evolve over time — which made maintainability a first-order requirement.",
      ],
    },
    decisions: {
      pt: [
        {
          title: ".NET 8 com Clean Architecture",
          description:
            "Separação clara entre domínio, casos de uso e infraestrutura. As regras de negócio da imobiliária ficam isoladas de frameworks e detalhes de banco, facilitando testes e mudanças futuras.",
        },
        {
          title: "Angular no frontend",
          description:
            "Angular foi escolhido pela estrutura opinada e pelo tooling completo, adequado a um sistema interno com formulários e fluxos bem definidos.",
        },
        {
          title: "Conversão pontual para React",
          description:
            "Um componente específico foi posteriormente convertido para React, exercitando a interoperabilidade entre os dois ecossistemas e abrindo caminho para uma migração incremental, se necessária.",
        },
      ],
      en: [
        {
          title: ".NET 8 with Clean Architecture",
          description:
            "Clear separation between domain, use cases, and infrastructure. The agency's business rules stay isolated from frameworks and database details, making tests and future changes easier.",
        },
        {
          title: "Angular on the frontend",
          description:
            "Angular was chosen for its opinionated structure and complete tooling, well suited to an internal system with well-defined forms and flows.",
        },
        {
          title: "Targeted conversion to React",
          description:
            "A specific component was later converted to React, exercising interoperability between the two ecosystems and opening the door to an incremental migration if needed.",
        },
      ],
    },
    challenges: {
      pt: [
        {
          problem:
            "Manter as regras de negócio testáveis e independentes de framework em um sistema que tende a crescer com o tempo.",
          solution:
            "A Clean Architecture impôs fronteiras explícitas: o domínio não conhece EF Core nem ASP.NET, e os casos de uso são testados sem subir infraestrutura.",
        },
        {
          problem:
            "Converter um componente Angular para React sem quebrar o restante da aplicação nem duplicar lógica de negócio.",
          solution:
            "Isolei a lógica compartilhada da camada de apresentação e reimplementei apenas a UI em React, mantendo o contrato com o backend inalterado.",
        },
      ],
      en: [
        {
          problem:
            "Keeping business rules testable and framework-independent in a system bound to grow over time.",
          solution:
            "Clean Architecture imposed explicit boundaries: the domain knows nothing about EF Core or ASP.NET, and use cases are tested without spinning up infrastructure.",
        },
        {
          problem:
            "Converting an Angular component to React without breaking the rest of the application or duplicating business logic.",
          solution:
            "I isolated the shared logic from the presentation layer and reimplemented only the UI in React, keeping the backend contract unchanged.",
        },
      ],
    },
    results: {
      pt: [
        "Sistema em uso pela imobiliária, com backend estruturado em Clean Architecture pronto para evoluir.",
        "Prova prática de migração incremental entre Angular e React sem reescrita completa.",
      ],
      en: [
        "System in use by the agency, with a Clean Architecture backend ready to evolve.",
        "Practical proof of incremental migration between Angular and React without a full rewrite.",
      ],
    },
    metrics: {
      pt: [
        { label: "Arquitetura", value: "Clean Architecture" },
        { label: "Backend", value: ".NET 8" },
        { label: "Frontend", value: "Angular + React" },
      ],
      en: [
        { label: "Architecture", value: "Clean Architecture" },
        { label: "Backend", value: ".NET 8" },
        { label: "Frontend", value: "Angular + React" },
      ],
    },
  },
  {
    slug: "composto-simulador",
    title: "Composto — Simulador de Patrimônio",
    year: "2026",
    featured: true,
    tags: ["JavaScript"],
    stack: {
      pt: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Azure Static Web Apps", "GitHub Actions", "Desenvolvimento com IA"],
      en: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Azure Static Web Apps", "GitHub Actions", "AI-assisted development"],
    },
    liveUrl: "https://calm-ground-0228f5e10.7.azurestaticapps.net",
    repoUrl: "https://github.com/MatheusBulzani/simulador",
    image: "/projects/composto-simulador.png",
    subtitle: {
      pt: "Simulador de juros compostos desenvolvido com IA, do prompt ao deploy",
      en: "Compound interest simulator built with AI, from prompt to deploy",
    },
    description: {
      pt: "Simulador interativo de juros compostos com três cenários comparados em tempo real — construído com desenvolvimento assistido por IA e publicado via CI/CD no Azure.",
      en: "Interactive compound interest simulator comparing three scenarios in real time — built with AI-assisted development and published via CI/CD on Azure.",
    },
    imageAlt: {
      pt: "Simulador Composto com gráficos de evolução patrimonial",
      en: "Composto simulator with wealth growth charts",
    },
    context: {
      pt: [
        "O Composto é um simulador educacional de juros compostos: o usuário configura investimento inicial, aporte mensal e período, e vê o efeito bola de neve acontecer em tempo real, comparando três estratégias de rentabilidade lado a lado (12%, 10% e 15% ao ano).",
        "Este projeto tem um diferencial deliberado: foi construído com desenvolvimento assistido por IA, do design à lógica financeira. O objetivo era exercitar uma habilidade cada vez mais central no dia a dia de um desenvolvedor — dirigir ferramentas de IA com precisão, revisar o que elas produzem e levar o resultado até produção com qualidade. O código é público no GitHub.",
      ],
      en: [
        "Composto is an educational compound interest simulator: the user sets the initial investment, monthly contribution, and time horizon, and watches the snowball effect happen in real time, comparing three return strategies side by side (12%, 10%, and 15% per year).",
        "This project has a deliberate differentiator: it was built with AI-assisted development, from design to the financial logic. The goal was to exercise a skill increasingly central to a developer's daily work — directing AI tools precisely, reviewing what they produce, and taking the result to production with quality. The code is public on GitHub.",
      ],
    },
    decisions: {
      pt: [
        {
          title: "Arquivo único, zero build",
          description:
            "Todo o app vive em um único index.html com JavaScript puro — sem framework, sem bundler, sem dependência de build. Para uma ferramenta autocontida, a simplicidade radical é a arquitetura certa: qualquer pessoa lê o código-fonte inteiro em uma página.",
        },
        {
          title: "Chart.js para visualização",
          description:
            "Única dependência externa (via CDN), usada para os três modos de gráfico: evolução patrimonial em linhas, juros gerados por ano em áreas e composição aportado × juros em barras empilhadas.",
        },
        {
          title: "Matemática financeira correta",
          description:
            "Capitalização mensal com a fórmula de valor futuro de série de pagamentos (FV = P·(1+i)ⁿ + PMT·((1+i)ⁿ−1)/i), tabela de bola de neve dos últimos 5 anos e comparação contra o total aportado.",
        },
        {
          title: "Deploy contínuo no Azure",
          description:
            "Publicado no Azure Static Web Apps com pipeline de GitHub Actions: cada push na main vai automaticamente para produção.",
        },
        {
          title: "IA como ferramenta, não como piloto",
          description:
            "O desenvolvimento assistido por IA acelerou a construção, mas as decisões de UX, a validação da matemática financeira e a revisão do código foram trabalho de engenharia — é assim que uso IA em projetos reais.",
        },
      ],
      en: [
        {
          title: "Single file, zero build",
          description:
            "The whole app lives in a single index.html with vanilla JavaScript — no framework, no bundler, no build dependency. For a self-contained tool, radical simplicity is the right architecture: anyone can read the entire source in one page.",
        },
        {
          title: "Chart.js for visualization",
          description:
            "The only external dependency (via CDN), used for the three chart modes: wealth growth as lines, yearly interest as areas, and invested × interest composition as stacked bars.",
        },
        {
          title: "Correct financial math",
          description:
            "Monthly compounding with the future value of an annuity formula (FV = P·(1+i)ⁿ + PMT·((1+i)ⁿ−1)/i), a snowball table for the last 5 years, and comparison against the total invested.",
        },
        {
          title: "Continuous deployment on Azure",
          description:
            "Published on Azure Static Web Apps with a GitHub Actions pipeline: every push to main goes automatically to production.",
        },
        {
          title: "AI as a tool, not a pilot",
          description:
            "AI-assisted development sped up the build, but the UX decisions, the validation of the financial math, and the code review were engineering work — that's how I use AI in real projects.",
        },
      ],
    },
    challenges: {
      pt: [
        {
          problem:
            "Manter três modos de gráfico (linhas, áreas e barras empilhadas) consistentes com o estado dos cenários ativos, sem framework de UI para gerenciar reatividade.",
          solution:
            "Estado centralizado em um único objeto e função update() que recalcula métricas, reconstrói o gráfico e a tabela a cada interação — reatividade manual previsível, sem dependências.",
        },
        {
          problem:
            "Garantir que a simulação financeira estivesse correta, e não apenas plausível — um risco real quando parte do código nasce de IA.",
          solution:
            "Validei as fórmulas de capitalização mensal contra calculadoras financeiras de referência e tratei casos extremos (aporte zero, um único ano, cenários desativados).",
        },
      ],
      en: [
        {
          problem:
            "Keeping three chart modes (lines, areas, and stacked bars) consistent with the active scenario state, without a UI framework to manage reactivity.",
          solution:
            "Centralized state in a single object and an update() function that recalculates metrics and rebuilds the chart and table on every interaction — predictable manual reactivity, with no dependencies.",
        },
        {
          problem:
            "Ensuring the financial simulation was correct, not just plausible — a real risk when part of the code comes from AI.",
          solution:
            "I validated the monthly compounding formulas against reference financial calculators and handled edge cases (zero contribution, a single year, disabled scenarios).",
        },
      ],
    },
    results: {
      pt: [
        "Simulador publicado e funcional, com três cenários comparáveis, três visualizações e tabela do efeito bola de neve — tudo em um único arquivo HTML.",
        "Código aberto no GitHub com deploy automático via GitHub Actions para o Azure Static Web Apps.",
        "Demonstração prática de desenvolvimento assistido por IA com revisão e responsabilidade de engenharia.",
      ],
      en: [
        "Simulator published and working, with three comparable scenarios, three visualizations, and a snowball effect table — all in a single HTML file.",
        "Open source on GitHub with automatic deployment via GitHub Actions to Azure Static Web Apps.",
        "A practical demonstration of AI-assisted development with engineering review and accountability.",
      ],
    },
    metrics: {
      pt: [
        { label: "Arquivos de código", value: "1" },
        { label: "Dependências", value: "1 (Chart.js)" },
        { label: "Deploy", value: "CI/CD → Azure" },
      ],
      en: [
        { label: "Code files", value: "1" },
        { label: "Dependencies", value: "1 (Chart.js)" },
        { label: "Deploy", value: "CI/CD → Azure" },
      ],
    },
  },
];

export const allTags: ProjectTag[] = [
  ".NET",
  "React",
  "Angular",
  "TanStack",
  "JavaScript",
  "SaaS",
  "MySQL",
];

function resolve(source: ProjectSource, locale: Locale): Project {
  return {
    slug: source.slug,
    title: source.title,
    year: source.year,
    featured: source.featured,
    tags: source.tags,
    stack: source.stack[locale],
    liveUrl: source.liveUrl,
    repoUrl: source.repoUrl,
    image: source.image,
    subtitle: source.subtitle[locale],
    description: source.description[locale],
    imageAlt: source.imageAlt[locale],
    demoCredentials: source.demoCredentials
      ? {
          email: source.demoCredentials.email,
          password: source.demoCredentials.password,
          note: source.demoCredentials.note[locale],
        }
      : undefined,
    context: source.context[locale],
    decisions: source.decisions[locale],
    challenges: source.challenges[locale],
    results: source.results[locale],
    metrics: source.metrics?.[locale],
  };
}

export function getProjects(locale: Locale): Project[] {
  return sources.map((source) => resolve(source, locale));
}

export function getProject(slug: string, locale: Locale): Project | undefined {
  const source = sources.find((p) => p.slug === slug);
  return source ? resolve(source, locale) : undefined;
}

export function getNextProject(slug: string, locale: Locale): Project {
  const index = sources.findIndex((p) => p.slug === slug);
  return resolve(sources[(index + 1) % sources.length], locale);
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return sources.filter((p) => p.featured).map((s) => resolve(s, locale));
}

export function getProjectSlugs(): string[] {
  return sources.map((p) => p.slug);
}
