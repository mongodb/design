import React from 'react';
import Head from 'next/head';
import { css } from '@emotion/css';
import { spacing } from '@leafygreen-ui/tokens';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { mq } from 'utils/mediaQuery';
import startCase from 'lodash/startCase';
import getFullPageTitle from 'utils/getFullPageTitle';

const layout = css`
  ${mq({
    // 51px is a magic number for baseline alignment with the first SideNavGroup header
    marginTop: [`${spacing[4]}px`, `${spacing[4]}px`, '72px'],
    maxWidth: ['100%', '100%', '700px', '700px'],
  })}
`;

function ContentPageLayout({
  contentPageTitle,
  children,
}: {
  contentPageTitle: string;
  children?: React.ReactNode;
}) {
  const pageTitle = getFullPageTitle(startCase(contentPageTitle));

  return (
    <div role="main" className={layout}>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="keywords" content={contentPageTitle} />
      </Head>
      <LeafyGreenProvider baseFontSize={16}>
        <div>{children}</div>
      </LeafyGreenProvider>
    </div>
  );
}

ContentPageLayout.displayName = 'ContentPageLayout';

export default ContentPageLayout;
