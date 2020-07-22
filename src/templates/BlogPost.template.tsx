import React from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import { BlogPostQuery } from '../../gatsby-graphql';
import Layout from '../components/Layout';
import { BaseContainer } from '../styles/BaseComponents';

interface IBlogPostTemplate extends PageRendererProps {
  data: BlogPostQuery;
  pageContext: {
    locale: string;
  };
}

const BlogPostTemplate: React.FC<IBlogPostTemplate> = ({
  data: { post, navigation },
  pageContext: { locale },
  location: { pathname },
}) => (
  <Layout
    seo={{
      ...post?.seo,
      locale: locale,
      image: post?.seo?.image?.file?.url,
    }}
    navigation={navigation}
    pathname={pathname}
  >
    <StyledBaseContainer>
      <h1>{post?.title}</h1>
      <StyledGatsbyImage fluid={post?.image?.fluid as FluidObject} />
      <div>{documentToReactComponents(post?.body?.json, {})}</div>
    </StyledBaseContainer>
  </Layout>
);

const StyledBaseContainer = styled(BaseContainer)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  max-width: 800px;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  margin-bottom: 2rem;
`;

export const pageQuery = graphql`
  query BlogPost($id: String!, $locale: String!) {
    ...SiteNavigation
    post: contentfulBlogPost(id: { eq: $id }, node_locale: { eq: $locale }) {
      id
      title
      createdAt
      slug
      seo {
        title
        description
        image {
          file {
            url
          }
        }
      }
      image {
        fluid(
          maxWidth: 1160
          maxHeight: 600
          quality: 100
          resizingBehavior: FILL
          cropFocus: CENTER
        ) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        json
      }
    }
  }
`;

export default BlogPostTemplate;
