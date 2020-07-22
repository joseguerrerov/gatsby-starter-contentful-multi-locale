import { useContentfulLocales } from '../graphql/Hooks/Locales';

interface ILocaleChangeUrlData {
  currentLocale: string;
}

export const useI18 = ({ currentLocale }: ILocaleChangeUrlData) => {
  const { defaultLocale, locales } = useContentfulLocales();

  const changePathnameLocale = (
    newLocale: string,
    currentPathname: string
  ): string => {
    if (newLocale === currentLocale) return currentPathname;
    if (currentLocale === defaultLocale?.code) {
      return currentPathname.replace('/', `/${newLocale}/`);
    }
    if (newLocale === defaultLocale?.code) {
      return currentPathname.replace(`/${currentLocale}/`, `/`);
    }
    return currentPathname;
  };

  const createLocalizedPathname = (pathname: string): string => {
    if (currentLocale === defaultLocale?.code) return pathname;
    return pathname.replace('/', `/${currentLocale}/`);
  };

  const createLocalizedBlogPostPathname = (slug: string) => {
    if (currentLocale === defaultLocale?.code) return `/blog/${slug}`;
    return `/${currentLocale}/blog/${slug}`;
  };

  return {
    changePathnameLocale,
    createLocalizedPathname,
    createLocalizedBlogPostPathname,
    locales,
  };
};
