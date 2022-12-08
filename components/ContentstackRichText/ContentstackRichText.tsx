import componentMap from './componentMap';
import ContentstackText from './ContentstackText';

const ContentstackRichText = ({
  content,
  options,
}: {
  content: any;
  options?: any;
}) => {
  if ('text' in content) {
    return <ContentstackText node={content} />;
  } else {
    return content.type && componentMap[content.type] ? (
      componentMap[content.type](content, options)
    ) : (
      <>Unknown node type: {JSON.stringify(content)}.</>
    );
  }
};

export default ContentstackRichText;
