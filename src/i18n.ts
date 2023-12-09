import {getRequestConfig} from 'next-intl/server';
 
export const locales = ['en', 'ar'] as const;

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../locales/${locale}.json`)).default
}));