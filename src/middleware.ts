import { defineMiddleware } from 'astro:middleware';
import { getSession } from 'auth-astro/server';

const notAuthenticatedRoutes = ['/login', '/signup'];
const authenticatedRoutes = ['/user-profile'];

export const onRequest = defineMiddleware(async ({ url, locals, redirect, request }, next) => {
  const session = await getSession(request);
  const isLoggedIn = !!session;
  const user = session?.user;

  locals.isLoggedIn = isLoggedIn;
  locals.user = {
    name: !!user ? user.name : null,
    email: !!user ? user.email : null,
  };

  if (isLoggedIn && notAuthenticatedRoutes.includes(url.pathname)) {
    return redirect('/user-profile');
  }

  if (!isLoggedIn && authenticatedRoutes.includes(url.pathname)) {
    return redirect('/login');
  }

  return next();
});
