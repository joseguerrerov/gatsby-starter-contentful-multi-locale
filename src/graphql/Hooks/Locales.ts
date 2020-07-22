import { graphql, useStaticQuery } from 'gatsby';
import { AllContentfulLocaleQuery } from '../../../gatsby-graphql';

export const useContentfulLocales = () => {
  const data = useStaticQuery<AllContentfulLocaleQuery>(graphql`
    query AllContentfulLocale {
      allContentfulLocale {
        totalCount
        nodes {
          code
          name
          default
          fallbackCode
        }
      }
    }
  `);
  const defaultLocale = data.allContentfulLocale.nodes.find(
    (locale) => locale.default
  );
  return {
    defaultLocale,
    locales: data.allContentfulLocale.nodes,
    totalCount: data.allContentfulLocale.totalCount,
  };
};
