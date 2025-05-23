'use client';

import { css, cx } from '@emotion/css';
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { color, spacing } from '@leafygreen-ui/tokens';

import {
  DisplayMode,
  Drawer,
  DrawerStackProvider,
} from '@leafygreen-ui/drawer';

import {
  DarkModeToggle,
  Footer,
  UserMenu,
  SideNavigation,
} from '@/components/global';
import { useMediaQuery } from '@/hooks';
import { SIDE_NAV_WIDTH } from '@/constants';
import IconButton from '@leafygreen-ui/icon-button';
import Icon from '@leafygreen-ui/icon';
import { ChatbotComponent } from '@/components/chatbot';

const DRAWER_WIDTH = 432;

export default function Template({ children }: { children: React.ReactNode }) {
  const { darkMode } = useDarkMode();

  const [isMobile] = useMediaQuery(['(max-width: 640px)'], {
    fallback: [false],
  });

  return (
    <div
      className={css`
        min-height: 100vh;
        height: 100%;
        width: 100%;
        background-color: ${darkMode
          ? color.dark.background.primary.default
          : color.light.background.primary.default};
      `}
    >
      <SideNavigation />

      <div
        className={css`
          width: 100%;
          padding-top: ${spacing[400]}px;
          padding-right: ${spacing[400]}px;
          display: flex;
          justify-content: flex-end;
          gap: ${spacing[150]}px;
        `}
      >
        <UserMenu />
        <DarkModeToggle />
      </div>

      <div
        className={cx(
          css`
            height: 100%;
            margin-left: ${isMobile
              ? 0
              : `${SIDE_NAV_WIDTH}px`}; // SideNav override}))}
            padding-left: ${spacing[1000]}px;
            padding-right: ${spacing[1000]}px;
            padding-top: ${spacing[1600]}px;
          `,
        )}
      >
        {children}
        <ChatbotComponent />
        <Footer />
      </div>
    </div>
  );
}

/**
 * Temporary Drawer Layout component.
 * To be removed when the next major Drawer version is ready.
 */
const TempDrawerLayout = ({
  children,
  open,
  setOpen,
}: PropsWithChildren<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>) => {
  return (
    <div
      className={cx(
        css`
          width: 100%;
          display: grid;
          grid-template-columns: auto 0;
          transition: grid-template-columns 0.2s ease-in-out;
        `,
        {
          [css`
            grid-template-columns: auto ${DRAWER_WIDTH}px;
          `]: open,
        },
      )}
    >
      <div>{children}</div>

      <DrawerStackProvider>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="LeafyGreen AI"
          displayMode={DisplayMode.Embedded}
        >
          <ChatbotComponent />
        </Drawer>
      </DrawerStackProvider>
    </div>
  );
};
