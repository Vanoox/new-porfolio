import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Obsługiwane języki
const locales = ["en", "pl", "jp"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Sprawdzamy czy ścieżka ma już prefix języka (np. /pl, /en/lessons)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Jeśli brak języka, przekierowujemy na domyślny (dodajemy /en na początek)
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Pomijamy pliki systemowe Next.js, API i obrazki, aby ich nie psuć
    "/((?!_next|api|favicon.ico|.*\\..*).*)",
  ],
};
