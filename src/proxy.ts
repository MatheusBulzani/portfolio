import { NextRequest, NextResponse } from "next/server";

// PT (padrão) fica sem prefixo na URL; EN vive em /en/...
// Internamente todas as rotas estão em app/[locale]/, então:
// - /en/*  → segue direto (casa com [locale]="en")
// - /pt/*  → redireciona para a URL sem prefixo (canônica)
// - demais → rewrite invisível para /pt/*
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  if (pathname === "/pt" || pathname.startsWith("/pt/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/pt/, "") || "/";
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/pt${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Ignora assets estáticos (contêm "."), _next e favicon
  matcher: ["/((?!_next|.*\\..*).*)"],
};
