'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from '@emotion/css';
// @ts-expect-error
import GovernmentBuildingIcon from '@leafygreen-ui/icon/dist/GovernmentBuilding';
// @ts-expect-error
import UniversityIcon from '@leafygreen-ui/icon/dist/University';
// @ts-expect-error
import AppsIcon from '@leafygreen-ui/icon/dist/Apps';
// @ts-expect-error
import LockIcon from '@leafygreen-ui/icon/dist/Lock';
// @ts-expect-error
import MenuIcon from '@leafygreen-ui/icon/dist/Menu';
import IconButton from '@leafygreen-ui/icon-button';
import {
  PortalContextProvider,
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';
import { MongoDBLogo, SupportedColors } from '@leafygreen-ui/logo';
import { color, spacing } from '@leafygreen-ui/tokens';
import { SIDE_NAV_WIDTH } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { ComponentMeta, Group, groupedComponents } from '@/utils/components';
import { Search } from '../Search/Search';
import { Drawer } from './Drawer';
import { SideNavItem } from './SideNavItem';
import { SideNavLabel } from './SideNavLabel';
import { SideNavList } from './SideNavList';

export function SideNavigation() {
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
          key="grid"
          active={pathname === '/foundations/chat/'}
          href={'/foundations/chat'}
        >
          Chat
        </SideNavItem>
        <SideNavItem
          key="grid"
          active={pathname === '/foundations/forms/'}
          href={'/foundations/forms'}
        >
          Form Guidelines
        </SideNavItem>
        <SideNavItem
          key="grid"
          active={pathname === '/foundations/grid/'}
          href={'/foundations/grid'}
        >
          Grid
        </SideNavItem>
        <SideNavItem
          key="icons"
          active={pathname === '/foundations/icons/'}
          href={'/foundations/icons'}
        >
          Icons
        </SideNavItem>
        <SideNavItem
          key="palette"
          active={pathname === '/foundations/palette/'}
          href={'/foundations/palette'}
        >
          Palette
        </SideNavItem>
        <SideNavItem
          key="tokens"
          active={pathname === '/foundations/tokens/'}
          href={'/foundations/tokens'}
        >
          Tokens
        </SideNavItem>
        <SideNavItem
          key="typography"
          active={pathname === '/foundations/typography/'}
          href={'/foundations/typography'}
        >
          Typography
        </SideNavItem>
      </SideNavList>

      <SideNavLabel
        key="resources"
        label="Resources"
        glyph={
          <GovernmentBuildingIcon
            className={css`
              margin-right: ${spacing[200]}px;
            `}
          />
        }
      />

      <SideNavList key="resources-list">
        <SideNavItem
          key="a11y"
          active={pathname === '/resources/accessibility/'}
          href={'/resources/accessibility'}
        >
          Accessibility
        </SideNavItem>
        <SideNavItem
          key="icon-creation"
          active={pathname === '/resources/icon-creation/'}
          href={'/resources/icon-creation'}
        >
          Icon Creation
        </SideNavItem>
        <SideNavItem
          key="refresh-guide"
          active={pathname === '/resources/refresh-guide/'}
          href={'/resources/refresh-guide'}
        >
          Refresh Guide
        </SideNavItem>
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

      {Object.keys(groupedComponents).map((groupName, index) => (
        <>
          <SideNavLabel
            key={groupName}
            label={groupName.split('-').join(' ')}
          />

          <SideNavList key={`${groupName}-${index}`}>
            {groupedComponents[groupName as Group].map(
              (component: ComponentMeta) => {
                return (
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
                      <LockIcon
                        className={css`
                          margin-left: ${spacing[400]}px;
                        `}
                      />
                    )}
                  </SideNavItem>
                );
              },
            )}
          </SideNavList>
        </>
      ))}
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
