import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  let sid = request.cookies.get('sid')?.value;

  if (
    sid &&
    (request.nextUrl.pathname.startsWith('/sign-in') ||
      request.nextUrl.pathname.startsWith('/sign-up'))
  ) {
    return Response.redirect(new URL('/user/profile', request.url));
  }

  if (
    !sid &&
    (request.nextUrl.pathname.startsWith('/user') ||
      request.nextUrl.pathname.startsWith('/organizer'))
  ) {
    return Response.redirect(new URL('/sign-in', request.url));
  }
}
