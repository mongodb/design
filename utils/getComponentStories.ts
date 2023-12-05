import { ComponentStoryFn, Meta } from '@storybook/react';

import { PRIVATE_PACKAGES } from './constants';

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
  let namespace = '@leafygreen-ui';

  if (PRIVATE_PACKAGES.includes(kebabName)) {
    namespace = '@lg-private';
  }

  try {
    return import(`node_modules/${namespace}/${kebabName}/stories.js`);
  } catch (err) {
    console.warn(err);
    return;
  }
}
