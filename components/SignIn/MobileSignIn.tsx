import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';

import { UserInfo } from 'components/UserInfo';

import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

const Container = styled('div')`
  background-color: ${palette.black};
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ActionContainer = styled('div')`
  display: flex;
  gap: ${spacing[4]}px;
  padding: ${spacing[4]}px;
  color: ${palette.white};
`;

export const MobileSignIn = () => {
  const { data: session } = useSession();
  return (
    <Container>
      {session ? (
        <>
          <UserInfo {...session.user} />
          <ActionContainer>
            <Icon glyph="LogOut" />
            Log out
          </ActionContainer>
        </>
      ) : (
        <ActionContainer>
          <Icon glyph="LogIn" />
          Log in
        </ActionContainer>
      )}
    </Container>
  );
};
