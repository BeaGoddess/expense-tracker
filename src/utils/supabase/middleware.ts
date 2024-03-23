import { authPaths, protectedPaths } from "@/lib/constant";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  // refreshing the auth token
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const url = new URL(request.url);

  if (session) {
    // Logged -> can't go to login page
    if (authPaths.includes(url.pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return response;
  } else {
    // Not logged -> can't go to user pages
    if (protectedPaths.includes(url.pathname)) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return response;
  }
}
