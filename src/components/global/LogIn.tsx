'use client';

import { css } from '@emotion/css';
import Button from '@leafygreen-ui/button';
import { signIn } from '@/auth/client';

export function LogIn() {
  return (
    <Button
      size="small"
      // client-side log in
      onClick={() => signIn('okta')}
      className={css`
        border-radius: 50px;
      `}
    >
      Log In
    </Button>
  );
}
