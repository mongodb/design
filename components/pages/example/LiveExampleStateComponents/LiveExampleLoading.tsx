import { css, keyframes } from '@leafygreen-ui/emotion';
import Icon from '@leafygreen-ui/icon';
import { H2 } from '@leafygreen-ui/typography';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export function LiveExampleLoading() {
  return (
    <H2>
      <Icon
        glyph="Refresh"
        className={css`
          height: 0.75em;
          width: 0.75em;
          animation: ${rotate} 1s linear infinite;
        `}
      />{' '}
      Loading live example...
    </H2>
  );
}
