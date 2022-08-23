import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Body, H1, H2, H3, Subtitle, Overline, Link } from '@leafygreen-ui/typography';
import ExpandableCard from '@leafygreen-ui/expandable-card';
import Image from './Image';
import prependUrls from 'utils/prependUrls';

const renderAsset = (node) => {
  if (!node.data.target.fields) {
    return <>Invalid asset.</>
  }
  const { title, file } = node.data.target.fields;
  const mimeType = file.contentType
  const mimeGroup = mimeType.split('/')[0]

  switch (mimeGroup) {
    case 'image':
      return <Image alt={title} src={file.url} width="100%" />
    default:
      return <h1>Unsupported embedded-asset-block mimeGroup: ${mimeGroup!}</h1>
  }
}

const renderEntry = (node) => {
  const embeddedEntryNodeType = node.data.target?.sys?.contentType?.sys.id;
  const embeddedEntryFields = node.data.target.fields;

  switch (embeddedEntryNodeType) {
    case 'expandableCardBlock': {
      const { title, description, content } = embeddedEntryFields;
      return <ExpandableCard title={title} description={description}><ContentfulRichText document={content} /></ExpandableCard>
    }
    default:
      return <h1>Unsupported embedded-entry-block nodeType: ${embeddedEntryNodeType!}</h1>
  }
}

const ContentfulRichText = ({ document }) => (
  <>
    {documentToReactComponents(document, {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Body>{children}</Body>,
        [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
        [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
        [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
        [BLOCKS.HEADING_4]: (node, children) => <Subtitle>{children}</Subtitle>,
        [BLOCKS.HEADING_5]: (node, children) => <Overline>{children}</Overline>,
        [BLOCKS.EMBEDDED_ASSET]: renderAsset,
        [BLOCKS.EMBEDDED_ENTRY]: renderEntry,
        [INLINES.HYPERLINK]: (node, children) => <Link href={prependUrls(node.data.uri)} target="_blank">{children}</Link>,
        [INLINES.ASSET_HYPERLINK]: renderAsset,
      },
    })}
  </>
);

export default ContentfulRichText;