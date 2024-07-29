import { CSNode } from './types';
import { ContentstackRichText } from '.';

/**
 * Renders a node's children
 */
export const ContentstackChildren = ({
  nodeChildren,

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
