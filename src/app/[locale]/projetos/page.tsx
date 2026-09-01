import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { getProjects } from "@/data/projects";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const t = getDictionary(locale);

  return {
    title: t.projectsPage.metaTitle,
    description: t.projectsPage.metaDescription,
  };
}

export default async function ProjetosPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const t = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow={t.projectsPage.eyebrow}
        title={t.projectsPage.title}
        description={t.projectsPage.description}
      />
      <div className="mt-10">
        <ProjectsGrid projects={getProjects(locale)} locale={locale} />
      </div>
    </div>
  );
}
