import styled from '@emotion/styled';
import { signIn } from 'next-auth/react';
import SecurityGraphic from 'public/SecurityGraphic';

import Button from '@leafygreen-ui/button';
import { BasicEmptyState } from '@leafygreen-ui/empty-state';
import Icon from '@leafygreen-ui/icon';

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Unauthorized() {
  return (
    <Wrapper>
      <BasicEmptyState
        title="Log in to view private content"
        description="This page is locked for security purposes and only accessible by MongoDB employees."
        primaryButton={
          <Button
            variant="primary"
            onClick={() => signIn('okta')}
            leftGlyph={<Icon glyph="LogIn" />}
          >
            Log In
          </Button>
        }
        graphic={<SecurityGraphic />}
      />
    </Wrapper>
  );
}
