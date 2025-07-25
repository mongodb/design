'use client';

import React from 'react';

import Button from '@leafygreen-ui/button';
import { BasicEmptyState } from '@leafygreen-ui/empty-state';
// @ts-expect-error
import LogInIcon from '@leafygreen-ui/icon/dist/LogIn';

import { signIn } from '@/auth/client';

import { Security } from '@/components/glyphs';

export function PrivateContentWall() {
  return (
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
