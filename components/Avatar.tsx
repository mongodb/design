import styled from '@emotion/styled';

import { palette } from '@leafygreen-ui/palette';

const Avatar = styled('div')`
  border-radius: 50%;
  min-width: 36px;
  min-height: 36px;
  background-color: ${palette.gray.base};
  color: ${palette.white};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

export default Avatar;
