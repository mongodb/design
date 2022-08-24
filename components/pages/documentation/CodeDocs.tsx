import React from 'react';
import { BaseLayoutProps } from 'utils/types';
import { InstallInstructions } from './InstallInstructions';
import { CodeExample } from './CodeExample';
import { MarkdownPropTable } from './MarkdownPropTable/MarkdownPropTable';
function CodeDocs({
  componentName,
  componentKebabCaseName,
  readme,
  changelog,
}: BaseLayoutProps) {
  return (
    <>
      <InstallInstructions
        componentKebabCaseName={componentKebabCaseName}
        changelog={changelog}
      />
      <CodeExample componentName={componentName} readme={readme} />
      <MarkdownPropTable componentName={componentName} readme={readme} />
    </>
  );
}

CodeDocs.displayName = 'CodeDocs';

export default CodeDocs;
