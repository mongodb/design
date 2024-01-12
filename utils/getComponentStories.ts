import { ComponentStoryFn, Meta } from '@storybook/react';

import { getNamespaceFromPkgName } from './getNamespaceFromPkgName';

export type ModuleType = {
  default: Meta<any>;
} & {
  [key: string]: ComponentStoryFn<any>;
};

/**
 * Returns the Storybook module for a given package name
 */
export async function getComponentStories(
  kebabName: string,
): Promise<ModuleType | undefined> {
  const namespace = getNamespaceFromPkgName(kebabName);

  try {
    return import(`node_modules/${namespace}/${kebabName}/stories.js`);
  } catch (err) {
    console.warn(err);
    return;
  }
}
