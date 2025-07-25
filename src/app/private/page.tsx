'use client';

import { useRouter } from 'next/navigation';
import Button from '@leafygreen-ui/button';
import { BasicEmptyState } from '@leafygreen-ui/empty-state';
// @ts-expect-error
import ArrowLeftIcon from '@leafygreen-ui/icon/dist/ArrowLeft';
// @ts-expect-error
import LogInIcon from '@leafygreen-ui/icon/dist/LogIn';
import { signIn } from '@/auth/client';

import { ComingSoon, Security } from '@/components/glyphs';
import { useSession } from '@/hooks';

export default function Private() {
  const router = useRouter();
  const { isLoggedIn } = useSession();

  return isLoggedIn ? (
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
  ) : (
    <BasicEmptyState
      title="Log in to view private content"
      description="This page is locked for security purposes and only accessible by MongoDB employees."
      primaryButton={
        <Button
          variant="primary"
          onClick={() => signIn('okta')}
          leftGlyph={<LogInIcon />}
        >
          Log In
        </Button>
      }
      graphic={<Security />}
    />
  );
}
