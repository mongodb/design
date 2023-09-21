import styled from '@emotion/styled';

import { spacing } from '@leafygreen-ui/tokens';
import { Body, Description } from '@leafygreen-ui/typography';

import Avatar from './Avatar';

const UserInfoContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: ${spacing[4]}px;
  padding: ${spacing[4]}px;
`;

export const UserInfo = ({ firstName, lastName, email }) => {
  return (
    <UserInfoContainer>
      <Avatar>{firstName[0]}</Avatar>
      <div>
        <Body darkMode>
          {firstName} {lastName}
        </Body>
        <Description darkMode>{email}</Description>
      </div>
    </UserInfoContainer>
  );
};
