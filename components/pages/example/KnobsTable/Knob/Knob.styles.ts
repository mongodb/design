import { css } from '@leafygreen-ui/emotion';

export const radioBoxOverrideStyle = css`
  & > div {
    // We want to enforce the box is at least a square.
    // By default the radio box can be narrow when there is short text.
    // Here we set the min-width to
    // the padding + line-height + border set in the RadioBox component
    min-width: ${16 + 16 + 20 + 2}px;
  }
`;
