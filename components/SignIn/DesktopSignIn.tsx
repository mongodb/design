import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';
import { mq } from 'utils/mediaQuery';

import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import { FocusableMenuItem, Menu, MenuItem } from '@leafygreen-ui/menu';
import { palette } from '@leafygreen-ui/palette';
import { fontWeights, spacing } from '@leafygreen-ui/tokens';

import { UserInfo } from '../UserInfo';

const Container = styled('div')`
  width: 100%;
  position: absolute;
  right: 16px;
  align-items: center;
  justify-content: flex-end;
  padding-top: ${spacing[4]}px;
  z-index: 1;
  ${mq({
    display: ['none', 'none', 'flex'],
  })}
`;

const StyledMenu = styled(Menu)`
  padding: 0;
  width: unset;
  background-color: ${palette.gray.dark3};
`;

const UserMenuTrigger = styled(Button)`
  border-radius: 16px;
  padding-left: ${spacing[2]}px;
  max-height: 32px;
  background-color: ${palette.white};
  border-color: ${palette.gray.light2};
  font-weight: ${fontWeights.regular};

  &[aria-expanded='true'] {
    font-weight: ${fontWeights.bold};
    border-color: ${palette.gray.light1};
    background-color: ${palette.gray.light2};
  }
`;

const LogOutMenuItem = styled(MenuItem)`
  padding: 20px;
`;

const DesktopSignIn = () => {
  const { data: session } = useSession();

  return (
    <Container>
      {session ? (
        <StyledMenu
          trigger={
            <UserMenuTrigger rightGlyph={<Icon glyph="CaretDown" />}>
              {session?.user?.name}
            </UserMenuTrigger>
          }
        >
          <FocusableMenuItem>
            <UserInfo
              name={session?.user?.name ?? 'User'}
              email={session?.user?.email ?? ''}
            />
          </FocusableMenuItem>
          <LogOutMenuItem
            glyph={<Icon glyph="LogOut" />}
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Log out
          </LogOutMenuItem>
        </StyledMenu>
      ) : (
        <Button
          variant="primaryOutline"
          leftGlyph={<Icon glyph="LogIn" />}
          onClick={() => signIn('okta')}
        >
          Log in
        </Button>
      )}
    </Container>
  );
};

export default DesktopSignIn;
