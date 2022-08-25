import ExpandableCard from '@leafygreen-ui/expandable-card';

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
    default:
      return (
        <h1>
          Unsupported embedded-entry-block nodeType: ${embeddedEntryNodeType!}
        </h1>
      );
  }
};

export default renderEntry;