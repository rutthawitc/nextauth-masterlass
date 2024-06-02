import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  apiRoutePrefix,
  authRoute,
  publicRoute,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiRoute = nextUrl.pathname.startsWith(apiRoutePrefix);
  const isPublicRoute = publicRoute.includes(nextUrl.pathname);
  const isAuthRoute = authRoute.includes(nextUrl.pathname);

  if (isApiRoute) {
    return;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  return;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
