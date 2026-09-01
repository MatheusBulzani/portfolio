"use client";

import { useSyncExternalStore } from "react";
import { localePath, type Locale } from "@/i18n/config";

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

function getBrowserPathname() {
  return window.location.pathname;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  // usePathname() devolve o caminho interno (/pt, /pt/projetos) após o rewrite
  // do proxy; window.location.pathname reflete a URL real do browser (/ , /projetos).
  const browserPath = useSyncExternalStore(
    subscribe,
    getBrowserPathname,
    () => "/",
  );

  const targetLocale = locale === "pt" ? "en" : "pt";
  const target = localePath(targetLocale, browserPath);
  const targetLabel = locale === "pt" ? "EN" : "PT";

  return (
    <a
      href={target}
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para português"}
      className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-3 text-xs font-bold tracking-wide text-muted transition-colors hover:bg-card-hover hover:text-foreground"
    >
      {targetLabel}
    </a>
  );
}
