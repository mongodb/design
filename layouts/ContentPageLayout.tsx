import React from 'react';
import Head from 'next/head';
import { css } from '@emotion/css';
import { spacing } from '@leafygreen-ui/tokens';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { mq } from 'utils/mediaQuery';
import titlecase from 'utils/titlecase';

const layout = css`
  ${mq({
  // 51px is a magic number for baseline alignment with the first SideNavGroup header
  marginTop: [`${spacing[4]}px`, `${spacing[4]}px`, '72px'],
  maxWidth: ['100%', '100%', '700px', '700px'],
})}
`;

function ContentPageLayout({ contentPageTitle, children }: { contentPageTitle: string, children?: React.ReactNode }) {

  const pageTitle = `${titlecase(
    contentPageTitle,
  )} – LeafyGreen Design System | MongoDB`;

  return (
    <div role="main" className={layout}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LeafyGreenProvider baseFontSize={16}>
        <div>{children}</div>
      </LeafyGreenProvider>
    </div>
  );
}

ContentPageLayout.displayName = 'ContentPageLayout';

export default ContentPageLayout;
