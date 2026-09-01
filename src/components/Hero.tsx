import Link from "next/link";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--accent-soft),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32">
        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
          <MapPin className="h-3 w-3 text-accent" />
          {site.location} · {t.hero.availability}
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          {site.author}
          <span className="mt-2 block text-accent">{site.role}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {t.hero.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {site.mainStack.map((tech) => (
            <TechBadge key={tech} label={tech} size="md" />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={localePath(locale, "/projetos")}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            {t.hero.seeProjects}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={localePath(locale, "/contato")}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-card-hover"
          >
            {t.hero.getInTouch}
          </Link>
          <a
            href={site.cvUrl[locale]}
            download
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-muted transition-colors hover:text-foreground"
          >
            <FileDown className="h-4 w-4" />
            {t.hero.downloadCv} ({locale.toUpperCase()})
          </a>
        </div>
      </div>
    </section>
  );
}
