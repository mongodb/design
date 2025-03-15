'use client';

import { css } from '@emotion/css';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import startCase from 'lodash/startCase';

import IconButton from '@leafygreen-ui/icon-button';
import { CodeSandbox, Figma, Github, Security } from '@/components/glyphs';
import { Tabs, Tab } from '@leafygreen-ui/tabs';
import { spacing } from '@leafygreen-ui/tokens';
import { H2 } from '@leafygreen-ui/typography';

import { useSession } from '@/hooks';
import { getGithubLink } from '@/utils';
import { useContentStackContext } from '@/contexts/ContentStackContext';

import { components as staticComponents } from '@/utils/components';
import { titleCase } from '@/utils/titleCase';
import { login } from '@/auth';
import Button from '@leafygreen-ui/button';
import { BasicEmptyState } from '@leafygreen-ui/empty-state';
// @ts-expect-error
import LogInIcon from '@leafygreen-ui/icon/dist/LogIn';

const liveExamplePath = 'live-example';
const designDocsPath = 'design-docs';
const codeDocsPath = 'code-docs';

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const currentComponent = pathname.split('/')[2];
  const { components } = useContentStackContext();

  const isComponentPrivate = staticComponents.find(
    component => component.name === titleCase(currentComponent),
  )?.isPrivate;

  const componentTitle = startCase(currentComponent.split('-').join(' '));

  const component = components.find(
    component => component.title === componentTitle,
  );

  console.log('🎃', { isComponentPrivate });

  const getSelected = () => {
    const suffix = pathname.split('/')[3];
    if (suffix === liveExamplePath) {
      return 0;
    }

    if (suffix === designDocsPath) {
      return 1;
    }

    if (suffix === codeDocsPath) {
      return 2;
    }
  };

  const externalLinks = [
    {
      'aria-label': 'View Figma file',
      href: component?.figmaurl,
      icon: <Figma />,
      isPrivate: true,
    },
    {
      'aria-label': 'View GitHub package',
      href: getGithubLink(component?.private ?? false, component?.title),
      icon: <Github />,
    },
    {
      'aria-label': 'Edit in CodeSandbox',
      href: component?.codesandbox_url?.href,
      icon: <CodeSandbox />,
    },
  ];

  const isPrivate = Boolean(isComponentPrivate && !isLoggedIn);

  return (
    <div
      className={css`
        min-height: 100vh;
      `}
    >
      <H2
        className={css`
          text-transform: capitalize;
          margin-bottom: ${spacing[600]}px;
        `}
      >
        {currentComponent.split('-').join(' ')}
      </H2>

      {isPrivate ? (
        <BasicEmptyState
          title="Log in to view private content"
          description="This page is locked for security purposes and only accessible by MongoDB employees."
          primaryButton={
            <Button
              variant="primary"
              onClick={() => login()}
              leftGlyph={<LogInIcon />}
            >
              Log In
            </Button>
          }
          graphic={<Security />}
        />
      ) : (
        <>
          <Tabs
            selected={getSelected()}
            aria-label="main tabs"
            className={css`
              margin-bottom: ${spacing[800]}px;
            `}
            inlineChildren={
              <>
                {externalLinks.map(
                  (
                    { 'aria-label': ariaLabel, href, icon, isPrivate },
                    index,
                  ) => {
                    if (isPrivate && !isLoggedIn) {
                      return null;
                    }
                    return (
                      <IconButton
                        key={ariaLabel + index}
                        aria-label={ariaLabel}
                        size="large"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon}
                      </IconButton>
                    );
                  },
                )}
              </>
            }
          >
            <Tab
              onClick={() =>
                router.push(`/component/${currentComponent}/${liveExamplePath}`)
              }
              name="Live Example"
            >
              <></>
            </Tab>
            <Tab
              onClick={() =>
                router.push(`/component/${currentComponent}/${designDocsPath}`)
              }
              name="Design Documentation"
            >
              <></>
            </Tab>
            <Tab
              onClick={() =>
                router.push(`/component/${currentComponent}/${codeDocsPath}`)
              }
              name="Code Documentation"
            >
              <></>
            </Tab>
          </Tabs>

          <div>{children}</div>
        </>
      )}
    </div>
  );
}
