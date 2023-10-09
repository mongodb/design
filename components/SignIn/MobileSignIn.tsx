import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';

import { UserInfo } from 'components/UserInfo';

import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import { fontFamilies, spacing } from '@leafygreen-ui/tokens';

const Container = styled('div')`
  background-color: ${palette.black};
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ActionContainer = styled('button')`
  display: flex;
  gap: ${spacing[4]}px;
  padding: ${spacing[4]}px;
  color: ${palette.white};
  background-color: ${palette.black};
  border: none;
  font-family: ${fontFamilies.default};
  cursor: pointer;
`;

export const MobileSignIn = () => {
  const { data: session } = useSession();
  return (
    <Container>
      {session ? (
        <>
          <UserInfo
            name={session?.user?.name ?? 'User'}
            email={session?.user?.email ?? ''}
          />
          <ActionContainer onClick={() => signOut()}>
            <Icon glyph="LogOut" />
            Log out
          </ActionContainer>
        </>
      ) : (
        <ActionContainer onClick={() => signIn('okta')}>
          <Icon glyph="LogIn" />
          Log in
        </ActionContainer>
      )}
    </Container>
  );
};
