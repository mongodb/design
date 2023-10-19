import React from 'react';
import kebabCase from 'lodash/kebabCase';
import startCase from 'lodash/startCase';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { pageContainerWidth } from 'styles/constants';
import { containerPadding } from 'styles/globals';
import { ComponentFields } from 'utils/ContentStack/types';
import getFullPageTitle from 'utils/getFullPageTitle';
import { getGithubLink } from 'utils/getGithubLink';
import { mq } from 'utils/mediaQuery';

import FigmaIcon from 'components/icons/FigmaIcon';
import GithubIcon from 'components/icons/GithubIcon';
import { NextLinkWrapper } from 'components/NextLinkWrapper';

import { css, cx } from '@leafygreen-ui/emotion';
import { useViewportSize } from '@leafygreen-ui/hooks';
import IconButton from '@leafygreen-ui/icon-button';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { palette } from '@leafygreen-ui/palette';
import { Tab, Tabs } from '@leafygreen-ui/tabs';
import { breakpoints, spacing } from '@leafygreen-ui/tokens';
import { H2 } from '@leafygreen-ui/typography';

const layout = css`
  ${mq({
    // 51px is a magic number for baseline alignment with the first SideNavGroup header
    marginTop: [`${spacing[4]}px`, `${spacing[4]}px`, '51px'],
  })}
`;

const pageHeaderStyle = css`
  margin-bottom: ${spacing[4]}px;
  text-transform: capitalize;
`;

const flexContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

const mainContentStyle = css`
  position: relative;
`;

const liveExamplePageStyles = css`
  margin: ${spacing[4]}px 0px;
  max-width: 100%;
`;
const codeDocsPageStyles = liveExamplePageStyles;

const componentGuidelinePageStyles = css`
  overflow-wrap: anywhere;
  color: ${palette.gray.dark3};
  margin: ${spacing[4]}px 0px;
  max-width: ${pageContainerWidth.default}px;
`;

const mobileLinksContainer = css`
  flex: 1;
  justify-content: flex-end;
  align-self: center;
`;

const desktopLinksContainer = css`
  border-bottom: 1px solid ${palette.gray.light2};
  padding-bottom: 11px;
  align-self: flex-start;
  flex: 1;
  justify-content: flex-end;
`;

const tabStyles = css`
  width: 100%;
  max-width: 100%;
  [role='tablist'] {
    width: 100%;
    max-width: 100%;
    overflow-x: scroll;
    ${mq({
      padding: ['0px 8px', '0px'],
    })}
  }
`;

const ComponentLinks = ({
  component,
  ...rest
}: {
  component: ComponentFields;
  [key: string]: any;
}) => (
  <div {...rest}>
    <IconButton
      aria-label="View in Github"
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginRight: '8px' }}
      href={getGithubLink(component.private, component.title)}
    >
      <GithubIcon />
    </IconButton>
    {component.figmaurl && (
      <IconButton
        aria-label="View in Figma"
        as="a"
        href={component.figmaurl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FigmaIcon />
      </IconButton>
    )}
  </div>
);

function ComponentLayout({
  component,
  componentName,
  children,
}: {
  component?: ComponentFields;
  children: React.ReactNode;
  componentName: string;
}) {
  const router = useRouter();
  const { data: session } = useSession();

  const pageTitle = getFullPageTitle(startCase(componentName));
  const isPrivate = !!component?.private;

  const viewport = useViewportSize();
  const isMobile =
    viewport !== null ? viewport.width < breakpoints.Tablet : false;

  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    const activeTab = router.pathname.split('/').filter(subStr => !!subStr)[
      isPrivate ? 3 : 2
    ];
    setSelected(
      activeTab === 'example' ? 0 : activeTab === 'guidelines' ? 1 : 2,
    );
  }, [router]);

  return (
    <div role="main" className={layout}>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        {/* If the description field doesn't exist, it will default to a description of the site, defined in _document. */}
        {component?.description && (
          <meta property="og:description" content={component?.description} />
        )}
        <meta name="keywords" content={component?.title} />
      </Head>

      <div className={mainContentStyle}>
        <div className={cx([flexContainer, containerPadding])}>
          <H2 as="h1" className={pageHeaderStyle}>
            {componentName}
          </H2>
          {isMobile && component && session && (
            <ComponentLinks
              component={component}
              className={cx([flexContainer, mobileLinksContainer])}
            />
          )}
        </div>
        {component && (!component.private || (component.private && session)) ? (
          <div className={flexContainer}>
            <Tabs
              selected={selected}
              setSelected={setSelected}
              aria-label={`Information on LeafyGreen UI ${pageTitle} component`}
              className={tabStyles}
              inlineChildren={
                !isMobile &&
                component && (
                  <ComponentLinks
                    component={component}
                    className={cx([flexContainer, desktopLinksContainer])}
                  />
                )
              }
              as={NextLinkWrapper}
            >
              <Tab
                name="Live Example"
                href={`/component/${isPrivate ? 'private/' : ''}${kebabCase(
                  componentName,
                )}/example`}
              >
                <div className={liveExamplePageStyles}>{children}</div>
              </Tab>
              <Tab
                name="Design Guidelines"
                href={`/component/${isPrivate ? 'private/' : ''}${kebabCase(
                  componentName,
                )}/guidelines`}
              >
                <LeafyGreenProvider baseFontSize={16}>
                  <div className={componentGuidelinePageStyles}>{children}</div>
                </LeafyGreenProvider>
              </Tab>
              <Tab
                name="Code Docs"
                href={`/component/${isPrivate ? 'private/' : ''}${kebabCase(
                  componentName,
                )}/documentation`}
              >
                <div className={codeDocsPageStyles}>{children}</div>
              </Tab>
            </Tabs>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </div>
  );
}

ComponentLayout.displayName = 'ComponentLayout';

export default ComponentLayout;
