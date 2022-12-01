import {
  Body,
  H1,
  H2,
  H3,
  Subtitle,
  Overline,
  Link,
} from '@leafygreen-ui/typography';
import Card from '@leafygreen-ui/card';
import { css } from '@emotion/react';
import ContentstackChildren from './ContentstackChildren';
import ContentstackReference from './ContentstackReference';
import HeaderContent from './HeaderContent';
import { BLOCKS } from './types';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

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
  [BLOCKS.FRAGMENT]: node => (
    <ContentstackChildren nodeChildren={node.children} />
  ),
  [BLOCKS.HEADING_1]: node => (
    <H1>
      <HeaderContent headerId={node.children[0].text ?? node.uid}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H1>
  ),
  [BLOCKS.HEADING_2]: node => (
    <H2>
      <HeaderContent headerId={node.children[0].text ?? node.uid}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H2>
  ),
  [BLOCKS.HEADING_3]: node => (
    <H3>
      <HeaderContent headerId={node.children[0].text ?? node.uid}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H3>
  ),
  [BLOCKS.HEADING_4]: node => (
    <Subtitle
      css={css`
        margin-top: ${spacing[2]}px;
      `}
    >
      <HeaderContent headerId={node.children[0].text ?? node.uid}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </Subtitle>
  ),
  [BLOCKS.HEADING_5]: node => (
    <Overline>
      <ContentstackChildren nodeChildren={node.children} />
    </Overline>
  ),
  [BLOCKS.PARAGRAPH]: node => (
    <Body
      {...node.attrs}
      css={css`
        & {
          margin-top: ${spacing[3]}px;
        }
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </Body>
  ),
  [BLOCKS.ANCHOR]: node => (
    <Link
      {...node.attrs}
      css={css`
        line-height: 28px;
        & span:after {
          bottom: 2px;
        }
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </Link>
  ),
  [BLOCKS.ORDERED_LIST]: node => (
    <ol
      {...node.attrs}
      css={css`
        padding-inline-start: ${spacing[4]}px;
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </ol>
  ),
  [BLOCKS.UNORDERED_LIST]: node => (
    <ul
      {...node.attrs}
      css={css`
        padding-inline-start: ${spacing[4]}px;
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </ul>
  ),
  [BLOCKS.LIST_ITEM]: node => (
    <li
      {...node.attrs}
      css={css`
        margin: ${spacing[4]}px 0;
        & > * {
          margin: 0;
        }
        &::marker {
          color: ${palette.gray.dark1};
        }
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </li>
  ),
  [BLOCKS.SPAN]: node => (
    <span {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </span>
  ),
  [BLOCKS.TABLE]: node => {
    const colWidths = node.attrs.colWidths ? node.attrs.colWidths : [];
    return (
      <Card
        css={css`
          padding: ${spacing[3]}px 0;
        `}
      >
        <table
          css={css`
            border-spacing: 0;
            ${colWidths.map(
              (colWidth: number, index: number) => `
            td:nth-of-type(${index + 1}),
            th:nth-of-type(${index + 1}) {
              width: ${colWidth}px;
            }
          `,
            )}
          `}
        >
          <ContentstackChildren nodeChildren={node.children} />
        </table>
      </Card>
    );
  },
  [BLOCKS.TABLE_HEAD]: node => (
    <thead
      css={css`
        border-bottom: 3px solid ${palette.gray.light1};
        margin-top: ${spacing[3]}px;
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </thead>
  ),
  [BLOCKS.TABLE_BODY]: node => (
    <tbody>
      <ContentstackChildren nodeChildren={node.children} />
    </tbody>
  ),
  [BLOCKS.TABLE_ROW]: node => (
    <tr
      css={css`
        > td:first-child,
        > th:first-child {
          padding-left: ${spacing[5]}px;
        }

        > td:last-child,
        > th:last-child {
          padding-right: ${spacing[5]}px;
        }
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </tr>
  ),
  [BLOCKS.TABLE_HEADER_CELL]: node => (
    <th
      css={css`
        > * {
          font-weight: 700;
          margin: 0;
        }
        text-align: left;
        // min-width: 140px;
        padding: ${spacing[2]}px;
        vertical-align: middle;
        border-bottom: 3px solid ${palette.gray.light2};
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </th>
  ),
  [BLOCKS.TABLE_CELL]: node => (
    <td
      css={css`
        vertical-align: middle;
        padding: ${spacing[1]}px;
        padding-bottom: ${spacing[3]}px;
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </td>
  ),
  [BLOCKS.REFERENCE]: node => <ContentstackReference content={node} />,
};

export default componentMap;
