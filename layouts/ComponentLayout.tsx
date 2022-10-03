import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import IconButton from '@leafygreen-ui/icon-button';
import { useViewportSize } from '@leafygreen-ui/hooks';
import { palette } from '@leafygreen-ui/palette';
import { Tabs, Tab } from '@leafygreen-ui/tabs';
import { spacing, breakpoints } from '@leafygreen-ui/tokens';
import { H1, H2 } from '@leafygreen-ui/typography';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import FigmaIcon from 'components/icons/FigmaIcon';
import GithubIcon from 'components/icons/GithubIcon';
import { mq } from 'utils/mediaQuery';
import { pageContainerWidth } from 'styles/constants';
import { ComponentFields } from 'utils/types';
import kebabCase from 'lodash/kebabCase';
import getFullPageTitle from 'utils/getFullPageTitle';
import { css, cx } from '@leafygreen-ui/emotion';
import { containerPadding } from 'styles/globals';

const layout = css`
  ${mq({
  // 51px is a magic number for baseline alignment with the first SideNavGroup header
  marginTop: [`${spacing[4]}px`, `${spacing[4]}px`, '0'],
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
  max-width: ${pageContainerWidth.dataGraphic}px;
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
  [role=tablist] {
    width: 100%;
    max-width: 100%;
    overflow-x: scroll;
    ${mq({
  padding: ['0px 8px', '0px']
})}
  }
`;

const ComponentLinks = ({ componentFields, ...rest }) => (
  <div {...rest}>
    <IconButton
      aria-label="View in Github"
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginRight: '8px' }}
      href={`https://github.com/mongodb/leafygreen-ui/tree/main/packages/${kebabCase(
        componentFields.name,
      )}`}
    >
      <GithubIcon />
    </IconButton>
    <IconButton
      aria-label="View in Figma"
      as="a"
      href={componentFields.figmaUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FigmaIcon />
    </IconButton>
  </div>
)

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

      <div className={mainContentStyle}>
        <div className={cx([flexContainer, containerPadding])}>
          <H2 as="h1" className={pageHeaderStyle}>
            {componentFields.name}
          </H2>
          {isMobile && (
            <ComponentLinks componentFields={componentFields} className={cx([flexContainer, mobileLinksContainer])} />
          )}
        </div>
        <div className={flexContainer}>
          <Tabs
            selected={selected}
            setSelected={setSelected}
            aria-label={`Information on LeafyGreen UI ${componentFields.name} component`}
            className={tabStyles}
          >
            <Tab
              name="Live Example"
              onClick={() =>
                router.push(
                  `/component/${kebabCase(componentFields.name)}/example`,
                )
              }
            >
              <div className={liveExamplePageStyles}>{children}</div>
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
                <div className={componentGuidelinePageStyles}>{children}</div>
              </LeafyGreenProvider>
            </Tab>
            <Tab
              name="Code Docs"
              onClick={() =>
                router.push(
                  `/component/${kebabCase(componentFields.name)}/documentation`,
                )
              }
            >
              <div className={codeDocsPageStyles}>{children}</div>
            </Tab>
          </Tabs>
          {!isMobile && (
            <ComponentLinks componentFields={componentFields} className={cx([flexContainer, desktopLinksContainer])} />
          )}
        </div>
      </div>
    </div>
  );
}

ComponentLayout.displayName = 'ComponentLayout';

export default ComponentLayout;
