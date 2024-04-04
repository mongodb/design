import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { renderStatic } from 'utils/renderer';

/**
 * We create a custom _document.tsx in order to support vanilla emotion with Next.js
 * @see https://github.com/vercel/next.js/pull/20228/files
 */
export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const { styles } = renderStatic(() => page.html);
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="generator" content="LeafyGreen UI" />
          <meta
            property="og:title"
            content="LeafyGreen - MongoDB Design System"
          />
          <meta
            property="og:site_name"
            content="LeafyGreen - MongoDB Design System"
          />
          <meta
            name="description"
            content="MongoDB's open-source, accessible design system for designing and building web applications with React."
          />
          <meta
            property="og:description"
            content="MongoDB's open-source, accessible design system for designing and building web applications with React."
          />
          <meta property="og:url" content="https://mongodb.design" />
          <meta
            name="keywords"
            content="mongodb, user interface, component library, react, design, ui, ux"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,600;1,400&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
