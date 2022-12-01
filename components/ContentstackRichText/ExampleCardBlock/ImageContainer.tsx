import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';

// Same as AnnotatedImageBlock except for the color prop

const ImageContainer = styled('div')`
  background: ${palette.gray.light3};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 32px 66px;
  border-radius: 16px;
  border: none;
  margin-bottom: 10px;
  position: relative;
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
    border-radius: 0 0 16px 16px;
    background: linear-gradient(
      to bottom,
      transparent 26px,
      ${props => props.color} 8px
    );
  }
`;

export default ImageContainer;
