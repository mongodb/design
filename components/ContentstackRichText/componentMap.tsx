import { css } from '@emotion/react';

import Card from '@leafygreen-ui/card';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import {
  Body,
  H1,
  H2,
  H3,
  Link,
  Overline,
  Subtitle,
} from '@leafygreen-ui/typography';

import ContentstackChildren from './ContentstackChildren';
import ContentstackReference from './ContentstackReference';
import HeaderContent from './HeaderContent';
import { CSNode, CSNodeType, CSTextNode } from './types';
import { getCSNodeTextContent } from './utils';

/**
 * Maps a NodeType to a ContentStack element
 */
export const nodeTypeToElementMap: {
  [key in CSNodeType]?: (
    node: CSNode | CSTextNode,
    options?: any,
  ) => JSX.Element;
} = {
  [CSNodeType.DOCUMENT]: node => (
    <div>
      <ContentstackChildren nodeChildren={node.children} />
    </div>
  ),
  [CSNodeType.HEADING_1]: node => (
    <H1
      css={css`
        margin-top: ${spacing[6]}px;
        margin-bottom: ${spacing[3]}px;
      `}
    >
      <HeaderContent headerId={getCSNodeTextContent(node)}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H1>
  ),
  [CSNodeType.HEADING_2]: node => (
    <H2
      css={css`
        margin-bottom: ${spacing[2]}px;

        &:not(:first-child) {
          margin-top: ${spacing[6]}px;
        }
      `}
    >
      <HeaderContent headerId={getCSNodeTextContent(node)}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H2>
  ),
  [CSNodeType.HEADING_3]: node => (
    <H3
      css={css`
        margin-top: ${spacing[5]}px;
      `}
    >
      <HeaderContent headerId={getCSNodeTextContent(node)}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H3>
  ),
  [CSNodeType.HEADING_4]: node => (
    <Subtitle
      css={css`
        margin-top: ${spacing[4]}px;
      `}
    >
      <HeaderContent headerId={getCSNodeTextContent(node)}>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </Subtitle>
  ),
  [CSNodeType.HEADING_5]: node => (
    <Overline>
      <ContentstackChildren nodeChildren={node.children} />
    </Overline>
  ),
  [CSNodeType.HEADING_6]: node => (
    <Overline>
      <ContentstackChildren nodeChildren={node.children} />
    </Overline>
  ),
  [CSNodeType.PARAGRAPH]: node => (
    <Body
      {...node.attrs}
      css={css`
        & {
          margin-top: ${spacing[2]}px;
        }
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </Body>
  ),
  [CSNodeType.ANCHOR]: node => (
    <Link
      {...node.attrs}
      href={node.attrs.url}
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
  [CSNodeType.ORDERED_LIST]: node => (
    <ol
      {...(node.attrs as any)}
      css={css`
        padding-inline-start: 25px;
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </ol>
  ),
  [CSNodeType.UNORDERED_LIST]: node => (
    <ul
      {...node.attrs}
      css={css`
        margin-top: 0px;
        margin-bottom: ${spacing[3]}px;
        padding-inline-start: 25px;
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </ul>
  ),
  [CSNodeType.LIST_ITEM]: node => (
    <li
      {...node.attrs}
      css={css`
        line-height: 28px;
        padding-left: 5px;
        & > * {
          margin: 0;
        }
        &::marker {
          color: ${palette.gray.base};
        }
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </li>
  ),
  [CSNodeType.SPAN]: node => (
    <span {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </span>
  ),
  [CSNodeType.TABLE]: node => {
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
  [CSNodeType.TABLE_HEAD]: node => (
    <thead
      css={css`
        border-bottom: 3px solid ${palette.gray.light1};
        margin-top: ${spacing[3]}px;
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </thead>
  ),
  [CSNodeType.TABLE_BODY]: node => (
    <tbody>
      <ContentstackChildren nodeChildren={node.children} />
    </tbody>
  ),
  [CSNodeType.TABLE_ROW]: node => (
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
  [CSNodeType.TABLE_HEADER_CELL]: node => (
    <th
      css={css`
        > * {
          font-weight: 700;
          margin: 0;
        }
        text-align: left;
        padding: ${spacing[2]}px;
        vertical-align: middle;
        border-bottom: 3px solid ${palette.gray.light2};
      `}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </th>
  ),
  [CSNodeType.TABLE_CELL]: node => (
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
  [CSNodeType.REFERENCE]: node => <ContentstackReference content={node} />,
  [CSNodeType.FRAGMENT]: node => (
    <ContentstackChildren nodeChildren={node.children} />
  ),
};
