import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/data/projects";
import { locales, localePath } from "@/i18n/config";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/projetos", priority: 0.9 },
    { path: "/sobre", priority: 0.7 },
    { path: "/contato", priority: 0.7 },
  ];

  const projectPaths = getProjectSlugs().map((slug) => ({
    path: `/projetos/${slug}`,
    priority: 0.8,
  }));

  return [...staticPaths, ...projectPaths].flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${site.url}${localePath(locale, path)}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}${localePath(l, path)}`])
        ),
      },
    }))
  );
}
