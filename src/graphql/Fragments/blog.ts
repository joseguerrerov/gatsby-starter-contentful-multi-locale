import { graphql } from 'gatsby';

export const BlogPostListFragment = graphql`
  fragment BlogPostList on Query {
    blogPostList: allContentfulBlogPost(
      filter: { node_locale: { eq: $locale } }
    ) {
      totalCount
      nodes {
        id
        title
        createdAt
        slug
        description
        image {
          fluid(
            maxWidth: 400
            maxHeight: 300
            quality: 100
            resizingBehavior: FILL
            cropFocus: CENTER
          ) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;
