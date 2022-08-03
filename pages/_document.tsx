import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import * as React from 'react';
import { renderStatic } from 'utils/renderer';

/**
 * We create a custom _document.tsx in order to support vanilla emotion with Next.js
 * @see https://github.com/vercel/next.js/pull/20228/files
 */
export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(() => page.html);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="MongoDB's open-source, accessible design system for designing and building web applications with React."
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="generator" content="LeafyGreen UI" />

          <meta
            property="og:title"
            content="LeafyGreen - MongoDB Design System"
          />
          <meta
            property="og:site_name"
            content="LeafyGreen - MongoDB Design System"
          />
          <meta property="og:url" content="https://mongodb.design" />
          <meta
            property="og:description"
            content="MongoDB's open-source, accessible design system for designing and building web applications with React."
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,600;1,400&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
