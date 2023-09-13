import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeUserJwt, getUserJwtInfo } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/login") &&
    request.cookies.has(String(process.env.AUTH_COOKIE_NAME))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    request.nextUrl.pathname.startsWith("/profile") &&
    !request.cookies.has(String(process.env.AUTH_COOKIE_NAME))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    request.cookies.has(String(process.env.AUTH_COOKIE_NAME))
  ) {
    const tokenInfo = decodeUserJwt(
      String(request.cookies.get(String(process.env.AUTH_COOKIE_NAME))?.value)
    );
    if (tokenInfo.role !== "ADMIN")
      return NextResponse.redirect(new URL("/", request.url));
  }
}
