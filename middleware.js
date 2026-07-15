import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const intlMiddleware = createMiddleware(routing);
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

async function isAdminSession(request) {
  const token = request.cookies.get("admin_session")?.value;
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.role === "ADMIN";
  } catch {
    return false;
  }
}

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isAdmin = /^(\/[a-z]{2})?\/admin(\/|$)/.test(pathname);
  const isAdminLogin = /^(\/[a-z]{2})?\/admin\/login(\/|$)?$/.test(pathname);

  if (isAdmin && !isAdminLogin && !(await isAdminSession(request))) {
    const m = pathname.match(/^\/([a-z]{2})\//);
    const locale = m ? `/${m[1]}` : "";
    return NextResponse.redirect(new URL(`${locale}/admin/login`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
