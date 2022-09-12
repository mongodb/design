import React from 'react';
import { BaseLayoutProps } from 'utils/types';
import { InstallInstructions } from './InstallInstructions';
import { CodeExample } from './CodeExample';
import { Subtitle } from '@leafygreen-ui/typography';
import { TSDocPropTableSection } from './TSDocPropTable/TSDocPropTable';

function CodeDocs({
  componentName,
  componentKebabCaseName,
  readme,
  changelog,
  tsDoc: tsDocArray,
}: BaseLayoutProps) {
  return (
    <>
      <InstallInstructions
        componentKebabCaseName={componentKebabCaseName}
        changelog={changelog}
      />
      <CodeExample componentName={componentName} readme={readme} />
      {tsDocArray && tsDocArray.length > 0 ? (
        <TSDocPropTableSection tsDocArray={tsDocArray} />
      ) : (
        <Subtitle>No prop definitions found</Subtitle>
      )}
    </>
  );
}

CodeDocs.displayName = 'CodeDocs';

export default CodeDocs;
