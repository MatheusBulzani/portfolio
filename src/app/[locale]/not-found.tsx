"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { localeFromPathname, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function NotFound() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = getDictionary(locale);

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        {t.notFound.label}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        {t.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-muted">{t.notFound.text}</p>
      <Link
        href={localePath(locale, "/")}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.notFound.backHome}
      </Link>
    </div>
  );
}
