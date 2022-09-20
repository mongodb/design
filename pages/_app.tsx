import { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from 'styles/globals';
import BaseLayout from 'layouts/BaseLayout';
import { NextPage } from 'next';
import Head from 'next/head';
import { AppContextProvider } from 'contexts/AppContext';
import {
  getComponents,
  getContentPageGroups,
} from 'utils/getContentfulResources';
import getFullPageTitle from 'utils/getFullPageTitle';

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
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <AppContextProvider
      components={components}
      contentPageGroups={contentPageGroups}
    >
      <Head>
        <title>{getFullPageTitle('Home')}</title>
        <meta property="og:title" content={getFullPageTitle('Home')} />
      </Head>
      <Global styles={globalStyles} />
      <BaseLayout>{getLayout(<Component {...pageProps} />)}</BaseLayout>
    </AppContextProvider>
  );
}

MyApp.getInitialProps = async () => {
  // todo: make these graphQL requests to retrieve only titles
  const components = await getComponents();
  const contentPageGroups = await getContentPageGroups();
  return { components, contentPageGroups };
};

export default MyApp;
