'use client';
import { CardSkeleton } from '@leafygreen-ui/skeleton-loader';
import {
  getCodeDocsMetaCardsStyles,
  codeDocsPageStyles,
} from './codeDocs.styles';

export default function Loading() {
  return (
    <div className={codeDocsPageStyles}>
      <div className={getCodeDocsMetaCardsStyles()}>
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <CardSkeleton />
    </div>
  );
}
