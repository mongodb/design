import { ReactElement, ReactNode, useEffect } from 'react';
import { Global } from '@emotion/react';
import { AppContextProvider } from 'contexts/AppContext';
import BaseLayout from 'layouts/BaseLayout';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Session, unstable_getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { globalStyles } from 'styles/globals';
import {
  getComponents,
  getContentPageGroups,
} from 'utils/ContentStack/getContentstackResources';
import getFullPageTitle from 'utils/getFullPageTitle';
import * as ga from 'utils/googleAnalytics';

import ErrorBoundary from 'components/ErrorBoundary';

import { ComponentFields, ContentPageGroup } from '../utils/ContentStack/types';

import { authOptions } from './api/auth/[...nextauth]';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout<T = {}> = AppProps<T> & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  components,
  contentPageGroups,
}: AppPropsWithLayout<{ session: Session }> & {
  components: Array<ComponentFields>;
  contentPageGroups: Array<ContentPageGroup>;
}) {
  const getLayout = Component.getLayout ?? (page => page);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <AppContextProvider
        components={components}
        contentPageGroups={contentPageGroups}
      >
        <Head>
          <title>{getFullPageTitle('Home')}</title>
          <meta property="og:title" content={getFullPageTitle('Home')} />

          {/* Viewport meta tags should be in _app.tsx, not _document.tsx: https://nextjs.org/docs/messages/no-document-viewport-meta */}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <ErrorBoundary>
          <Global styles={globalStyles} />
          <BaseLayout>{getLayout(<Component {...pageProps} />)}</BaseLayout>
        </ErrorBoundary>
      </AppContextProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const session = await unstable_getServerSession(
    ctx.req,
    ctx.res,
    authOptions,
  );
  const components = await getComponents({ includeContent: false });
  const contentPageGroups = await getContentPageGroups();
  return { components, contentPageGroups, session };
};

export default MyApp;
