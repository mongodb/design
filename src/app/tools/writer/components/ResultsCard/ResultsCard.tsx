'use client';

import { css, cx } from '@emotion/css';
import Card from '@leafygreen-ui/card';
import { spacing, BaseFontSize } from '@leafygreen-ui/tokens';
import { Body } from '@leafygreen-ui/typography';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Skeleton, Size } from '@leafygreen-ui/skeleton-loader';
import CopyButton from './CopyButton';

const copyButtonContainerStyles = css`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  padding: ${spacing[300]}px ${spacing[300]}px ${spacing[300]}px
    ${spacing[300]}px;
  transition: opacity 0.15s ease-in-out;
  background-image: radial-gradient(rgba(0, 30, 43, 1) 15%, rgba(0, 30, 43, 0));

  &:focus-within {
    opacity: 1;
  }
`;

const copyButtonContainerDarkModeStyles = css`
  background-image: radial-gradient(rgba(0, 30, 43, 1) 15%, rgba(0, 30, 43, 0));
`;

const copyButtonContainerLightModeStyles = css`
  background-image: radial-gradient(rgba(255, 255, 255, 1) 15%, rgba(255,255, 255, 0));
`;

const resultsCardStyles = css`
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  width: 100%;
	transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translate3d(0, 30px, 0);
  opacity: 0;

  & + & {
    transition-delay: 0.15s;

    &:last-of-type {
      transition-delay: 0.3s;
    }
  }

  // Use a static className to allow for descendent styling when the card is hovered on.
  &:hover .lg-static-writer-copy-button-container {
    opacity: 1;
  }
`;

const loadingSkeletonLine = css`
  & + & {
    margin-top: ${spacing[100]}px;
  }

  &:last-of-type {
    width: 80%;
  }
`;

interface ResultsCardProps {
  resultText?: string;
  className?: string;
  isLoading?: boolean;
}

export default function ResultsCard({
  resultText,
  className,
  isLoading = false,
}: ResultsCardProps) {
	const { theme } = useDarkMode();

  return (
    <Card className={cx(resultsCardStyles, className)}>
      {resultText && (
        <div
          className={cx(
            'lg-static-writer-copy-button-container',
            copyButtonContainerStyles,
            {
              [copyButtonContainerDarkModeStyles]: theme === 'dark',
              [copyButtonContainerLightModeStyles]: theme === 'light',
            }
          )}
        >
          <CopyButton copyText={resultText} />
        </div>
      )}

      {!resultText || isLoading ? (
        <>
          <Skeleton
            className={loadingSkeletonLine}
            enableAnimations={true}
            size={Size.Small} />

          <Skeleton
            className={loadingSkeletonLine}
            enableAnimations={true}
            size={Size.Small} />
            
          <Skeleton
            className={loadingSkeletonLine}
            enableAnimations={true}
            size={Size.Small} />
        </> 
      ) : (
        <Body baseFontSize={BaseFontSize.Body2}>{resultText}</Body>
      )}

    </Card>
  );
}
