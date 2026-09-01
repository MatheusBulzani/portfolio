import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TechBadge } from "@/components/TechBadge";
import type { Project } from "@/data/projects";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface CaseStudyLayoutProps {
  project: Project;
  nextProject: Project;
  locale: Locale;
}

export function CaseStudyLayout({
  project,
  nextProject,
  locale,
}: CaseStudyLayoutProps) {
  const t = getDictionary(locale);

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        href={localePath(locale, "/projetos")}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.caseStudy.backToProjects}
      </Link>

      {/* Cabeçalho */}
      <header className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {t.caseStudy.label} · {project.year}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechBadge key={tech} label={tech} size="md" />
          ))}
        </div>
      </header>

      {/* Imagem principal */}
      <Reveal className="mt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* Contexto / Problema */}
      <Reveal className="mt-16">
        <section>
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <Target className="h-6 w-6 text-accent" />
            {t.caseStudy.contextTitle}
          </h2>
          <div className="mt-5 space-y-4">
            {project.context.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Stack e decisões técnicas */}
      <Reveal className="mt-16">
        <section>
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <Lightbulb className="h-6 w-6 text-accent" />
            {t.caseStudy.decisionsTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.decisions.map((decision) => (
              <div
                key={decision.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold">{decision.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Desafios técnicos */}
      <Reveal className="mt-16">
        <section>
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <Wrench className="h-6 w-6 text-accent" />
            {t.caseStudy.challengesTitle}
          </h2>
          <div className="mt-6 space-y-4">
            {project.challenges.map((challenge, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {t.caseStudy.problemLabel}
                </p>
                <p className="mt-1.5 leading-relaxed">{challenge.problem}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-accent">
                  {t.caseStudy.solutionLabel}
                </p>
                <p className="mt-1.5 leading-relaxed text-muted">
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Resultado */}
      <Reveal className="mt-16">
        <section>
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <CheckCircle2 className="h-6 w-6 text-accent" />
            {t.caseStudy.resultTitle}
          </h2>

          {project.metrics && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-card p-5 text-center"
                >
                  <p className="text-xl font-bold text-accent">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          <ul className="mt-6 space-y-3">
            {project.results.map((result, i) => (
              <li key={i} className="flex gap-3 leading-relaxed text-muted">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {result}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Próximo projeto */}
      <div className="mt-20 border-t border-border pt-10">
        <Link
          href={localePath(locale, `/projetos/${nextProject.slug}`)}
          className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-card-hover sm:p-8"
        >
          <div>
            <p className="text-sm text-muted">{t.caseStudy.nextProject}</p>
            <p className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
              {nextProject.title}
            </p>
            <p className="mt-1 text-sm text-muted">{nextProject.subtitle}</p>
          </div>
          <ArrowRight className="h-6 w-6 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
