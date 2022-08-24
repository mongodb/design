import React from 'react';
import { css } from '@emotion/css';
import { unified } from 'unified';
import markdown from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { BaseLayoutProps } from 'utils/types';
import { GridContainer, GridItem } from 'components/Grid';
import PropTable, { ReadmeMarkdown } from './PropTable';
import TypeDefinition from './TypeDefinition';
import { Tab, Tabs } from '@leafygreen-ui/tabs';
import Code from '@leafygreen-ui/code';
import { spacing } from '@leafygreen-ui/tokens';
import { pageContainerWidth } from 'styles/constants';
import { InstallInstructions } from './InstallInstructions';

const tabsPadding = css`
  padding-top: ${spacing[4]}px;
`;

const mt3 = css`
  margin-top: ${spacing[3]}px;
`;
const maxWidth = css`
  max-width: ${pageContainerWidth.default}px;
`;

function CodeDocs({
  componentName,
  componentKebabCaseName,
  readme,
  changelog,
}: BaseLayoutProps) {
  const example = readme?.split('js')[1]?.split('```')[0]?.trimStart();
  const outputHTML = readme?.split('```html')[1]?.split('```')[0]?.trimStart();
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
      <GridContainer
        align="flex-start"
        justify="flex-start"
        className={maxWidth}
      >
        <GridItem sm={12} md={12} xl={12}>
          <Tabs
            className={tabsPadding}
            aria-label={`View source code for ${componentName} component`}
          >
            {example && (
              <Tab default name="Example" className={mt3}>
                <Code language="js">{example}</Code>
              </Tab>
            )}

            {outputHTML && (
              <Tab name="Output HTML" className={mt3} default={!example}>
                <Code language="xml">{outputHTML}</Code>
              </Tab>
            )}
          </Tabs>
        </GridItem>
      </GridContainer>
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
