import ExpandableCard from '@leafygreen-ui/expandable-card';
import Callout, { Variant } from '@leafygreen-ui/callout';
import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import ContentfulRichText from '.';
import LinkedEntry from './LinkedEntry';
import HorizontalLayout from './HorizontalLayout';
import HorizontalLayoutColumn from './HorizontalLayoutColumn';

/*
Handles custom component rendering logic
*/
const EmbeddedEntry = ({ nodeTarget }) => {
  const isLinkedEntry = nodeTarget.sys.linkType;

  if (isLinkedEntry) {
    const embeddedEntryNodeId = nodeTarget?.sys?.id;
    return <LinkedEntry sysId={embeddedEntryNodeId} />
  } else {
    const embeddedEntryNodeId = nodeTarget?.sys?.contentType?.sys.id;
    const embeddedEntryFields = nodeTarget.fields;

    switch (embeddedEntryNodeId) {
      case 'buttonBlock': {
        const { content, variant, link } = embeddedEntryFields;
        return (
          <Button variant={variant} href={link}>
            {content}
          </Button>
        );
      }

      case 'calloutBlock': {
        const { title, content, variant } = embeddedEntryFields;
        return (
          <Callout title={title} variant={Variant[variant ?? 'note']}>
            <ContentfulRichText document={content} />
          </Callout>
        );
      }

      case 'cardBlock': {
        const { content } = embeddedEntryFields;
        return (
          <Card>
            <ContentfulRichText document={content} />
          </Card>
        );
      }

      case 'expandableCardBlock': {
        const { title, description, content } = embeddedEntryFields;
        return (
          <ExpandableCard title={title} description={description}>
            <ContentfulRichText document={content} />
          </ExpandableCard>
        );
      }

      case 'horizontalLayout': {
        const { columns } = embeddedEntryFields;
        return <HorizontalLayout columns={columns} />
      }
      case 'horizontalLayoutColumn': {
        // const { widthRatio, verticalAlign, content } = embeddedEntryFields;
        return <HorizontalLayoutColumn {...embeddedEntryFields} />
      }
      default:
        return (
          <h1>
            Unsupported embedded-entry-block nodeType: {embeddedEntryNodeId}.
          </h1>
        );
    }
  }
};

export default EmbeddedEntry;