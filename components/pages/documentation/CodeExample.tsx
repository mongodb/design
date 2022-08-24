import React from 'react';
import { Tab, Tabs } from '@leafygreen-ui/tabs';
import Code from '@leafygreen-ui/code';

import { GridContainer, GridItem } from 'components/Grid';
import { maxWidth, mt3, tabsPadding } from './documentationPageStyles';

export const CodeExample = ({ componentName, readme }) => {
  const example = readme?.split('js')[1]?.split('```')[0]?.trimStart();
  const outputHTML = readme?.split('```html')[1]?.split('```')[0]?.trimStart();

  return (
    <GridContainer align="flex-start" justify="flex-start" className={maxWidth}>
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
  );
};
