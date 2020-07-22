import React from 'react';
import styled from 'styled-components';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { HeroBlockFragment } from '../../../gatsby-graphql';
import { BaseContainer } from '../../styles/BaseComponents';
import { colors, sizes } from '../../styles/theme';

const Hero: React.FC<HeroBlockFragment> = ({ background, body }) => (
  <Container>
    <ImageContainer>
      <StyledGatsbyImage fluid={background?.fluid as FluidObject} />
      <Overlay />
      <HeroBodyContainer>
        <BaseContainer>
          {documentToReactComponents(body?.json, {})}
        </BaseContainer>
      </HeroBodyContainer>
    </ImageContainer>
  </Container>
);

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: calc(100vh - ${sizes.headerDesktopHeight});
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.heroOverlay};
`;

const HeroBodyContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  p {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export default Hero;
