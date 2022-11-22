const ContentstackText = ({ node }: { node: any }) => {
  if (node.bold) {
    return <b>{node.text}</b>;
  } else {
    return <>{node.text}</>;
  }
};

export default ContentstackText;
