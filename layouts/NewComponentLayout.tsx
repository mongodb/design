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
import { LiveExample } from 'components/pages/example/LiveExample';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import { Body, H1, Overline } from '@leafygreen-ui/typography';

const Container = styled('div')`
  ${mq({
    // 51px is a magic number for baseline alignment with the first SideNavGroup header
    marginTop: [`${spacing[4]}px`, `${spacing[4]}px`, '51px'],
    width: ['100%', '100%', '90%', '75%'],
    paddingLeft: [`${spacing[2]}`, `${spacing[4]}px`, `120px`],
    paddingRight: [`${spacing[2]}`, `${spacing[4]}px`, `120px`],
  })}
`;

const FlexContainer = styled('div')`
  display: flex;
  gap: ${spacing[7]}px;
  position: relative;
  ${mq({
    flexDirection: ['column-reverse', 'row']
  })}
`;

const ContentContainer = styled('div')`
  flex: 1;
`;

const BreadcrumbsContainer = styled('div')`
  min-width: 250px;
  max-width: 250px;
  position: sticky;
  height: fit-content;
  top: ${spacing[6]}px;
`;

const Header = styled(H1)`
  margin-bottom: ${spacing[3]}px;
  text-transform: capitalize;
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
    <GuidelinesContextProvider>
      <main>
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} />
          {/* If the description field doesn't exist, it will default to a description of the site, defined in _document. */}
          {component?.description && (
            <meta property="og:description" content={component?.description} />
          )}
          <meta name="keywords" content={component?.title} />
        </Head>
        <LeafyGreenProvider baseFontSize={16}>
          {component &&
          (!component.private || (component.private && session)) ? (
            <Container>
              <Header>{componentName}</Header>
              <FlexContainer>
              <ContentContainer>
                <Body style={{ marginBottom: spacing[3] }}>
                  {component.description}
                </Body>
                <div>
                  <Overline style={{ color: palette.gray.dark1 }}>
                    Playground
                  </Overline>
                  <LiveExample componentName={componentName} tsDoc={tsDoc} />
                </div>
                {children}
              </ContentContainer>
              <BreadcrumbsContainer>
                <GuidelineBreadcrumbs />
              </BreadcrumbsContainer>
              </FlexContainer>
            </Container>
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
