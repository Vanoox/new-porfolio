import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "pl", "jp"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Uproszczone i pewniejsze sprawdzanie
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Jeśli język JUŻ jest w URL, pozwól zapytaniu przejść dalej bez ruszania go!
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // W przeciwnym razie wymuś domyślny język
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
