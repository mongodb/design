import { CSNode, CSTextNode } from './types';

export const isTextNode = (node: CSNode): node is CSTextNode => {
  return node && Object.hasOwn(node, 'text');
};

/**
 * Loop through a node's children until we have all its text content
 */
export const getCSNodeTextContent = (node?: CSNode): string => {
  if (!node) return '';

  if (isTextNode(node)) {
    return node.text;
  } else {
    return node.children
      .map(node => getCSNodeTextContent(node))
      .join(' ')
      .trim();
  }
};

export const nodeHasAssets = (node: CSNode): boolean => {
  if (['asset', 'entry', 'reference'].includes(node.type)) {
    return true;
  } else {
    return node.children && node.children.some(child => nodeHasAssets(child));
  }
};
