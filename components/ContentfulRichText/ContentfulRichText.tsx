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

const ContentfulRichText = ({ document }) =>
  documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Body>{children}</Body>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <H1>
          <HeaderContent>{children}</HeaderContent>
        </H1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <H2>
          <HeaderContent>{children}</HeaderContent>
        </H2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <H3>
          <HeaderContent>{children}</HeaderContent>
        </H3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Subtitle>
          <HeaderContent>{children}</HeaderContent>
        </Subtitle>
      ),
      [BLOCKS.HEADING_5]: (node, children) => <Overline>{children}</Overline>,
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
  }) as JSX.Element;

export default ContentfulRichText;
