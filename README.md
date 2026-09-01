# Matheus Bulzani — Portfólio

Site de portfólio profissional construído com **Next.js (App Router) + TypeScript + Tailwind CSS**, bilíngue (PT/EN).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Idiomas

- **Português** (padrão): URLs sem prefixo — `/`, `/projetos`, `/sobre`, `/contato`
- **Inglês**: sob `/en` — `/en`, `/en/projetos`, `/en/sobre`, `/en/contato`
- O seletor PT/EN fica na navbar. O roteamento é feito por `src/proxy.ts`.
- Textos da interface: `src/i18n/dictionaries.ts` (objetos `pt` e `en`).
- Conteúdo dos projetos: `src/data/projects.ts` (cada campo de texto tem versão `pt` e `en`).

## Estrutura

- `src/data/projects.ts` — **todo o conteúdo dos projetos/case studies** em PT e EN. Edite este arquivo para adicionar, remover ou alterar projetos sem tocar em componentes.
- `src/i18n/` — configuração de idiomas (`config.ts`) e dicionários da interface (`dictionaries.ts`).
- `src/lib/site.ts` — dados do site: nome, email, links (GitHub, LinkedIn, WhatsApp), stack principal, URL de produção e CVs por idioma.
- `src/components/` — componentes (Navbar, Footer, Hero, ProjectCard, CaseStudyLayout, ProjectsGrid, ContactForm, ThemeToggle, LanguageSwitcher, Reveal).
- `src/app/[locale]/` — páginas: Home, `/projetos`, `/projetos/[slug]`, `/sobre`, `/contato`, além de `sitemap.ts` e `robots.ts` na raiz de `app/`.
- `public/projects/` — imagens dos projetos (capturas reais das páginas iniciais dos sites em produção).
- `public/CV-*.pdf` — currículos para download (PT e EN), referenciados em `site.ts` (campo `cvUrl`).

## Personalização rápida

1. **Links e contatos**: tudo em `src/lib/site.ts`.
2. **URL de produção**: ajuste `site.url` em `src/lib/site.ts` para o domínio real antes do deploy (usado no sitemap, robots e Open Graph).

## Tema

Tema escuro por padrão com toggle claro/escuro persistido em `localStorage`.

## Deploy

Pronto para deploy na [Vercel](https://vercel.com): basta importar o repositório. `npm run build` gera todas as páginas (PT e EN) estaticamente.
