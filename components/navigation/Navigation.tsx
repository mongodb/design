// TODO: Remove this
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/css';
import { spacing, breakpoints } from '@leafygreen-ui/tokens';
import { SideNav, CollapsedSideNavItem } from '@leafygreen-ui/side-nav';
import { useViewportSize } from '@leafygreen-ui/hooks';
import { MongoDBLogo, MongoDBLogoMark } from '@leafygreen-ui/logo';
import { HOME_PAGE } from 'utils/routes';
import MobileNavigation from './MobileNavigation';
import NavigationContent from './NavigationContent';

const sideNavStyles = css`
  z-index: 1;

  li {
    margin: 6px 0;
  }
`;

const logoStyles = css`
  cursor: pointer;
`;

const logoLinkStyles = css`
  display: inline-block;
  // adds back spacing that was already built into side nav
  margin: 12px 0 ${spacing[4]}px ${spacing[3]}px;
`;

function Navigation() {
  const { push } = useRouter();
  const viewport = useViewportSize();
  const isTouchDevice = !!viewport && viewport.width < breakpoints.Desktop;

  if (isTouchDevice) {
    return (
      <MobileNavigation>
        <NavigationContent isTouchDevice />
      </MobileNavigation>
    );
  }

  return (
    <SideNav aria-label="LeafyGreen Design System" className={sideNavStyles}>
      <a
        className={logoLinkStyles}
        href="/"
        onClick={e => {
          e.preventDefault();
          push(HOME_PAGE);
        }}
      >
        <MongoDBLogo height={32} className={logoStyles} />
      </a>
      <CollapsedSideNavItem
        className={css`
          background-color: #09804c;
          // Some CSS trickery to make the item not respect the overall padding in the side navigation.
          // 1px pixel-pushing for aesthetics.
          margin-top: -${spacing[3] + 1}px;
          height: calc(25px + ${spacing[4] * 2}px + ${spacing[3]}px);
        `}
      >
        <MongoDBLogoMark color="white" height={24} />
      </CollapsedSideNavItem>
      <NavigationContent />
    </SideNav>
  );
}

Navigation.displayName = 'Navigation';

export default Navigation;
