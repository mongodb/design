import { HTMLElementProps } from '@leafygreen-ui/lib';

import { nodeTypeToElementMap } from './componentMap';
import ContentstackText from './ContentstackText';
import { CSNode } from './types';
import { getCSNodeTextContent, isTextNode, nodeHasAssets } from './utils';

interface CSRichTextProps extends Omit<HTMLElementProps<'div'>, 'content'> {
  content?: CSNode;
  isNested?: boolean;
  [key: string]: any;
}

/**
 * Renders a ContentStack Node
 */
const ContentstackRichText = ({
  content,
  ...rest
}: CSRichTextProps): JSX.Element => {
  if (!content) return <>Content not found</>;

  if (isTextNode(content) && getCSNodeTextContent(content)) {
    return <ContentstackText node={content} {...rest} />;
  } else {
    const textContent = getCSNodeTextContent(content);

    if (textContent || nodeHasAssets(content)) {
      return nodeTypeToElementMap[content.type]?.(content, rest);
    } else {
      return <></>;
    }
  }
};

export default ContentstackRichText;
