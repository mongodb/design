import styled from '@emotion/styled';

import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize, spacing } from '@leafygreen-ui/tokens';

const StyledListItem = styled('li')`
  counter-increment: step-counter;
  margin-bottom: ${spacing[1]}px;
  position: relative;
  display: flex;
  align-items: flex-start;
  &::before {
    content: counter(step-counter);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${palette.black};
    border-radius: 50%;
    flex-basis: 18px;
    flex-grow: 0;
    flex-shrink: 0;
    height: 18px;
    line-height: 18px;
    font-size: ${BaseFontSize.Body1}px;
    font-weight: 600;
    box-shadow: 1px 1px 0px ${palette.black};
    margin-top: 3px;
  }
`;

export default StyledListItem;
