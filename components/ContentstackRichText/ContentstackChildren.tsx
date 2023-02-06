import { CSNode } from './types';
import ContentstackRichText from '.';

/**
 * Renders a node's children
 */
const ContentstackChildren = ({
  nodeChildren,
  className, // don't spread parent's className
  ...props
}: {
  nodeChildren: CSNode['children'];
  [key: string]: any;
}): JSX.Element => {
  return (
    <>
      {nodeChildren.map(childNode => (
        <ContentstackRichText
          key={childNode.uid}
          content={childNode}
          {...props}
        />
      ))}
    </>
  );
};

export default ContentstackChildren;
