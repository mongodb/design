'use client';

import { css } from '@emotion/css';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

import IconButton from '@leafygreen-ui/icon-button';
import { CodeSandbox, Figma, Github } from '@/components/glyphs';
import { Tabs, Tab } from '@leafygreen-ui/tabs';
import { spacing } from '@leafygreen-ui/tokens';
import { H2 } from '@leafygreen-ui/typography';

import { useSession } from '@/hooks';
import { SubPath, getGithubLink } from '@/utils';
import { useContentStackContext } from '@/contexts/ContentStackContext';

import { titleCase } from '@/utils/titleCase';
import { PrivateContentWall } from '@/components/global';

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
  const { components: componentsFromContext } = useContentStackContext();
  // canvas-header => Canvas Header
  const componentTitle = titleCase(currentComponent.split('-').join(' '));
  // Find component in context. This will include the data from Contentstack
  const component = componentsFromContext.find(
    component => component.title === componentTitle,
  );

  const isComponentPrivate = component?.private;
  const shouldRenderPrivateContentWall = Boolean(
    isComponentPrivate && !isLoggedIn,
  );

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
      href: getGithubLink(
        component?.private ?? false,
        currentComponent as SubPath,
      ),
      icon: <Github />,
    },
    {
      'aria-label': 'Edit in CodeSandbox',
      href: component?.codesandbox_url?.href,
      icon: <CodeSandbox />,
    },
  ];

  return (
    <div
      className={css`
        min-height: 100vh;
      `}
    >
      {shouldRenderPrivateContentWall ? (
        <PrivateContentWall />
      ) : (
        <>
          <H2
            className={css`
              text-transform: capitalize;
              margin-bottom: ${spacing[600]}px;
            `}
          >
            {currentComponent.split('-').join(' ')}
          </H2>

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

                    if (!href) {
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
