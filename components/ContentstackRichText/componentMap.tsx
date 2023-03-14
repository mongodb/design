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

type CSNodeTypeMapFunction = (
  node: CSNode | CSTextNode,
  props?: any,
) => JSX.Element;

/**
 * Maps a NodeType to a ContentStack element
 */
export const nodeTypeToElementMap: {
  [key in CSNodeType]?: CSNodeTypeMapFunction;
} = {
  [CSNodeType.DOCUMENT]: (node, props) => (
    <div {...props}>
      <ContentstackChildren nodeChildren={node.children} {...props} />
    </div>
  ),
  [CSNodeType.HEADING_1]: (node, props) => (
    <H1
      css={
        !props.isNested &&
        css`
          margin-top: ${spacing[6]}px;
          margin-bottom: ${spacing[3]}px;
        `
      }
      {...props}
    >
      <HeaderContent node={node} />
    </H1>
  ),
  [CSNodeType.HEADING_2]: (node, props) => (
    <H2
      css={
        !props.isNested &&
        css`
          margin-bottom: ${spacing[2]}px;

          &:not(:first-child) {
            margin-top: ${spacing[6]}px;
          }
        `
      }
      {...props}
    >
      <HeaderContent node={node} />
    </H2>
  ),
  [CSNodeType.HEADING_3]: (node, props) => (
    <H3
      css={
        !props.isNested &&
        css`
          margin-top: ${spacing[5]}px;
        `
      }
      {...props}
    >
      <HeaderContent node={node} />
    </H3>
  ),
  [CSNodeType.HEADING_4]: (node, props) => (
    <Subtitle
      css={
        !props.isNested &&
        css`
          margin-top: ${spacing[4]}px;
        `
      }
      {...props}
    >
      <HeaderContent node={node} />
    </Subtitle>
  ),
  [CSNodeType.HEADING_5]: (node, props) => (
    <Overline {...props}>
      <ContentstackChildren nodeChildren={node.children} />
    </Overline>
  ),
  [CSNodeType.HEADING_6]: (node, props) => (
    <Overline {...props}>
      <ContentstackChildren nodeChildren={node.children} />
    </Overline>
  ),
  [CSNodeType.PARAGRAPH]: (node, props) => (
    <Body
      css={
        !props.isNested &&
        css`
          & {
            margin-top: ${spacing[2]}px;
          }
        `
      }
      {...node.attrs}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} {...props} />
    </Body>
  ),
  [CSNodeType.ANCHOR]: (node, props) => (
    <Link
      href={node.attrs?.url}
      css={css`
        line-height: 28px;
        & span:after {
          bottom: 2px;
        }
      `}
      {...node.attrs}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </Link>
  ),
  [CSNodeType.ORDERED_LIST]: (node, props) => (
    <ol
      css={css`
        padding-inline-start: 25px;
      `}
      {...(node.attrs as any)}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </ol>
  ),
  [CSNodeType.UNORDERED_LIST]: (node, props) => (
    <ul
      css={css`
        margin-top: 0px;
        margin-bottom: ${spacing[3]}px;
        padding-inline-start: 25px;
      `}
      {...node.attrs}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </ul>
  ),
  [CSNodeType.LIST_ITEM]: (node, props) => (
    <li
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
      {...node.attrs}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </li>
  ),
  [CSNodeType.SPAN]: (node, props) => (
    <span {...node.attrs} {...props}>
      <ContentstackChildren nodeChildren={node.children} {...props} />
    </span>
  ),
  [CSNodeType.TABLE]: (node, props) => {
    const colWidths = node.attrs.colWidths ? node.attrs.colWidths : [];
    return (
      <Card
        css={css`
          margin-block: ${spacing[5] + spacing[2]}px;
          padding: ${spacing[3]}px 0;
        `}
        {...props}
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
  [CSNodeType.TABLE_HEAD]: (node, props) => (
    <thead
      css={css`
        border-bottom: 3px solid ${palette.gray.light1};
        margin-top: ${spacing[3]}px;
      `}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </thead>
  ),
  [CSNodeType.TABLE_BODY]: (node, props) => (
    <tbody {...props}>
      <ContentstackChildren nodeChildren={node.children} />
    </tbody>
  ),
  [CSNodeType.TABLE_ROW]: (node, props) => (
    <tr
      css={css`
        > td:first-of-type,
        > th:first-of-type {
          padding-left: ${spacing[5]}px;
        }

        > td:last-child,
        > th:last-child {
          padding-right: ${spacing[5]}px;
        }
      `}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </tr>
  ),
  [CSNodeType.TABLE_HEADER_CELL]: (node, props) => (
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
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </th>
  ),
  [CSNodeType.TABLE_CELL]: (node, props) => (
    <td
      css={css`
        vertical-align: middle;
        padding: ${spacing[1]}px;
        padding-bottom: ${spacing[3]}px;
      `}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </td>
  ),
  [CSNodeType.REFERENCE]: (node, props) => (
    <ContentstackReference content={node} {...props} />
  ),
  [CSNodeType.FRAGMENT]: (node, props) => (
    <ContentstackChildren nodeChildren={node.children} {...props} />
  ),
};
