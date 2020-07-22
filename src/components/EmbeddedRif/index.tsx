import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import { EmbeddedRifFragment } from '../../../gatsby-graphql';
import { BaseContainer } from '../../styles/BaseComponents';

const EmbeddedRif: React.FC<EmbeddedRifFragment> = ({ body }) => (
  <StyledBaseContainer>
    {documentToReactComponents(body?.json, {})}
  </StyledBaseContainer>
);

const StyledBaseContainer = styled(BaseContainer)`
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  p {
    max-width: 500px;
    margin: 0 auto 1.45rem;
  }
`;

export default EmbeddedRif;
