import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  FileDown,
  GraduationCap,
  Languages,
  Layers,
  Rocket,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechBadge } from "@/components/TechBadge";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const fullStack = {
  backend: [".NET 8", "C#", "ASP.NET Core", "ASP.NET MVC", "EF Core", "Clean Architecture", "Hangfire", "Python", "Node.js / Bun"],
  frontend: ["React", "Angular", "Next.js", "TanStack Start", "TypeScript", "Angular Material", "Tailwind CSS"],
  database: ["MySQL", "PostgreSQL", "SQL Server", "Prisma", "EF Core"],
  infra: ["Docker / Docker Compose", "AWS", "Azure DevOps", "CI/CD", "Stripe / Stripe Connect", "JWT / Auth", "MailKit", "Postman", "Vercel"],
} as const;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const t = getDictionary(locale);

  return {
    title: t.about.metaTitle,
    description: t.about.metaDescription,
  };
}

export default async function SobrePage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const t = getDictionary(locale);

  const iatecStack = ["Angular 20", "Angular Material", "Docker", "Git", "CI/CD"];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow={t.about.eyebrow}
        title={site.author}
        description={t.about.roleLine}
      />

      <a
        href={site.cvUrl[locale]}
        download
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-card-hover"
      >
        <FileDown className="h-4 w-4 text-accent" />
        {t.about.downloadCv} ({locale.toUpperCase()})
      </a>

      {/* Trajetória */}
      <Reveal className="mt-12">
        <section className="space-y-4 leading-relaxed text-muted">
          <p>{t.about.bio1}</p>
          <p>{t.about.bio2}</p>
          <p>{t.about.bio3}</p>
        </section>
      </Reveal>

      {/* Experiência */}
      <Reveal className="mt-14">
        <section>
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <Briefcase className="h-6 w-6 text-accent" />
            {t.about.experienceTitle}
          </h2>
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{t.about.iatecRole}</h3>
              <span className="text-sm text-muted">{t.about.iatecPeriod}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t.about.iatecText}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {iatecStack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            {t.about.experienceNote.before}
            <Link
              href={localePath(locale, "/projetos")}
              className="font-medium text-accent hover:underline"
            >
              {t.about.experienceNote.link}
            </Link>
            {t.about.experienceNote.after}
          </p>
        </section>
      </Reveal>

      {/* Formação e idiomas */}
      <Reveal className="mt-14">
        <section>
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <GraduationCap className="h-6 w-6 text-accent" />
            {t.about.educationTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.about.education.map((item) => (
              <div
                key={item.institution}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{item.institution}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.degree}
                </p>
                <p className="mt-2 text-xs text-muted">{item.period}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <Languages className="h-4 w-4 text-accent" />
              {t.about.languagesTitle}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.about.languages.map((lang) => (
                <TechBadge
                  key={lang.name}
                  label={`${lang.name} · ${lang.level}`}
                  size="md"
                />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Pilares */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-xl border border-border bg-card p-6">
            <Rocket className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-semibold">{t.about.brandTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t.about.brandText}
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-xl border border-border bg-card p-6">
            <Layers className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-semibold">{t.about.workTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t.about.workText}
            </p>
          </div>
        </Reveal>
        <Reveal delay={200} className="sm:col-span-2">
          <div className="h-full rounded-xl border border-border bg-card p-6">
            <Users className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-semibold">{t.about.forWhoTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t.about.forWhoText}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Stack completa */}
      <Reveal className="mt-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            {t.about.stackTitle}
          </h2>
          <div className="mt-6 space-y-6">
            {(Object.keys(fullStack) as (keyof typeof fullStack)[]).map(
              (category) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {t.about.stackCategories[category]}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {fullStack[category].map((item) => (
                      <TechBadge key={item} label={item} size="md" />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal className="mt-16">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            {t.about.ctaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">{t.about.ctaText}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={localePath(locale, "/projetos")}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              {t.about.ctaProjects}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={localePath(locale, "/contato")}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-card-hover"
            >
              {t.about.ctaContact}
            </Link>
            <a
              href={site.cvUrl[locale]}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-card-hover"
            >
              <FileDown className="h-4 w-4" />
              {t.about.downloadCv}
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
