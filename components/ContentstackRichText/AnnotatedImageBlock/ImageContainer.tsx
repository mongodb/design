import styled from '@emotion/styled';

import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

const bottomBorderHeight = 6;

const ImageContainer = styled('div')`
  background: ${palette.gray.light3};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing[6] - bottomBorderHeight}px 32px ${spacing[6]}px;
  border-radius: 16px;
  border: none;
  margin-bottom: ${spacing[3]}px;
  position: relative;

  > img {
    max-width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    height: ${spacing[5]}px;
    width: 100%;
    bottom: 0px;
    left: 0;
    border-radius: 0 0 16px 16px;
    background: linear-gradient(
      to bottom,
      transparent ${spacing[5] - bottomBorderHeight}px,
      ${palette.gray.light1} 8px
    );
  }
`;

export default ImageContainer;
