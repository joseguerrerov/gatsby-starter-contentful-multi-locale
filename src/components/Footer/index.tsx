import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../styles/BaseComponents';
import { colors, fonts } from '../../styles/theme';

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledBaseContainer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      and Powered with
      {` `}
      <a href="https://www.gatsbyjs.org">Contentful</a>
    </StyledBaseContainer>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  border-top: 1px solid ${colors.dark.border};
  font-family: ${fonts.sansSerif};
`;

const StyledBaseContainer = styled(BaseContainer)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export default Footer;
