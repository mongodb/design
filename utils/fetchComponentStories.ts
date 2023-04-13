import { ComponentProps, ComponentType } from 'react';
import { ComponentStoryFn, Meta } from '@storybook/react';

export type ModuleType<T extends ComponentType> = {
  default: Meta<ComponentProps<T>>;
} & {
  [key: string]: ComponentStoryFn<T>;
};

/**
 * Returns the Storybook module for a given package name
 */
export async function fetchComponentStories(
  kebabName: string,
): Promise<ModuleType<any> | undefined> {
  try {
    return import(`@leafygreen-ui/${kebabName}/stories.js`);
  } catch (err) {
    console.warn(err);
    return;
  }
}
