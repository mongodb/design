import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';

const StyledListItem = styled('li')`
  counter-increment: step-counter;
  margin-bottom: 4px;
  position: relative;
  display: flex;
  align-items: baseline;
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
    font-size: 13px;
    font-weight: 600;
    box-shadow: 1px 1px 0px ${palette.black};
  }
`;

export default StyledListItem;
