import styled from '@emotion/styled';

import { palette } from '@leafygreen-ui/palette';

const ImageContainer = styled('div')`
  background: ${palette.gray.light3};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  > img {
    max-width: 100%;
  }
  &::after {
    content: '';
    position: absolute;
    height: 32px;
    width: 100%;
    bottom: 0px;
    left: 0;
    background: linear-gradient(
      to bottom,
      transparent 26px,
      ${props => props.color} 8px
    );
  }
`;

export default ImageContainer;
