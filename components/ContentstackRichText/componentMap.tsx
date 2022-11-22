import {
  Body,
  H1,
  H2,
  H3,
  Subtitle,
  Overline,
  Link,
} from '@leafygreen-ui/typography';
import { css } from '@emotion/react';
import ContentstackChildren from './ContentstackChildren';
import ContentstackReference from './ContentstackReference';
import HeaderContent from './HeaderContent';
import { BLOCKS } from './types';

const componentMap = {
  [BLOCKS.DOCUMENT]: (node, options) => {
    return (
      <div
        css={
          (!options || !options.isNested) &&
          css`
            & > *:not(:first-child) {
              margin-top: 40px;
            }
          `
        }
      >
        <ContentstackChildren nodeChildren={node.children} />
      </div>
    );
  },
  [BLOCKS.FRAGMENT]: (node, options) => (
    <ContentstackChildren nodeChildren={node.children} />
  ),
  [BLOCKS.HEADING_1]: (node, options) => (
    <H1>
      <HeaderContent headerId={node.children[0].text ?? node.uid}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H1>
  ),
  [BLOCKS.HEADING_2]: (node, options) => (
    <H2>
      <HeaderContent headerId={node.children[0].text ?? node.uid}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H2>
  ),
  [BLOCKS.HEADING_3]: (node, options) => (
    <H3>
      <HeaderContent headerId={node.children[0].text ?? node.uid}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H3>
  ),
  [BLOCKS.HEADING_4]: (node, options) => (
    <Subtitle
      css={css`
        margin-top: 8px;
      `}
    >
      <HeaderContent headerId={node.children[0].text ?? node.uid}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </Subtitle>
  ),
  [BLOCKS.HEADING_5]: (node, options) => (
    <Overline>
      <ContentstackChildren nodeChildren={node.children} />
    </Overline>
  ),
  [BLOCKS.PARAGRAPH]: (node, options) => (
    <Body
      {...node.attrs}
      css={css`
        & {
          margin-top: 16px;
        }
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </Body>
  ),
  [BLOCKS.ANCHOR]: (node, options) => (
    <Link
      {...node.attrs}
      css={css`
        line-height: 28px;
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </Link>
  ),
  [BLOCKS.OL_LIST]: (node, options) => (
    <ol {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </ol>
  ),
  [BLOCKS.UL_LIST]: (node, options) => (
    <ul {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </ul>
  ),
  [BLOCKS.LIST_ITEM]: (node, options) => (
    <li
      {...node.attrs}
      css={css`
        margin: 24px 0;
        & > * {
          margin: 0;
        }
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </li>
  ),
  [BLOCKS.SPAN]: (node, options) => (
    <span {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </span>
  ),
  [BLOCKS.REFERENCE]: (node, options) => (
    <ContentstackReference content={node} />
  ),
};

export default componentMap;
