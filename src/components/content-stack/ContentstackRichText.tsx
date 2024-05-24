'use client';

import { NotFound } from '@/components/global/NotFound';
import { nodeTypeToElementMap } from './componentMap';
import { ContentstackText } from './ContentstackText';
import { CSNode } from './types';
import { getCSNodeTextContent, isTextNode, nodeHasAssets } from './utils';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

interface CSRichTextProps
  extends Omit<JSX.IntrinsicElements['div'], 'content'> {
  content?: CSNode;
  isNested?: boolean;
  [key: string]: any;
}

/**
 * Renders a ContentStack Node
 */
export const ContentStackRichText = ({
  content,
  ...rest
}: CSRichTextProps): JSX.Element => {
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
      <ContentStackRichTextElement content={content} {...rest} />
    </ErrorBoundary>
  );
};

const ContentStackRichTextElement = ({
  content,
  ...rest
}: CSRichTextProps): JSX.Element => {
  if (!content) return <NotFound />;

  if (isTextNode(content) && getCSNodeTextContent(content)) {
    return <ContentstackText node={content} {...rest} />;
  } else {
    const textContent = getCSNodeTextContent(content);

    if (textContent || nodeHasAssets(content)) {
      /* @ts-expect-error */
      return nodeTypeToElementMap[content.type]?.(content, rest);
    } else {
      return <></>;
    }
  }
};
