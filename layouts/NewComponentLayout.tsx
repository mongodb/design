import React from 'react';
import styled from '@emotion/styled';
import { GuidelinesContextProvider } from 'contexts/GuidelinesContext';
import startCase from 'lodash/startCase';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { ComponentFields } from 'utils/ContentStack/types';
import getFullPageTitle from 'utils/getFullPageTitle';
import { mq } from 'utils/mediaQuery';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import GuidelineBreadcrumbs from 'components/GuidelineBreadcrumbs';
import FigmaIcon from 'components/icons/FigmaIcon';
import GithubIcon from 'components/icons/GithubIcon';
import { LiveExample } from 'components/pages/example/LiveExample';

import Button from '@leafygreen-ui/button';
import LinkIcon from '@leafygreen-ui/icon/dist/Link';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import { Body, H1, Overline } from '@leafygreen-ui/typography';

const Container = styled('div')`
  ${mq({
    // 51px is a magic number for baseline alignment with the first SideNavGroup header
    marginTop: [`${spacing[4]}px`, `${spacing[4]}px`, '51px'],
    // width: ['100%', '100%', '90%', '75%'],
    paddingLeft: [`${spacing[2]}`, `${spacing[4]}px`, '120px'],
    paddingRight: [`${spacing[2]}`, `${spacing[4]}px`, '120px'],
  })}
`;

const FlexContainer = styled('div')`
  display: flex;
  gap: ${spacing[7]}px;
  position: relative;
  ${mq({
    flexDirection: ['column-reverse', 'row'],
  })}
`;

const ContentContainer = styled('div')`
  flex: 2;
`;

const BreadcrumbsContainer = styled('div')`
  position: sticky;
  height: fit-content;
  top: ${spacing[6]}px;
  flex: 1;
`;

const HeaderContainer = styled('div')`
  background-color: ${palette.green.dark3};
  ${mq({
    padding: [`${spacing[2]}`, `${spacing[4]}px`, `${spacing[7]}px`],
    paddingLeft: [`${spacing[2]}`, `${spacing[4]}px`, '120px'],
    paddingRight: [`${spacing[2]}`, `${spacing[4]}px`, '120px'],
  })}
  background-image: url('/Blob.svg');
  background-repeat: no-repeat;
  background-position: 100% 0%;
`;

const Header = styled(H1)`
  margin-bottom: ${spacing[3]}px;
  text-transform: capitalize;
`;

const getLinkIcon = linkType => {
  switch (linkType) {
    case 'Figma':
      return <FigmaIcon />;
    case 'Github':
      return <GithubIcon fill={palette.white} />;
    default:
      return <LinkIcon />;
  }
};

const LinksContainer = styled('div')`
  display: flex;
  gap: ${spacing[2]}px;
`;

const NewComponentLayout = ({
  component,
  componentName,
  children,
  tsDoc,
}: {
  component?: ComponentFields;
  children: React.ReactNode;
  componentName: string;
  tsDoc: Array<CustomComponentDoc> | null;
}) => {
  const pageTitle = getFullPageTitle(startCase(componentName));
  const { data: session } = useSession();

  return (
    <GuidelinesContextProvider componentName={componentName}>
      <main>
        <div id="scroll-top" />
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} />
          {/* If the description field doesn't exist, it will default to a description of the site, defined in _document. */}
          {component?.description && (
            <meta property="og:description" content={component?.description} />
          )}
          <meta name="keywords" content={startCase(component?.title)} />
        </Head>
        <LeafyGreenProvider baseFontSize={16}>
          {component &&
          (!component.private || (component.private && session)) ? (
            <>
              <LeafyGreenProvider darkMode>
                <HeaderContainer>
                  {/* Add id for hard-coded breadcrumb */}
                  <Header id="overview">{startCase(componentName)}</Header>
                  <Body style={{ marginBottom: spacing[3] }}>
                    {component.description}
                  </Body>
                  <LinksContainer>
                    {component.links_data &&
                      component.links_data.map(linkObject => (
                        <Button
                          as="a"
                          target="_blank"
                          href={linkObject.link_data.link.href}
                          size="xsmall"
                          key={linkObject.link_data._metadata.uid}
                          leftGlyph={getLinkIcon(linkObject.link_data.type)}
                        >
                          {linkObject.link_data.link.title}
                        </Button>
                      ))}
                  </LinksContainer>
                </HeaderContainer>
              </LeafyGreenProvider>
              <Container>
                <FlexContainer>
                  <ContentContainer>
                    <div style={{ paddingBottom: '16px' }}>
                      <Overline style={{ color: palette.gray.dark1 }}>
                        Playground
                      </Overline>
                      <LiveExample
                        componentName={componentName}
                        tsDoc={tsDoc}
                      />
                    </div>
                    {children}
                  </ContentContainer>
                  <BreadcrumbsContainer>
                    <GuidelineBreadcrumbs />
                  </BreadcrumbsContainer>
                </FlexContainer>
              </Container>
            </>
          ) : (
            children
          )}
        </LeafyGreenProvider>
      </main>
    </GuidelinesContextProvider>
  );
};

NewComponentLayout.displayName = 'NewComponentLayout';

export default NewComponentLayout;
