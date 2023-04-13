import { H2, InlineCode } from '@leafygreen-ui/typography';

export function LiveExampleErrorBoundaryFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  // TODO: Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <H2>⚠️ Error loading live example</H2>
      <br />
      <InlineCode>{error.message}</InlineCode>
    </div>
  );
}
