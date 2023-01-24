// TODO: Remove this
/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from 'next/router';
import { HOME_PAGE } from 'utils/routes';

import { useViewportSize } from '@leafygreen-ui/hooks';
import { MongoDBLogo, MongoDBLogoMark } from '@leafygreen-ui/logo';
import { CollapsedSideNavItem,SideNav } from '@leafygreen-ui/side-nav';
import { breakpoints,spacing } from '@leafygreen-ui/tokens';

import MobileNavigation from './MobileNavigation';
import NavigationContent from './NavigationContent';

import { css } from '@emotion/css';

const sideNavStyles = css`
  z-index: 1;
  div {
    padding-top: 0;
  }
  ul {
    padding-top: 0;
  }

  li {
    margin: 0px;

    &:first-of-type {
      border-top: none;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }
  }
`;

const logoStyles = css`
  cursor: pointer;
`;

const logoLinkStyles = css`
  display: inline-block;
  margin-left: ${spacing[3]}px;
  padding: 48px 0;
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
          padding: 64px 0;
        `}
      >
        <MongoDBLogoMark color="white" height={32} />
      </CollapsedSideNavItem>
      <NavigationContent />
    </SideNav>
  );
}

Navigation.displayName = 'Navigation';

export default Navigation;
