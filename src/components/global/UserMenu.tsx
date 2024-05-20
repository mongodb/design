"use client";

import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Button from "@leafygreen-ui/button";
// @ts-expect-error
import CaretDownIcon from "@leafygreen-ui/icon/dist/CaretDown";
// @ts-expect-error
import LogOutIcon from "@leafygreen-ui/icon/dist/LogOut";
import { Menu, MenuItem } from "@leafygreen-ui/menu";
import { Body, Description } from "@leafygreen-ui/typography";
import { getSession, logout, Session } from "@/auth";
import { LogIn } from "./LogIn";

export function UserMenu() {
  const [session, setSession] = useState<Session | undefined>();

  useEffect(() => {
    getSession().then((response) => {
      if (response !== null) {
        setSession(response);
      }
    });
  }, []);

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
      >
        <MenuItem>
          <Body darkMode>{session.user.name}</Body>
          <Description darkMode>{session.user.email}</Description>
        </MenuItem>
        <MenuItem glyph={<LogOutIcon />} onClick={() => logout()}>
          Log out
        </MenuItem>
      </Menu>
    </div>
  ) : (
    <LogIn />
  );
}
