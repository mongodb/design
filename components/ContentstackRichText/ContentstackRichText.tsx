import componentMap from './componentMap';

const ContentstackRichText = ({ content }: { content: any }) => {
  if (!content) {
    return <></>;
  } else if ('text' in content) {
    return content.text;
  } else {
    return content.type && componentMap[content.type] ? (
      componentMap[content.type](content)
    ) : (
      <>Unknown node type: {JSON.stringify(content)}.</>
    );
  }
};

export default ContentstackRichText;
