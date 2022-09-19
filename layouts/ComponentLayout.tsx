import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { css } from '@emotion/css';
import Button from '@leafygreen-ui/button';
import { useViewportSize } from '@leafygreen-ui/hooks';
import { palette } from '@leafygreen-ui/palette';
import { Tabs, Tab } from '@leafygreen-ui/tabs';
import { spacing, breakpoints } from '@leafygreen-ui/tokens';
import { H2 } from '@leafygreen-ui/typography';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import ReactIcon from 'components/icons/ReactIcon';
import FigmaIcon from 'components/icons/FigmaIcon';
import GithubIcon from 'components/icons/GithubIcon';
import { mq } from 'utils/mediaQuery';
import { pageContainerWidth } from 'styles/constants';
import { ComponentFields } from 'utils/types';
import kebabCase from 'lodash/kebabCase';
import getFullPageTitle from 'utils/getFullPageTitle';

const layout = css`
  ${mq({
  // 51px is a magic number for baseline alignment with the first SideNavGroup header
  marginTop: [`${spacing[4]}px`, `${spacing[4]}px`, '51px'],
  width: ['100%', '100%', '100%', `${pageContainerWidth.dataGraphic}px`],
})}
`;

const margin4 = css`
  margin-bottom: ${spacing[4]}px;
`;

const flexContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const caps = css`
  text-transform: capitalize;
`;

const componentGuidelineStyles = css`
  overflow-wrap: anywhere;
  color: ${palette.gray.dark3};
  margin: ${spacing[4]}px 0px;
  max-width: ${pageContainerWidth.default}px;
`;

const codeDocsWrapper = css`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const reactIconStyle = css`
  margin-right: 4px;
`;

function ComponentLayout({
  componentFields,
  children,
}: {
  componentFields: ComponentFields;
  children: React.ReactNode;
}) {
  const pageTitle = getFullPageTitle(componentFields.name);

  const router = useRouter();
  const viewport = useViewportSize();
  const isMobile =
    viewport !== null ? viewport.width < breakpoints.Tablet : false;

  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    const activeTab = router.pathname.split('/').filter(subStr => !!subStr)[2];
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
        {componentFields.description && (
          <meta
            property="og:description"
            content={componentFields.description}
          />
        )}
        <meta name="keywords" content={componentFields.name} />
      </Head>

      <div className={margin4}>
        <div className={flexContainer}>
          <H2 as="h1" className={caps}>
            {componentFields.name}
          </H2>

          {!isMobile && (
            <div className={flexContainer}>
              <Button
                leftGlyph={<GithubIcon />}
                variant="primaryOutline"
                href={`https://github.com/mongodb/leafygreen-ui/tree/main/packages/${kebabCase(
                  componentFields.name,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '8px' }}
              >
                View in Github
              </Button>
              <Button
                leftGlyph={<FigmaIcon />}
                variant="primary"
                href={componentFields.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Figma
              </Button>
            </div>
          )}
        </div>
      </div>
      <Tabs
        selected={selected}
        setSelected={setSelected}
        aria-label={`Information on LeafyGreen UI ${componentFields.name} component`}
      >
        <Tab
          name="Live Example"
          onClick={() =>
            router.push(`/component/${kebabCase(componentFields.name)}/example`)
          }
        >
          {children}
        </Tab>
        <Tab
          name="Design Guidelines"
          onClick={() =>
            router.push(
              `/component/${kebabCase(componentFields.name)}/guidelines`,
            )
          }
        >
          <LeafyGreenProvider baseFontSize={16}>
            <div className={componentGuidelineStyles}>{children}</div>
          </LeafyGreenProvider>
        </Tab>
        <Tab
          name={
            <div className={codeDocsWrapper}>
              <ReactIcon className={reactIconStyle} />
              Code Docs
            </div>
          }
          onClick={() =>
            router.push(
              `/component/${kebabCase(componentFields.name)}/documentation`,
            )
          }
        >
          {children}
        </Tab>
      </Tabs>
    </div>
  );
}

ComponentLayout.displayName = 'ComponentLayout';

export default ComponentLayout;
