import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
  localePrefix: 'as-needed',
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};

// export function middleware () {
//     return NextResponse.json({message: 'hellow'})
// }