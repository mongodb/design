import { nodeTypeToElementMap } from './componentMap';
import ContentstackText from './ContentstackText';
import { CSNode } from './types';
import { getCSNodeTextContent, isTextNode, nodeHasAssets } from './utils';

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
    const textContent = getCSNodeTextContent(content);

    if (textContent || nodeHasAssets(content)) {
      return nodeTypeToElementMap[content.type]?.(content, options);
    } else {
      return <></>;
    }
  }
};

export default ContentstackRichText;
