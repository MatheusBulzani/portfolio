import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";
import type { Project } from "@/data/projects";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  priority?: boolean;
}

export function ProjectCard({ project, locale, priority = false }: ProjectCardProps) {
  const t = getDictionary(locale);

  return (
    <Link
      href={localePath(locale, `/projetos/${project.slug}`)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted">{project.year}</span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
          {project.stack.length > 4 && (
            <TechBadge label={`+${project.stack.length - 4}`} />
          )}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          {t.projectCard.viewCaseStudy}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
