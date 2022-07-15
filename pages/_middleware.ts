import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  if (!req.url.includes("/api")) {
    if (!req.url.includes("/log-in") && !req.cookies.pangWeet) {
      return NextResponse.redirect(new URL("/log-in", req.url));
    }
  }
}
