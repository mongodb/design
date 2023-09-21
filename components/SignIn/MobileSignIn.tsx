import styled from '@emotion/styled';
import { useSession } from 'next-auth/client';

import { UserInfo } from 'components/UserInfo';

import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

const Container = styled('div')`
  background-color: ${palette.black};
`;

const ActionContainer = styled('div')`
  display: flex;
  gap: ${spacing[4]}px;
  padding: ${spacing[4]}px;
  color: ${palette.white};
`;

export const MobileSignIn = () => {
  const [session, loading] = useSession();

  // todo: replace with real values
  const user = {
    firstName: 'Sean',
    lastName: 'Park',
    email: 's.park@mongodb.com',
  };

  return (
    <Container>
      <UserInfo {...user} />
      <ActionContainer>
        <Icon glyph="LogIn" />
        Log in
      </ActionContainer>
      <ActionContainer>
        <Icon glyph="LogOut" />
        Log out
      </ActionContainer>
      {/* TODO: replace the above with this logic */}
      {/* {session
      ? (
        <ActionContainer>
        <Icon glyph="LogOut" />
        Log out
      </ActionContainer>
      )
      : (
        <ActionContainer>
        <Icon glyph="LogIn" />
        Log in
      </ActionContainer>
      )
    } */}
    </Container>
  );
};
