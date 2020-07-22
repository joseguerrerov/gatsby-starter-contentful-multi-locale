import React from 'react';
import styled from 'styled-components';
import Header, { IHeaderProps } from '../Header';
import Seo, { ISeoProps } from '../Seo';
import Footer from '../Footer';
import { sizes } from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyles';

interface ILayoutProps extends Omit<IHeaderProps, 'locale'> {
  seo: ISeoProps;
}

const Layout: React.FC<ILayoutProps> = ({
  children,
  seo: { title, description, locale, image },
  navigation,
  pathname,
}) => (
  <>
    <GlobalStyles />
    <Seo
      description={description}
      locale={locale}
      title={title}
      image={image}
    />
    <Header
      navigation={navigation}
      locale={locale as string}
      pathname={pathname as string}
    />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

const StyledMain = styled.main`
  min-height: calc(100vh - ${sizes.headerDesktopHeight});
`;

export default Layout;
