import ReactMarkdown from 'react-markdown';
import { InlineCode, Link } from '@leafygreen-ui/typography';
import Code from '@leafygreen-ui/code';
import { css } from '@leafygreen-ui/emotion';

export const Markdown = ({ children }: any) => (
  <span>
    <ReactMarkdown
      components={{
        link: ({ href, children }) => <Link href={href}>{children}</Link>,
        code: ({ inline, children }) =>
          inline ? (
            <InlineCode
              className={css`
                display: inline;
              `}
            >
              {children}
            </InlineCode>
          ) : (
            <Code copyable={false} language="ts">
              {children.toString()}
            </Code>
          ),
      }}
    >
      {children}
    </ReactMarkdown>
  </span>
);
