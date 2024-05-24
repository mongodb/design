'use client';

import { ContentstackRichText } from '@/components/content-stack';
import { CSNode } from '@/components/content-stack/types';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

interface DesignDocsContentProps {
  content?: CSNode;
}

export const DesignDocsContent = ({ content }: DesignDocsContentProps) => {
  return <ContentstackRichText content={content} />;
};
