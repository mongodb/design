import ContentstackEntry from './ContentstackEntry';

const ContentstackReference = ({ content }) => {
  const attrs = content.attrs;

  if (attrs.type === 'asset') {
    return (
      <img
        src={attrs['asset-link']}
        width={attrs['width']}
        height={attrs['height']}
      />
    );
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
