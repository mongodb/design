'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from '@emotion/css';
// @ts-expect-error
import DiagramIcon from '@leafygreen-ui/icon/dist/Diagram';
// @ts-expect-error
import UniversityIcon from '@leafygreen-ui/icon/dist/University';
// @ts-expect-error
import AppsIcon from '@leafygreen-ui/icon/dist/Apps';
// @ts-expect-error
import LockIcon from '@leafygreen-ui/icon/dist/Lock';
// @ts-expect-error
import MenuIcon from '@leafygreen-ui/icon/dist/Menu';
// @ts-expect-error
import UnlockIcon from '@leafygreen-ui/icon/dist/Unlock';
import IconButton from '@leafygreen-ui/icon-button';
import {
  PortalContextProvider,
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';
import { MongoDBLogo, SupportedColors } from '@leafygreen-ui/logo';
import { color, spacing } from '@leafygreen-ui/tokens';
import { SIDE_NAV_WIDTH } from '@/constants';
import { useMediaQuery, useSession } from '@/hooks';
import { components } from '@/utils/components';
import { Search } from '../Search/Search';
import { Drawer } from './Drawer';
import { SideNavItem } from './SideNavItem';
import { SideNavLabel } from './SideNavLabel';
import { SideNavList } from './SideNavList';

export function SideNavigation() {
  const session = useSession();
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const [isMobile] = useMediaQuery(['(max-width: 640px)'], {
    fallback: [false],
  });
  const pathname = usePathname();
  const [_, topLevelPage, activeSubDirOrPage] = pathname.split('/');
  const currentComponent =
    topLevelPage === 'component' ? activeSubDirOrPage : '';
  const { darkMode, theme } = useDarkMode();

  const PrivateIcon = session?.user ? UnlockIcon : LockIcon;

  const navContent = (
    <>
      <SideNavLabel
        key="Foundations"
        label="Foundations"
        glyph={
          <UniversityIcon
            className={css`
              margin-right: ${spacing[200]}px;
            `}
          />
        }
      />
      <SideNavList key="foundation-list">
        <SideNavItem
          key="a11y"
          active={pathname === '/foundation/accessibility/'}
          href={'/foundation/accessibility/'}
        >
          Accessibility
        </SideNavItem>

        <SideNavItem
          key="grid"
          active={pathname === '/foundation/grid/'}
          href={'/foundation/grid'}
        >
          Grid
        </SideNavItem>

        <SideNavItem
          key="icons"
          active={pathname === '/foundation/icons/'}
          href={'/foundation/icons'}
        >
          Icons
        </SideNavItem>

        <SideNavItem
          key="icon-creation"
          active={pathname === '/foundation/icon-creation/'}
          href={'/foundation/icon-creation'}
        >
          Icon Creation
        </SideNavItem>

        <SideNavItem
          key="palette"
          active={pathname === '/foundation/palette/'}
          href={'/foundation/palette'}
        >
          Palette
        </SideNavItem>

        <SideNavItem
          key="tokens"
          active={pathname === '/foundation/tokens/'}
          href={'/foundation/tokens'}
        >
          Tokens
        </SideNavItem>

        <SideNavItem
          key="typography"
          active={pathname === '/foundation/typography/'}
          href={'/foundation/typography'}
        >
          Typography
        </SideNavItem>
      </SideNavList>

      <SideNavLabel
        key="patterns"
        label="Patterns"
        glyph={
          <DiagramIcon
            className={css`
              margin-right: ${spacing[200]}px;
            `}
          />
        }
      />

      <SideNavList key="pattern-list">
        <SideNavItem
          key="chat"
          active={pathname === '/pattern/chat/'}
          href={'/pattern/chat'}
        >
          Chat
        </SideNavItem>
        <SideNavItem
          key="empty-state"
          active={
            currentComponent.toLowerCase().split('-').join(' ') ===
            'empty state'
          }
          href={'/component/empty-state/live-example'}
        >
          Empty State
        </SideNavItem>
        <SideNavItem
          key="forms"
          active={pathname === '/pattern/forms/'}
          href={'/pattern/forms'}
        >
          Forms
        </SideNavItem>

        {/* <SideNavItem
          key="mongo-nav"
          active={
            currentComponent.toLowerCase().split('-').join(' ') === 'mongo nav'
          }
          href={'/component/mongo-nav/live-example'}
        >
          Mongo Nav
          <PrivateIcon />
        </SideNavItem> */}

        {/* <SideNavItem
          key="product-feature-walls"
          active={
            currentComponent.toLowerCase().split('-').join(' ') ===
            'product feature walls'
          }
          href={'/component/product-feature-walls/live-example'}
        >
          Product Feature Walls
          <PrivateIcon
            className={css`
              margin-left: ${spacing[400]}px;
            `}
          />
        </SideNavItem> */}
      </SideNavList>

      <SideNavLabel
        key="components label"
        label="Components"
        glyph={
          <AppsIcon
            className={css`
              margin-right: ${spacing[200]}px;
            `}
          />
        }
      />

      <SideNavList key="components-list">
        {components.map(component => (
          <SideNavItem
            key={component.name}
            href={component.navPath}
            active={
              currentComponent.toLowerCase().split('-').join(' ') ===
              component.name.toLowerCase()
            }
          >
            {component.name}
            {component.isPrivate && (
              <PrivateIcon
                className={css`
                  margin-left: ${spacing[400]}px;
                `}
              />
            )}
          </SideNavItem>
        ))}
      </SideNavList>
    </>
  );

  if (isMobile) {
    return (
      <>
        {!open && (
          <IconButton
            size="xlarge"
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className={css`
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
              margin: ${spacing[400]}px;
            `}
          >
            <MenuIcon size="xlarge" />
          </IconButton>
        )}

        <Drawer isOpen={open} onClose={() => setOpen(false)}>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={css`
              display: flex;
              padding-top: ${spacing[400]}px;
              padding-left: ${spacing[400]}px;
            `}
          >
            <MongoDBLogo
              height={spacing[800]}
              color={
                theme === 'dark'
                  ? SupportedColors.GreenBase
                  : SupportedColors.Black
              }
            />
          </Link>
          {navContent}
        </Drawer>
      </>
    );
  }

  return (
    <PortalContextProvider
      popover={{
        scrollContainer: navRef?.current,
        portalContainer: navRef?.current,
      }}
    >
      <nav
        ref={navRef}
        key="navigation"
        className={css`
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: ${SIDE_NAV_WIDTH}px;
          overflow-y: auto;
          list-style-type: none;
          overflow-x: hidden;
          padding-bottom: 16px;
          font-size: 12px;
          border-right: 1px solid ${color[theme].border.secondary.default};
          z-index: 1;
        `}
      >
        <header key="header">
          <SideNavItem
            key="logo-item"
            className={css`
              padding-top: ${spacing[600]}px;
              padding-bottom: ${spacing[600]}px;
              height: unset;
            `}
            href={'/'}
          >
            <MongoDBLogo
              key="logo"
              height={24}
              color={darkMode ? SupportedColors.White : SupportedColors.Black}
              className={css`
                z-index: 0;
              `}
            />
          </SideNavItem>
        </header>

        <Search />

        {navContent}
      </nav>
    </PortalContextProvider>
  );
}
