import { H2, InlineCode } from '@leafygreen-ui/typography';

export function LiveExampleError({ message }: { message?: string }) {
  return (
    <>
      <H2>⚠️ Error loading live example</H2>
      <br />
      <InlineCode>{message}</InlineCode>
    </>
  );
}
