"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { allTags, type Project, type ProjectTag } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface ProjectsGridProps {
  projects: Project[];
  locale: Locale;
}

export function ProjectsGrid({ projects, locale }: ProjectsGridProps) {
  const t = getDictionary(locale);
  const [activeTag, setActiveTag] = useState<ProjectTag | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            activeTag === null
              ? "border-accent bg-accent-soft text-accent"
              : "border-border bg-card text-muted hover:text-foreground"
          }`}
        >
          {t.projectsPage.filterAll}
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeTag === tag
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-card text-muted hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            priority={i < 2}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-muted">{t.projectsPage.empty}</p>
      )}
    </div>
  );
}
