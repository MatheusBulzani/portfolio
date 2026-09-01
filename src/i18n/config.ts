export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Remove prefixo /en ou /pt (rewrite interno) → caminho canônico. */
export function stripLocalePrefix(path: string): string {
  let result = path || "/";
  if (!result.startsWith("/")) result = `/${result}`;

  let prev: string;
  do {
    prev = result;
    result = result.replace(/^\/(en|pt)(?=\/|$)/, "") || "/";
  } while (result !== prev);

  return result;
}

/** Detecta locale a partir do pathname (inclui rewrite interno /pt). */
export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return defaultLocale;
}

/** Monta um href com prefixo de idioma (PT fica sem prefixo). */
export function localePath(locale: Locale, path: string = "/"): string {
  const canonical = stripLocalePrefix(path);
  if (locale === defaultLocale) return canonical;
  return canonical === "/" ? `/${locale}` : `/${locale}${canonical}`;
}
