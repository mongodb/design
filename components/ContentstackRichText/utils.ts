import { CSNode, CSTextNode } from './types';

export const isTextNode = (node: CSNode): node is CSTextNode => {
  return Object.hasOwn(node, 'text');
};

/**
 * Loop through a node's children until we have all its text content
 */
export const getCSNodeTextContent = (node: CSNode): string => {
  if (isTextNode(node)) {
    return node.text;
  } else {
    return node.children
      .map(node => getCSNodeTextContent(node))
      .join(' ')
      .trim();
  }
};
