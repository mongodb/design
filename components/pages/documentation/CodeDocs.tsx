import React from 'react';
import { BaseLayoutProps } from 'utils/types';
import { InstallInstructions } from './InstallInstructions';
import { CodeExample } from './CodeExample';
import { MarkdownPropTable } from './MarkdownPropTable/MarkdownPropTable';
import { TSDocPropTable } from './TSDocPropTable';

function CodeDocs({
  componentName,
  componentKebabCaseName,
  readme,
  changelog,
  tsDoc,
}: BaseLayoutProps) {
  return (
    <>
      {/* <InstallInstructions
        componentKebabCaseName={componentKebabCaseName}
        changelog={changelog}
      /> */}
      {/* <CodeExample componentName={componentName} readme={readme} /> */}
      {/* <MarkdownPropTable componentName={componentName} readme={readme} /> */}
      {tsDoc?.map(doc => (
        <TSDocPropTable key={doc.displayName} tsDoc={doc} />
      ))}
    </>
  );
}

CodeDocs.displayName = 'CodeDocs';

export default CodeDocs;
