/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
// @ts-ignore unused import
import { jsx } from '@emotion/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import {
  Body,
  H1,
  H2,
  H3,
  Subtitle,
  Overline,
  Link,
} from '@leafygreen-ui/typography';
import HeaderContent from './HeaderContent';
import EmbeddedAsset from './EmbeddedAsset';
import EmbeddedEntry from './EmbeddedEntry';
import {
  TableBlock,
  TableRowBlock,
  TableCellBlock,
  TableHeaderCellBlock,
} from './Tables';
import { GlobalStyles, ListItemStyles, SubtitleStyles } from './styles';

const childrenAreNotEmpty = (children) => (
  React.Children.count(children) && (children.toString()).trim() !== ''
)

const ContentfulRichText = ({ document }) => (
  documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => childrenAreNotEmpty(children) ? <Body css={GlobalStyles}>{children}</Body> : null,
      [BLOCKS.HEADING_1]: (node, children) => <H1 css={GlobalStyles}><HeaderContent>{children}</HeaderContent></H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2 css={GlobalStyles}><HeaderContent>{children}</HeaderContent></H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3 css={GlobalStyles}><HeaderContent>{children}</HeaderContent></H3>,
      [BLOCKS.HEADING_4]: (node, children) => <Subtitle css={[GlobalStyles, SubtitleStyles]}><HeaderContent>{children}</HeaderContent></Subtitle>,
      [BLOCKS.HEADING_5]: (node, children) => <Overline css={GlobalStyles}>{children}</Overline>,
      [BLOCKS.OL_LIST]: (node, children) => <ol css={GlobalStyles}>{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul css={GlobalStyles}>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li css={ListItemStyles}>{children}</li>,
      [BLOCKS.TABLE]: TableBlock,
      [BLOCKS.TABLE_ROW]: TableRowBlock,
      [BLOCKS.TABLE_CELL]: TableCellBlock,
      [BLOCKS.TABLE_HEADER_CELL]: TableHeaderCellBlock,
      [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
      [BLOCKS.EMBEDDED_ENTRY]: node => (
        <EmbeddedEntry nodeTarget={node.data.target} />
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={node.data.uri} target="_blank">
          {children}
        </Link>
      ),
      [INLINES.ASSET_HYPERLINK]: EmbeddedAsset,
    },
  }) as JSX.Element
);

export default ContentfulRichText;
