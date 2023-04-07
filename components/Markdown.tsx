import ReactMarkdown from 'react-markdown';

import Code from '@leafygreen-ui/code';
import { css } from '@leafygreen-ui/emotion';
import { InlineCode, Link } from '@leafygreen-ui/typography';

export const Markdown = ({ children, darkMode }: any) => (
  <span>
    <ReactMarkdown
      components={{
        link: ({ href, children }) => (
          <Link darkMode={darkMode} href={href}>
            {children}
          </Link>
        ),
        code: ({ inline, children }) =>
          inline ? (
            <InlineCode
              // @ts-expect-error - TODO: Fix this in `InlineCode`
              darkMode={darkMode}
              className={css`
                display: inline;
              `}
            >
              {children}
            </InlineCode>
          ) : (
            <Code darkMode={darkMode} copyable={false} language="ts">
              {children.toString()}
            </Code>
          ),
      }}
    >
      {children}
    </ReactMarkdown>
  </span>
);
