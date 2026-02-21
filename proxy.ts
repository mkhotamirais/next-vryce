import createIntlMiddleware from "next-intl/middleware";
import { auth } from "@/auth";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

const authRoutes = ["/login"];

const intlMiddleware = createIntlMiddleware(routing);

export const proxy = auth((req) => {
  const { pathname } = req.nextUrl;
  const response = intlMiddleware(req);

  const segments = pathname.split("/");
  const locale = segments[1] || "id";
  const cleanPath = "/" + segments.slice(2).join("/");

  const isLogin = !!req.auth;

  const isAdminRoute = cleanPath.startsWith("/admin");

  const localizedRedirect = (path: string) => {
    console.log(`/${locale}${path}`);
    return NextResponse.redirect(new URL(`/${locale}${path}`, req.nextUrl));
  };

  if (pathname.includes("/api/account/verefy-email")) return response;

  const isAuthRoutes = authRoutes.some((route) => cleanPath.startsWith(route));

  if (!isLogin && isAdminRoute) {
    return localizedRedirect("/login");
  }

  if (isLogin) {
    if (isAuthRoutes) return localizedRedirect("/admin");
  }

  return response;
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

// import createIntlMiddleware from "next-intl/middleware";
// import { auth } from "@/auth";
// import { routing } from "./i18n/routing";
// import { NextResponse } from "next/server";

// const authRoutes = ["/login", "/register"];
// const userRoute = "/user";
// const adminRoute = "/admin";
// const verifyRoute = "/verify-email";
// const verifyPendingRoute = "/verify-email-request";

// const intlMiddleware = createIntlMiddleware(routing);

// export const proxy = auth((req) => {
//   const { pathname } = req.nextUrl;
//   const response = intlMiddleware(req);

//   const segments = pathname.split("/");
//   const locale = segments[1] || "id";
//   const cleanPath = "/" + segments.slice(2).join("/");

//   const isLogin = !!req.auth;
//   const user = req.auth?.user;
//   const role = user?.role || "USER";
//   const isEmailVerified = !!user?.emailVerified;

//   const localizedRedirect = (path: string) => {
//     console.log(`/${locale}${path}`);
//     return NextResponse.redirect(new URL(`/${locale}${path}`, req.nextUrl));
//   };

//   if (pathname.includes("/api/account/verefy-email")) return response;

//   const isAuthRoutes = authRoutes.some((route) => cleanPath.startsWith(route));
//   const isAdminRoute = cleanPath.startsWith(adminRoute);
//   const isUserRoute = cleanPath.startsWith(userRoute);
//   const isVerifyRoute = cleanPath.startsWith(verifyRoute);
//   const isVerifyPendingRoute = cleanPath.startsWith(verifyPendingRoute);

//   if (isLogin) {
//     if (isAuthRoutes) {
//       if (role === "ADMIN") return localizedRedirect("/admin");
//       if (role === "USER") return localizedRedirect("/user");
//     }
//     if (isAdminRoute && role !== "ADMIN") return localizedRedirect("/user");
//     if (isUserRoute && role !== "USER") return localizedRedirect("/admin");
//     if (isVerifyRoute && !isEmailVerified) return localizedRedirect("/user/profile");
//     if (isVerifyPendingRoute && isEmailVerified) return localizedRedirect("/user/profile");
//   }

//   return response;
// });

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };
