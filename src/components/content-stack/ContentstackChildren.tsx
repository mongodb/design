import { CSNode } from './types';
import { ContentStackRichText } from '.';

/**
 * Renders a node's children
 */
export const ContentStackChildren = ({
  nodeChildren,

  ...props
}: {
  nodeChildren: CSNode['children'];
  [key: string]: any;
}): JSX.Element => {
  return (
    <>
      {nodeChildren.map(childNode => (
        <ContentStackRichText
          key={childNode.uid}
          content={childNode}
          {...props}
        />
      ))}
    </>
  );
};
