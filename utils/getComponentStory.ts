import { ComponentStoryFn, Meta } from '@storybook/react';
import pascalcase from 'pascalcase';

type ModuleType = {
  default: Meta<any>;
} & {
  [key: string]: ComponentStoryFn<any>;
};

export async function getComponentStory(
  kebabName: string,
): Promise<ModuleType> {
  return import(
    `@leafygreen-ui/${kebabName}/src/${pascalcase(kebabName)}.story`
  );
}
