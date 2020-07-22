import { graphql } from 'gatsby';

export const PageSeoFragment = graphql`
  fragment PageSeo on ContentfulPage {
    pageSeo {
      title
      description
      image {
        file {
          url
        }
      }
    }
  }
`;

export const SiteNavigation = graphql`
  fragment SiteNavigation on Query {
    navigation: contentfulNavigation(
      slug: { eq: "web-page-navigation" }
      node_locale: { eq: $locale }
    ) {
      homePage {
        path
        name
      }
      logo {
        fixed(height: 36, quality: 100) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
      }
      sideNavigation {
        name
        path
      }
    }
  }
`;

export const PageBlocksFragment = graphql`
  fragment PageBlocks on ContentfulPage {
    blocks {
      __typename
      ... on ContentfulHero {
        ...HeroBlock
      }
      ... on ContentfulEmbeddedRif {
        ...EmbeddedRif
      }
    }
  }
`;
