'use client';

import { NotFound } from '@/components/global/NotFound';
import { nodeTypeToElementMap } from './componentMap';
import { ContentstackText } from './ContentstackText';
import { CSNode } from './types';
import { getCSNodeTextContent, isTextNode, nodeHasAssets } from './utils';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Code from '@leafygreen-ui/code';

interface CSRichTextProps
  extends Omit<JSX.IntrinsicElements['div'], 'content'> {
  content?: CSNode;
  isNested?: boolean;
  [key: string]: any;
}

/**
 * Renders a ContentStack Node
 */
export const ContentstackRichText = ({
  content,
  ...rest
}: CSRichTextProps): JSX.Element => {
  if (!content) return <NotFound />;

  if (isTextNode(content) && getCSNodeTextContent(content)) {
    return <ContentstackText node={content} {...rest} />;
  } else {
    const textContent = getCSNodeTextContent(content);

    if (textContent || nodeHasAssets(content)) {
      return (
        <ErrorBoundary
          errorComponent={err => {
            console.error(
              'The above error occurred mapping the following content to an element',
              content,
            );
            return <></>;
          }}
        >
          {/* @ts-expect-error */}
          {nodeTypeToElementMap[content.type]?.(content, rest)}
        </ErrorBoundary>
      );
    } else {
      return <></>;
    }
  }
};
