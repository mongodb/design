import styled from '@emotion/styled';
import { signIn, useSession } from 'next-auth/client';

import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import {
  FocusableMenuItem,
  Menu as LGMenu,
  MenuItem,
} from '@leafygreen-ui/menu';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import { Body, Description } from '@leafygreen-ui/typography';

import Avatar from '../Avatar';

const Container = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: ${spacing[4]}px;
  z-index: 1;
  // todo: remove
  gap: 8px;
`;

const Menu = styled(LGMenu)`
  padding: 0;
  width: unset;
  background-color: ${palette.gray.dark3};
`;

const UserMenuTrigger = styled(Button)``;

const UserInfoContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: ${spacing[4]}px;
  padding: ${spacing[4]}px;
`;

const LogOutMenuItem = styled(MenuItem)`
  padding: 20px;
`;

const DesktopSignIn = () => {
  const [session, loading] = useSession();

  // todo: replace with real values
  const user = {
    firstName: 'Sean',
    lastName: 'Park',
    email: 's.park@mongodb.com',
  };

  return (
    <Container>
      <Button
        variant="primaryOutline"
        leftGlyph={<Icon glyph="LogIn" />}
        onClick={signIn}
      >
        Log in
      </Button>
      <Menu
        trigger={
          <UserMenuTrigger rightGlyph={<Icon glyph="CaretDown" />}>
            {user.firstName}
          </UserMenuTrigger>
        }
      >
        <FocusableMenuItem>
          <UserInfoContainer>
            <Avatar>{user.firstName[0]}</Avatar>
            <div>
              <Body darkMode>
                {user.firstName} {user.lastName}
              </Body>
              <Description darkMode>{user.email}</Description>
            </div>
          </UserInfoContainer>
        </FocusableMenuItem>
        <LogOutMenuItem glyph={<Icon glyph="LogOut" />}>Log out</LogOutMenuItem>
      </Menu>
      {/* TODO: replace the above with this logic */}
      {/* {session
      ? <Menu trigger={<UserMenuTrigger rightGlyph={<Icon glyph="CaretDown" />}>{userName} </UserMenuTrigger>} />
      : <Button variant="primaryOutline" leftGlyph={<Icon glyph="LogIn" />} onClick={signIn}>Log in</Button>
    } */}
    </Container>
  );
};

export default DesktopSignIn;
