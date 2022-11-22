import componentMap from './componentMap';

const ContentstackRichText = ({
  content,
  options,
}: {
  content: any;
  options?: any;
}) => {
  if ('text' in content) {
    return content.text;
  } else {
    return content.type && componentMap[content.type] ? (
      componentMap[content.type](content, options)
    ) : (
      <>Unknown node type: {JSON.stringify(content)}.</>
    );
  }
};

export default ContentstackRichText;
