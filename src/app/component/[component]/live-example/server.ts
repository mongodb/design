import { StoryData } from '@/components/live-example/types';
import { composeStories } from '@storybook/react';

import { getNamespaceFromPkgName } from '../../../../utils/getNamespaceFromPkgName';
import { Component, Pattern, mappedTitles } from '@/utils';

export async function loadStories(componentName: Component | Pattern) {
  const mappedComponentName = mappedTitles[componentName] ?? componentName;

  try {
    // We have to use node_modules because it is static and can be analyzed at build time
    const stories = await import(
      `/node_modules/${getNamespaceFromPkgName(
        mappedComponentName,
      )}/${mappedComponentName}/stories`
    );
    const { LiveExample, default: extractMeta } = composeStories(stories);
    const meta = extractMeta ?? stories.default;

    return { LiveExample, meta } as StoryData;
  } catch (error) {
    console.log('ERROR LOADING STORIES');
    console.error(error);
    return;
  }
}
