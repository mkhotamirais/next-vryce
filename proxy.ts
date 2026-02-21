import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};

// import createIntlMiddleware from "next-intl/middleware";
// import { auth } from "@/auth";
// import { routing } from "./i18n/routing";
// import { NextResponse } from "next/server";

// const authRoutes = ["/login"];

// const intlMiddleware = createIntlMiddleware(routing);

// export const proxy = auth((req) => {
//   const { pathname } = req.nextUrl;
//   const response = intlMiddleware(req);

//   const segments = pathname.split("/");
//   const locale = segments[1] || "id";
//   const cleanPath = "/" + segments.slice(2).join("/");

//   const isLogin = !!req.auth;

//   const isAdminRoute = cleanPath.startsWith("/admin");

//   const localizedRedirect = (path: string) => {
//     return NextResponse.redirect(new URL(`/${locale}${path}`, req.nextUrl));
//   };

//   if (pathname.includes("/api/account/verefy-email")) return response;

//   const isAuthRoutes = authRoutes.some((route) => cleanPath.startsWith(route));

//   if (!isLogin && isAdminRoute) {
//     return localizedRedirect("/login");
//   }

//   if (isLogin) {
//     if (isAuthRoutes) return localizedRedirect("/admin");
//   }

//   return response;
// });

// export const config = {
//   // matcher: ["/((?!api|_next|.*\\..*).*)"],
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };
