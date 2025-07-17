'use client';

import { useRouter } from 'next/navigation';
import Button from '@leafygreen-ui/button';
import { BasicEmptyState } from '@leafygreen-ui/empty-state';
// @ts-expect-error
import ArrowLeftIcon from '@leafygreen-ui/icon/dist/ArrowLeft';

import { ComingSoon } from '@/components/glyphs';

export default function Private() {
  const router = useRouter();

  return (
    <BasicEmptyState
      title="Coming Soon"
      description="Check back for updates soon"
      primaryButton={
        <Button leftGlyph={<ArrowLeftIcon />} onClick={() => router.push('/')}>
          Return to home
        </Button>
      }
      graphic={<ComingSoon />}
    />
  );
}
