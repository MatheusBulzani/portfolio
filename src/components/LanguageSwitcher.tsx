"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  // Caminho sem o prefixo /en (o PT não tem prefixo)
  const basePath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const target =
    locale === "pt" ? (basePath === "/" ? "/en" : `/en${basePath}`) : basePath;
  const targetLabel = locale === "pt" ? "EN" : "PT";

  // <a> em vez de <Link>: a troca de idioma recarrega a página, o que
  // re-executa o script de tema e evita re-render do <html> no cliente.
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
