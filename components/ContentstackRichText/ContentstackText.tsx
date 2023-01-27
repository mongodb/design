import { CSTextNode } from './types';

const ContentstackText = ({ node }: { node: CSTextNode }) => {
  if (node.bold) {
    return <b>{node.text}</b>;
  } else {
    return <>{node.text}</>;
  }
};

export default ContentstackText;
