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
import ReactIcon from 'components/svgs/ReactIcon';
import FigmaIcon from 'components/svgs/FigmaIcon';
import { mq } from 'utils/mediaQuery';
import { pageContainerWidth } from 'styles/constants';
import { ComponentFields } from 'utils/getContentfulResources';

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

  & > p {
    font-size: 16px;
    line-height: 24px;
  }
`;

const codeDocsWrapper = css`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const reactIconStyle = css`
  margin-right: 4px;
`;

function ComponentLayout({ componentFields, children }: { componentFields: ComponentFields, children: React.ReactNode }) {
  const pageTitle = `${componentFields.name} – LeafyGreen Design System | MongoDB`;

  const router = useRouter();
  const viewport = useViewportSize();
  const isMobile =
    viewport !== null ? viewport.width < breakpoints.Tablet : false;

  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    const activeTab = router.pathname
      .split('/')
      .filter(subStr => !!subStr)[2];
    setSelected(
      activeTab === 'example' ? 0 : activeTab === 'guidelines' ? 1 : 2,
    );
  }, [router]);

  return (
    <div role="main" className={layout}>
      <Head>
        <title>{pageTitle}</title>

        <meta property="og:title" content={pageTitle} />
        {componentFields.description && (
          <meta
            property="og:description"
            content={componentFields.description}
          />
        )}
      </Head>

      <div className={margin4}>
        <div className={flexContainer}>
          <H2 as="h1" className={caps}>
            {componentFields.name}
          </H2>

          {!isMobile && componentFields.figmaUrl && (
            <Button
              leftGlyph={<FigmaIcon />}
              variant="primary"
              href={componentFields.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View in Figma
            </Button>
          )}
        </div>
      </div>
      <Tabs
        selected={selected}
        setSelected={setSelected}
        aria-label={`Information on LeafyGreen UI ${componentFields.name
          .split('-')
          .join(' ')} component`}
      >
        <Tab
          name="Live Example"
          onClick={() => router.push(`/component/${componentFields.kebabCaseName}/example`)}
        >
          {children}
        </Tab>
        <Tab
          name="Design Guidelines"
          onClick={() => router.push(`/component/${componentFields.kebabCaseName}/guidelines`)}
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
            router.push(`/component/${componentFields.kebabCaseName}/documentation`)
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
