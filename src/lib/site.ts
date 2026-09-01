import type { Locale } from "@/i18n/config";

export const site = {
  name: "Matheus Bulzani",
  author: "Matheus Bulzani",
  role: "Full-stack Developer",
  location: "Porto, Portugal",
  url: "https://matheusbulzani.com",
  email: "tete.bulzani@gmail.com",
  cvUrl: {
    pt: "/CV-Matheus-Bulzani-PT.pdf",
    en: "/CV-Matheus-Ribas-EN.pdf",
  } satisfies Record<Locale, string>,
  links: {
    github: "https://github.com/MatheusBulzani",
    linkedin: "https://www.linkedin.com/in/matheus-bulzani-237423277",
    whatsapp: "https://wa.me/351926562268",
  },
  mainStack: [
    ".NET / C#",
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "Docker",
  ],
} as const;
