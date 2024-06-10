'use client';

import { css } from '@emotion/css';
import { ContentstackRichText } from '@/components/content-stack';
import { CSNode } from '@/components/content-stack/types';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

interface DesignDocsContentProps {
  content?: CSNode;
}

export const DesignDocsContent = ({ content }: DesignDocsContentProps) => {
  return (
    <div
      className={css`
        max-width: 700px; // TODO: Make this responsive
      `}
    >
      <ContentstackRichText content={content} />
    </div>
  );
};
