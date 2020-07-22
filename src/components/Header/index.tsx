import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GatsbyImage, { FixedObject } from 'gatsby-image';
import { SiteNavigationFragment } from '../../../gatsby-graphql';
import { BaseContainer } from '../../styles/BaseComponents';
import { useI18 } from '../../hooks/i18n';
import { colors, fonts, sizes } from '../../styles/theme';
import LocaleToggle from '../LocaleToggle';

export interface IHeaderProps {
  navigation: SiteNavigationFragment['navigation'];
  locale: string;
  pathname: string;
}
const Header: React.FC<IHeaderProps> = ({ navigation, locale, pathname }) => {
  const { createLocalizedPathname } = useI18({
    currentLocale: locale,
  });
  return (
    <StyledHeader>
      <StyledBaseContainer>
        <HomeLink
          to={createLocalizedPathname(navigation?.homePage?.path as string)}
        >
          <GatsbyImage
            fixed={navigation?.logo?.fixed as FixedObject}
            loading="eager"
            fadeIn={false}
          />
          <span>{navigation?.homePage?.name}</span>
        </HomeLink>
        <SideNavigationContainer>
          {navigation?.sideNavigation?.map((navItem) => (
            <Link
              key={navItem?.path as string}
              to={createLocalizedPathname(navItem?.path as string)}
              activeClassName="active"
              partiallyActive
            >
              {navItem?.name}
            </Link>
          ))}
          <StyledLocaleToggle currentLocale={locale} pathname={pathname} />
        </SideNavigationContainer>
      </StyledBaseContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: relative;
  background: ${colors.surface};
  border-bottom: 1px solid ${colors.dark.border};
  a {
    text-decoration: none;
    color: inherit;
    font-family: ${fonts.sansSerif};
  }
  img {
    margin-bottom: 0;
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  span {
    margin-left: 1rem;
  }
`;

const StyledBaseContainer = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes.headerDesktopHeight};
`;

const SideNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 1rem;
    &.active {
      font-weight: bold;
    }
  }
`;

const StyledLocaleToggle = styled(LocaleToggle)`
  margin-left: 2rem;
`;
export default Header;
