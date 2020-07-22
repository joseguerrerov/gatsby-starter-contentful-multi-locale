import { graphql } from 'gatsby';

export const HeroFragment = graphql`
  fragment HeroBlock on ContentfulHero {
    body {
      json
    }
    background {
      fluid(
        maxWidth: 1080
        resizingBehavior: FILL
        quality: 100
        cropFocus: CENTER
      ) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`;

export const EmbeddedRifFragment = graphql`
  fragment EmbeddedRif on ContentfulEmbeddedRif {
    body {
      json
    }
  }
`;
