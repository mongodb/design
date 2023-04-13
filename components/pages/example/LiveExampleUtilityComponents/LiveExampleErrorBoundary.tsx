import Button from '@leafygreen-ui/button';
import { H2, InlineCode } from '@leafygreen-ui/typography';

export function LiveExampleErrorBoundaryFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <H2>⚠️ Error loading live example</H2>
      <br />
      {/* @ts-expect-error - too complex union */}
      <InlineCode>{error.message}</InlineCode>
      <br />
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}
