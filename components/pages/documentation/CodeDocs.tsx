import React from 'react';
import { unified } from 'unified';
import markdown from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { BaseLayoutProps } from 'utils/types';
import { GridContainer, GridItem } from 'components/Grid';
import PropTable, { ReadmeMarkdown } from './PropTable';
import TypeDefinition from './TypeDefinition';
import { InstallInstructions } from './InstallInstructions';
import { CodeExample } from './CodeExample';
function CodeDocs({
  componentName,
  componentKebabCaseName,
  readme,
  changelog,
}: BaseLayoutProps) {
  const markdownAst = unified()
    .use(markdown)
    .use(remarkGfm)
    .parse(readme) as unknown as ReadmeMarkdown;

  return (
    <>
      <InstallInstructions
        componentKebabCaseName={componentKebabCaseName}
        changelog={changelog}
      />
      <CodeExample componentName={componentName} readme={readme} />
      <GridContainer align="flex-start" justify="flex-start">
        <GridItem sm={12} md={12} xl={12}>
          <PropTable markdownAst={markdownAst} component={componentName} />
          <TypeDefinition markdownAst={markdownAst} readme={readme} />
        </GridItem>
      </GridContainer>
    </>
  );
}

CodeDocs.displayName = 'CodeDocs';

export default CodeDocs;
