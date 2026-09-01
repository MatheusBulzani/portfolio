import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { getNextProject, getProject, getProjectSlugs } from "@/data/projects";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface CaseStudyPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const t = getDictionary(locale);
  const project = getProject(slug, locale);
  if (!project) return {};

  return {
    title: `${project.title} — ${t.caseStudy.metaSuffix}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${t.caseStudy.metaSuffix}`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const project = getProject(slug, locale);
  if (!project) notFound();

  return (
    <CaseStudyLayout
      project={project}
      nextProject={getNextProject(slug, locale)}
      locale={locale}
    />
  );
}
