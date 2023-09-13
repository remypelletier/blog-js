import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/login") &&
    request.cookies.has(String(process.env.AUTH_COOKIE_NAME))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
