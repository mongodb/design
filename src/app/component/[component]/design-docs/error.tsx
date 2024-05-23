'use client';
import { ErrorBoundaryProps } from 'next/dist/client/components/error-boundary';
import { useState } from 'react';
import { Error as ErrorGraphic } from '@/components/glyphs';
import Button from '@leafygreen-ui/button';
import { BasicEmptyState } from '@leafygreen-ui/empty-state';
import { Code } from '@leafygreen-ui/code';

export const DocsErrorComponent: ErrorBoundaryProps['errorComponent'] = err => {
  const [showError, setShowError] = useState(false);
  return (
    <>
      <BasicEmptyState
        graphic={<ErrorGraphic />}
        title={'Internal Error'}
        description={err.error.name + ': ' + err.error.message}
        primaryButton={
          <Button onClick={() => setShowError(e => !e)}>
            {showError ? 'Hide' : 'Show'} details
          </Button>
        }
      />
      {showError && (
        <Code copyable={false} language="bash">{`${err.error.stack}`}</Code>
      )}
    </>
  );
};

export default DocsErrorComponent;
