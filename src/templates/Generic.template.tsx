import React from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import { GenericPageQuery } from '../../gatsby-graphql';
import Layout from '../components/Layout';
import PageBlocks from '../components/PageBlocks';

interface IGenericTemplateProps extends PageRendererProps {
  data: GenericPageQuery;
  pageContext: {
    locale: string;
  };
}

const GenericTemplate: React.FC<IGenericTemplateProps> = ({
  data: { page, navigation },
  pageContext: { locale },
  location: { pathname },
}) => (
  <Layout
    seo={{
      ...page?.pageSeo,
      locale: locale,
      image: page?.pageSeo?.image?.file?.url,
    }}
    navigation={navigation}
    pathname={pathname}
  >
    <PageBlocks blocks={page?.blocks} />
  </Layout>
);

export const pageQuery = graphql`
  query GenericPage($id: String!, $locale: String!) {
    ...SiteNavigation
    page: contentfulPage(id: { eq: $id }, node_locale: { eq: $locale }) {
      ...PageSeo
      ...PageBlocks
    }
  }
`;

export default GenericTemplate;
