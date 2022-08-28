import ExpandableCard from '@leafygreen-ui/expandable-card';
import Callout, { Variant } from '@leafygreen-ui/callout';
import Card from '@leafygreen-ui/card';
import ContentfulRichText from '.';

/*
Handles custom component rendering logic
*/
const renderEntry = node => {
  const embeddedEntryNodeType = node.data.target?.sys?.contentType?.sys.id;
  const embeddedEntryFields = node.data.target.fields;

  switch (embeddedEntryNodeType) {
    case 'expandableCardBlock': {
      const { title, description, content } = embeddedEntryFields;
      return (
        <ExpandableCard title={title} description={description}>
          <ContentfulRichText document={content} />
        </ExpandableCard>
      );
    }
    case 'calloutBlock': {
      const { title, content, variant } = embeddedEntryFields;
      return (
        <Callout title={title} variant={Variant[variant]}>
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
    default:
      return (
        <h1>
          Unsupported embedded-entry-block nodeType: {embeddedEntryNodeType}.
        </h1>
      );
  }
};

export default renderEntry;