import ContentstackEntry from './ContentstackEntry';
import ContentstackImage from './ContentstackImage';
import { CSNode } from './types';

const ContentstackReference = ({ content }: { content: CSNode }) => {
  const {
    type,
    'content-type-uid': contentTypeUid,
    'entry-uid': entryUid,
  } = content.attrs;

  if (type === 'asset') {
    return <ContentstackImage content={content} />;
  } else if (type === 'entry') {
    return (
      <ContentstackEntry contentTypeUid={contentTypeUid} entryUid={entryUid} />
    );
  } else {
    return <>Unknown reference type: {type}. </>;
  }
};

export default ContentstackReference;
