import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';

const ImageContainer = styled('div')`
  background: ${palette.gray.light3};
  display: flex;
  justify-content: center;
  align-items: middle;
  min-height: 300px;
  border-radius: 16px;
  border: none;
  border-bottom: 6px solid ${palette.gray.light1};
  margin-bottom: 16px;

  > img {
    max-width: 90%;
  }
`;

export default ImageContainer;
