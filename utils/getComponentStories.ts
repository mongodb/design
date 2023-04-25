import { ComponentStoryFn, Meta } from '@storybook/react';

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
  try {
    return import(`@leafygreen-ui/${kebabName}/stories.js`);
  } catch (err) {
    console.warn(err);
    return;
  }
}
