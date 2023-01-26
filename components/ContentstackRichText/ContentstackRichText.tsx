import { nodeTypeToElementMap } from './componentMap';
import ContentstackText from './ContentstackText';
import { CSNode } from './types';
import { isTextNode } from './utils';

/**
 * Renders a ContentStack Node
 */
const ContentstackRichText = ({
  content,
  options,
}: {
  content?: CSNode;
  options?: any;
}): JSX.Element => {
  if (!content) return <>Content not found</>;

  if (isTextNode(content)) {
    return <ContentstackText node={content} />;
  } else {
    return (
      nodeTypeToElementMap[content.type]?.(content, options) ?? (
        <>Unknown node type: {JSON.stringify(content)}.</>
      )
    );
  }
};

export default ContentstackRichText;
