'use client';
import { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Session } from 'next-auth';
import Button from '@leafygreen-ui/button';
// @ts-expect-error
import CaretDownIcon from '@leafygreen-ui/icon/dist/CaretDown';
// @ts-expect-error
import LogOutIcon from '@leafygreen-ui/icon/dist/LogOut';
import { Menu, MenuItem } from '@leafygreen-ui/menu';
import { Body, Description } from '@leafygreen-ui/typography';
import { logout } from '@/auth';
import { useSession } from '@/hooks';
import { LogIn } from './LogIn';

export function UserMenu() {
  const session = useSession();
  // TODO: use next-auth session when available
  // Session does not clear reliably without forcing a state change or a hard refresh
  // https://github.com/nextauthjs/next-auth/discussions/4687
  const [manualSession, setManualSession] = useState<Session | undefined>(
    undefined,
  );

  useEffect(() => {
    if (session?.user) {
      setManualSession(session);
    }

    if (!session?.user) {
      setManualSession(undefined);
    }
  }, [session]);

  return manualSession?.user ? (
    <div
      className={css`
        z-index: 1;
      `}
    >
      <Menu
        trigger={
          <Button
            size="small"
            className={css`
              border-radius: 50px;
            `}
            rightGlyph={<CaretDownIcon />}
          >
            {manualSession.user.name}
          </Button>
        }
        renderMode="portal">
        <MenuItem>
          <Body darkMode>{manualSession.user.name}</Body>
          <Description darkMode>{manualSession.user.email}</Description>
        </MenuItem>
        <MenuItem
          glyph={<LogOutIcon />}
          onClick={() => {
            logout();
            setManualSession(undefined);
          }}
        >
          Log out
        </MenuItem>
      </Menu>
    </div>
  ) : (
    <LogIn />
  );
}
