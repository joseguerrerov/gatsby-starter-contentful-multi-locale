import React from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import { BlogPageQuery } from '../../gatsby-graphql';
import Layout from '../components/Layout';
import BlogPostList from '../components/BlogPostList';

interface IBlogTemplateProps extends PageRendererProps {
  data: BlogPageQuery;
  pageContext: {
    locale: string;
  };
}

const BlogTemplate: React.FC<IBlogTemplateProps> = ({
  data: { page, navigation, blogPostList },
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
    <BlogPostList posts={blogPostList.nodes} locale={locale} />
  </Layout>
);

export const pageQuery = graphql`
  query BlogPage($id: String!, $locale: String!) {
    ...SiteNavigation
    ...BlogPostList
    page: contentfulPage(id: { eq: $id }, node_locale: { eq: $locale }) {
      ...PageSeo
    }
  }
`;

export default BlogTemplate;
