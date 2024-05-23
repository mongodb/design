'use client';

import { ContentstackRichText } from '@/components/content-stack';
import { CSNode } from '@/components/content-stack/types';
import { DocsErrorComponent } from './error';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

interface DesignDocsContentProps {
  content?: CSNode;
}

export const DesignDocsContent = ({ content }: DesignDocsContentProps) => {
  return (
    <ErrorBoundary errorComponent={DocsErrorComponent}>
      <ContentstackRichText content={content} />
    </ErrorBoundary>
  );
};
