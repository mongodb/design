import React from 'react';
import styled from "@emotion/styled";
import kebabCase from 'lodash/kebabCase';
import startCase from 'lodash/startCase';
import getFullPageTitle from "utils/getFullPageTitle";
import { mq } from "utils/mediaQuery";

import { spacing } from "@leafygreen-ui/tokens";
import { ComponentFields } from 'utils/ContentStack/types';
import Head from 'next/head';
import { Body, H2 } from '@leafygreen-ui/typography';
import { useSession } from 'next-auth/react';

const Main = styled('main')`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled('div')`
  ${mq({
    // 51px is a magic number for baseline alignment with the first SideNavGroup header
    marginTop: [`${spacing[4]}px`, `${spacing[4]}px`, '51px'],
    paddingLeft: [`${spacing[2]}`, `${spacing[6]}px`, `${spacing[7]}px`],
    paddingRight: [`${spacing[2]}`, `${spacing[6]}px`, `${spacing[7]}px`],
    width: ['100%', '75%', '75%'],
  })}
`


const Header = styled(H2)`
  margin-bottom: ${spacing[4]}px;
  text-transform: capitalize;
`;

const NewComponentLayout = ({
  component,
  componentName,
  children,
}: {
  component?: ComponentFields;
  children: React.ReactNode;
  componentName: string;
}) => {
  const pageTitle = getFullPageTitle(startCase(componentName));
  console.log(component)
  const { data: session } = useSession();

  return (
    <Main>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        {/* If the description field doesn't exist, it will default to a description of the site, defined in _document. */}
        {component?.description && (
          <meta property="og:description" content={component?.description} />
        )}
        <meta name="keywords" content={component?.title} />
      </Head>
      {component && (!component.private || (component.private && session)) ?
        <ContentContainer>
          <Header as="h1">
            {componentName}
          </Header>
          <Body>
            {component.description}
          </Body>
          {children}
        </ContentContainer>
      : children}
    </Main>
  )
}

NewComponentLayout.displayName = 'NewComponentLayout';

export default NewComponentLayout;