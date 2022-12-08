import ContentstackEntry from './ContentstackEntry';
import ContentstackImage from './ContentstackImage';

const ContentstackReference = ({ content }) => {
  const attrs = content.attrs;

  if (attrs.type === 'asset') {
    return <ContentstackImage content={content} />;
  } else if (attrs.type === 'entry') {
    return (
      <ContentstackEntry
        contentTypeUid={attrs['content-type-uid']}
        entryUid={attrs['entry-uid']}
      />
    );
  } else {
    return <>Unknown reference type: {attrs.type}. </>;
  }
};

export default ContentstackReference;
