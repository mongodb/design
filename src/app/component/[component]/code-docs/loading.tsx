'use client';
import { CardSkeleton } from '@leafygreen-ui/skeleton-loader';
import { codeDocsMetaCardsStyles, codeDocsPageStyles } from './codeDocs.styles';

export default function Loading() {
  return (
    <div className={codeDocsPageStyles}>
      <div className={codeDocsMetaCardsStyles}>
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <CardSkeleton />
    </div>
  );
}
