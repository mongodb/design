'use client';
import { css } from '@emotion/css';
import Button from '@leafygreen-ui/button';
// @ts-expect-error
import CaretDownIcon from '@leafygreen-ui/icon/dist/CaretDown';
// @ts-expect-error
import LogOutIcon from '@leafygreen-ui/icon/dist/LogOut';
import { Menu, MenuItem } from '@leafygreen-ui/menu';
import { Body, Description } from '@leafygreen-ui/typography';

import { LogIn } from './LogIn';

import { signOut } from '@/client/auth';
import { useSession } from '@/hooks';

export function UserMenu() {
  const session = useSession();

  return session?.user ? (
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
            {session.user.name}
          </Button>
        }
        renderMode="portal"
      >
        <MenuItem>
          <Body darkMode>{session.user.name}</Body>
          <Description darkMode>{session.user.email}</Description>
        </MenuItem>
        <MenuItem
          glyph={<LogOutIcon />}
          onClick={async () => {
            await signOut({ redirectTo: '/' });
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
