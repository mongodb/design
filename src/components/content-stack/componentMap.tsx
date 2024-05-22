import { css } from '@emotion/css';
import Card from '@leafygreen-ui/card';
import { palette } from '@leafygreen-ui/palette';
import {
  Table,
  TableHead,
  TableBody,
  Row,
  Cell,
  HeaderCell,
} from '@leafygreen-ui/table';
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
import { ContentstackChildren } from './ContentstackChildren';
import { ContentstackReference } from './ContentstackReference';
import { HeaderContent } from './HeaderContent';
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
      className={
        !props.isNested &&
        css`
          margin-bottom: ${spacing[400]}px;
        `
      }
      {...props}
    >
      <HeaderContent node={node} />
    </H1>
  ),
  [CSNodeType.HEADING_2]: (node, props) => (
    <H2
      className={
        !props.isNested &&
        css`
          margin-bottom: ${spacing[200]}px;

          &:not(:first-child) {
            margin-top: ${spacing[1600]}px;
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
      className={
        !props.isNested &&
        css`
          margin-top: ${spacing[800]}px;
        `
      }
      {...props}
    >
      <HeaderContent node={node} />
    </H3>
  ),
  [CSNodeType.HEADING_4]: (node, props) => (
    <Subtitle
      className={
        !props.isNested &&
        css`
          margin-top: ${spacing[600]}px;
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
      baseFontSize={16}
      className={
        !props.isNested &&
        css`
          & {
            margin-top: ${spacing[200]}px;
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
      baseFontSize={16}
      href={node.attrs?.url}
      className={css`
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
      className={css`
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
      className={css`
        margin-top: 0px;
        margin-bottom: ${spacing[400]}px;
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
      className={css`
        font-size: 16px;
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
    <span
      className={css`
        font-size: 16px;
      `}
      {...node.attrs}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} {...props} />
    </span>
  ),
  [CSNodeType.TABLE]: (node, props) => {
    const colWidths = node.attrs.colWidths ? node.attrs.colWidths : [];
    return (
      <Card
        baseFontSize={16}
        className={css`
          margin-block: ${spacing[800] + spacing[200]}px;
          padding: ${spacing[400]}px 0;
        `}
        {...props}
      >
        <Table
          className={css`
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
        </Table>
      </Card>
    );
  },
  [CSNodeType.TABLE_HEAD]: (node, props) => (
    <TableHead
      className={css`
        margin-top: ${spacing[400]}px;
      `}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </TableHead>
  ),
  [CSNodeType.TABLE_BODY]: (node, props) => (
    <TableBody {...props}>
      <ContentstackChildren nodeChildren={node.children} />
    </TableBody>
  ),
  [CSNodeType.TABLE_ROW]: (node, props) => (
    <Row
      className={css`
        > td:first-of-type,
        > th:first-of-type {
          padding-left: ${spacing[800]}px;
        }

        > td:last-child,
        > th:last-child {
          padding-right: ${spacing[800]}px;
        }
      `}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </Row>
  ),
  [CSNodeType.TABLE_HEADER_CELL]: (node, props) => (
    <HeaderCell
      align="left"
      className={css`
        font-weight: bold;
        padding: ${spacing[200]}px;
      `}
      {...props}
    >
      <ContentstackChildren nodeChildren={node.children} />
    </HeaderCell>
  ),
  [CSNodeType.TABLE_CELL]: (node, props) => (
    <Cell
      className={css`
        vertical-align: middle;
        padding: ${spacing[100]}px;
        padding-bottom: ${spacing[400]}px;
      `}
      {...props}
    >
      <ContentstackChildren
        nodeChildren={node.children}
        className={css`
          font-size: 13px;
          line-height: 20px;
        `}
      />
    </Cell>
  ),
  [CSNodeType.REFERENCE]: (node, props) => (
    <ContentstackReference content={node} {...props} />
  ),
  [CSNodeType.FRAGMENT]: (node, props) => (
    <ContentstackChildren nodeChildren={node.children} {...props} />
  ),
};
