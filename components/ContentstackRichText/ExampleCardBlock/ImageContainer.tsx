import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

// Same as AnnotatedImageBlock except for the color prop

const ImageContainer = styled('div')`
  background: ${palette.gray.light3};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 240px;
  border-radius: 16px;
  border: none;
  margin-bottom: ${spacing[3]}px;
  position: relative;
  > img {
    max-width: 90%;
  }
  &::after {
    content: '';
    position: absolute;
    height: 32px;
    width: 100%;
    bottom: 0px;
    left: 0;
    border-radius: 0 0 16px 16px;
    background: linear-gradient(
      to bottom,
      transparent 26px,
      ${props => props.color} 8px
    );
  }
`;

export default ImageContainer;
