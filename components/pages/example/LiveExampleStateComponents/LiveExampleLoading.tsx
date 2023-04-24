import { useEffect, useState } from 'react';

import { VisuallyHidden } from '@leafygreen-ui/a11y';
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

/** How long to we wait to show the "still loading" text */
const loadingTimeout = 1000;

export function LiveExampleLoading() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const timerId = setTimeout(() => {
      if (mounted) {
        setShowLoading(true);
      }
    }, loadingTimeout);

    return () => {
      mounted = false;
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <VisuallyHidden>Loading live example...</VisuallyHidden>

      {/* We only show this text if loading has taken over `loadingTimeout` ms */}
      {showLoading && (
        <H2>
          <Icon
            glyph="Refresh"
            className={css`
              height: 0.75em;
              width: 0.75em;
              animation: ${rotate} 1s linear infinite;
            `}
          />{' '}
          Still loading live example...
        </H2>
      )}
    </>
  );
}
