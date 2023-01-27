import { CSNode } from './types';
import ContentstackRichText from '.';

/**
 * Renders a node's children
 */
const ContentstackChildren = ({
  nodeChildren,
}: {
  nodeChildren: CSNode['children'];
}): JSX.Element => (
  <>
    {nodeChildren.map(childNode => (
      <ContentstackRichText key={childNode.uid} content={childNode} />
    ))}
  </>
);

export default ContentstackChildren;
