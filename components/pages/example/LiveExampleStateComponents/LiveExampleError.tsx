import { H2, InlineCode } from '@leafygreen-ui/typography';

export function LiveExampleError({ message }: { message?: string }) {
  return (
    <div>
      <H2>⚠️ Error loading live example</H2>
      {/* @ts-ignore - too complex */}
      <InlineCode>{message}</InlineCode>
    </div>
  );
}
