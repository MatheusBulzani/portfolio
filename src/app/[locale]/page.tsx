import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const t = getDictionary(locale);
  const featured = getFeaturedProjects(locale);

  return (
    <>
      <Hero locale={locale} />

      {/* Projetos em destaque */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={t.home.featuredEyebrow}
              title={t.home.featuredTitle}
              description={t.home.featuredDescription}
            />
            <Link
              href={localePath(locale, "/projetos")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              {t.home.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} locale={locale} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sobre resumido */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow={t.home.aboutEyebrow} title={t.home.aboutTitle} />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <Code2 className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-semibold">{t.home.card1Title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.home.card1Text}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <GraduationCap className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-semibold">{t.home.card2Title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.home.card2Text}
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <Briefcase className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-semibold">{t.home.card3Title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.home.card3Text}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <Link
              href={localePath(locale, "/sobre")}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              {t.home.aboutLink}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,var(--accent-soft),transparent)]"
            />
            <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              {t.home.ctaText}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={localePath(locale, "/contato")}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                {t.home.ctaButton}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-card-hover"
              >
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
