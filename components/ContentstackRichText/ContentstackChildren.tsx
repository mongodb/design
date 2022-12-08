import ContentstackRichText from '.';

const ContentstackChildren = ({ nodeChildren }) =>
  nodeChildren.map(childNode => (
    <ContentstackRichText key={childNode.uid} content={childNode} />
  ));

export default ContentstackChildren;
