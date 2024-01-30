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

import CodeSandboxIcon from 'components/icons/CodeSandboxIcon';
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
import Tooltip from '@leafygreen-ui/tooltip';
import { H1 } from '@leafygreen-ui/typography';

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
  flex: 1;
  justify-content: flex-end;
  height: 100%;
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

const LinkType = {
  CodeSandbox: 'codeSandbox',
  Github: 'github',
  Figma: 'figma',
} as const;

type LinkType = (typeof LinkType)[keyof typeof LinkType];

const getTooltipParams = (component: ComponentFields, type: LinkType) => {
  const tooltipMap = {
    [LinkType.CodeSandbox]: {
      icon: CodeSandboxIcon,
      text: 'Edit in CodeSandbox',
      href: component?.codesandbox_url?.href,
    },
    [LinkType.Github]: {
      icon: GithubIcon,
      text: 'View GitHub package',
      href: getGithubLink(component.private, component.title),
    },
    [LinkType.Figma]: {
      icon: FigmaIcon,
      text: 'View Figma file',
      href: component.figmaurl,
    },
  };

  return tooltipMap[type];
};

const ComponentTooltip = ({
  component,
  type,
}: {
  component: ComponentFields;
  type: LinkType;
}) => {
  if (!component) {
    return null;
  }

  const { icon: Icon, text, href } = getTooltipParams(component, type);

  if (!href) {
    return null;
  }

  return (
    <Tooltip
      trigger={
        <IconButton
          key={type}
          aria-label={text}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '8px' }}
          href={href}
        >
          <Icon />
        </IconButton>
      }
    >
      {text}
    </Tooltip>
  );
};

const ComponentLinks = ({
  component,
  ...rest
}: {
  component: ComponentFields;
  [key: string]: any;
}) => (
  <div {...rest}>
    {Object.values(LinkType).map(type => (
      <ComponentTooltip key={type} type={type} component={component} />
    ))}
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

  const displayName = componentName.split('-').join(' ');

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
          <H1 className={pageHeaderStyle}>{displayName}</H1>
          {isMobile && component && session && (
            <ComponentLinks
              component={component}
              className={cx([flexContainer, mobileLinksContainer])}
            />
          )}
        </div>
        {component && (!component.private || (component.private && session)) ? (
          <div className={cx(flexContainer)}>
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
