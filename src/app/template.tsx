'use client';

import { css, cx } from '@emotion/css';
import React from 'react';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { color, spacing } from '@leafygreen-ui/tokens';

import {
  DarkModeToggle,
  Footer,
  UserMenu,
  SideNavigation,
} from '@/components/global';
import { useMediaQuery } from '@/hooks';
import { SIDE_NAV_WIDTH } from '@/constants';

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
          position: absolute;
          top: 0;
          right: 0;
        `}
      >
        {/* <UserMenu /> */}
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
        <Footer />
      </div>
    </div>
  );
}
