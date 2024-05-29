'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { css } from '@emotion/css';
import Card from '@leafygreen-ui/card';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { borderRadius, color, spacing } from '@leafygreen-ui/tokens';
import { Body, H3 } from '@leafygreen-ui/typography';
import {
  Components,
  Display,
  FormElements,
  Modals,
  Navigation,
  Notifications,
  Patterns,
} from '@/components/glyphs';
import { useMediaQuery } from '@/hooks';

const liveExamplePath = 'live-example';

const categoryMap = {
  Navigation: {
    component: Navigation,
    link: `/component/menu/${liveExamplePath}`,
  },
  Notifications: {
    component: Notifications,
    link: `/component/badge/${liveExamplePath}`,
  },
  Modals: {
    component: Modals,
    link: `/component/modal/code-docs`,
  },
  Display: {
    component: Display,
    link: `/component/card/${liveExamplePath}`,
  },
  FormElements: {
    component: FormElements,
    link: `/component/button/${liveExamplePath}`,
  },
  Patterns: {
    component: Patterns,
    link: `/component/empty-state/${liveExamplePath}`,
  },
} as const;

type ImageKey = keyof typeof categoryMap;

export function ComponentCard() {
  const { theme } = useDarkMode();
  const router = useRouter();
  const [isTablet] = useMediaQuery(['(max-width: 768px)'], {
    fallback: [false],
  });

  return (
    <Card
      className={css`
        padding-left: 0px;
        padding-right: 0px;
        z-index: 0;
      `}
    >
      <div
        className={css`
          padding-bottom: ${spacing[1000]}px;
          border-bottom: 1px solid ${color[theme].border.secondary.default};
          position: relative;
          min-height: 200px;
        `}
      >
        <H3
          className={css`
            margin-bottom: ${spacing[200]}px;
            padding-left: ${spacing[600]}px;
          `}
        >
          Components
        </H3>
        <Body
          baseFontSize={16}
          className={css`
            padding-left: ${spacing[600]}px;
            max-width: 600px;
            position: relative;
            z-index: 1;
          `}
        >
          These components are the building blocks of MongoDB’s design system.
          We’ve grouped these components into the following categories.
        </Body>
        <Components
          className={css`
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 0;
            opacity: ${isTablet ? 0.4 : 1};
          `}
        />
      </div>
      <div
        className={css`
          margin-top: ${spacing[600]}px;
          padding: 0px ${spacing[600]}px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        `}
      >
        {Object.keys(categoryMap).map(type => {
          const Graphic = categoryMap[type as ImageKey].component;

          return (
            <button
              key={type}
              onClick={() => router.push(categoryMap[type as ImageKey].link)}
              className={css`
                margin: 0;
                padding: 0;
                background-color: unset;
                border: 2px solid transparent;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: ${spacing[200]}px ${spacing[150]}px;
                border-radius: ${borderRadius[300]}px;
                transition: background-color 300ms ease-in-out;
                cursor: pointer;

                &:hover {
                  background-color: ${color[theme].background.secondary.hover};
                }

                &:focus {
                  outline: none;
                }

                &:focus-visible {
                  outline: none;
                  background-color: ${color[theme].background.secondary.hover};
                  border-color: ${color[theme].border.primary.focus};
                }
              `}
            >
              <Graphic
                aria-hidden
                className={css`
                  margin-bottom: ${spacing[400]}px;
                `}
              />
              <Body baseFontSize={16}>
                {type
                  .replace(/([A-Z])/g, ' $1')
                  .trim()
                  .replace(/^\w/, c => c.toUpperCase())}
              </Body>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
