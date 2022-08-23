import React, { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { globalStyles } from 'styles/globals';
import BaseLayout from 'layouts/BaseLayout';
import { Body, H1, H2, H3, InlineCode, Link } from '@leafygreen-ui/typography';
import { NextPage } from 'next';
import Head from 'next/head';
import { AppContextProvider } from 'contexts/AppContext';
import {
  getComponents,
  getContentPageSections,
} from 'utils/getContentfulResources';

const headerStyle = css`
  margin-block: 0.5em;
  a,
  p {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }
`;

const MDXComponentMap = {
  h1: styled(H1 as any)`
    ${headerStyle}
  `,
  h2: styled(H2 as any)`
    ${headerStyle}
  `,
  h3: styled(H3 as any)`
    ${headerStyle}
  `,
  code: InlineCode,
  p: styled(Body as any)`
    margin-block: 1em;
    // Keep inline code inline
    code {
      display: inline;
    }
  `,
  a: styled(Link as any)`
    span,
    p {
      display: inline;
    }
  `,
};

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  components: any;
  contentPageGroups: any;
};

function MyApp({
  Component,
  pageProps,
  components,
  contentPageGroups,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppContextProvider
      components={components}
      contentPageGroups={contentPageGroups}
    >
      <MDXProvider components={MDXComponentMap}>
        <Head>
          <title>Home - LeafyGreen Design System | MongoDB</title>
        </Head>
        <Global styles={globalStyles} />
        <BaseLayout>{getLayout(<Component {...pageProps} />)}</BaseLayout>
      </MDXProvider>
    </AppContextProvider>
  );
}

MyApp.getInitialProps = async () => {
  // todo: make these graphQL requests to retrieve only titles
  const components = await getComponents();
  const contentPageGroups = await getContentPageSections();
  return { components, contentPageGroups };
};

export default MyApp;
