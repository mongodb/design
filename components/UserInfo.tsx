import { ForwardedRef, forwardRef } from 'react';
import styled from '@emotion/styled';

import { spacing } from '@leafygreen-ui/tokens';
import { Body, Description } from '@leafygreen-ui/typography';

import Avatar from './Avatar';

interface UserInfoProps {
  name: string;
  email: string;
}

const UserInfoContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: ${spacing[4]}px;
  padding: ${spacing[4]}px;
`;

const TextContainer = styled('div')`
  word-break: break-word;
`;

export const UserInfo = forwardRef(
  (
    { name = 'Unknown User', email }: UserInfoProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <UserInfoContainer ref={ref}>
        <Avatar>{name[0]}</Avatar>
        <TextContainer>
          <Body darkMode>{name}</Body>
          <Description darkMode>{email}</Description>
        </TextContainer>
      </UserInfoContainer>
    );
  },
);

UserInfo.displayName = 'UserInfo';
