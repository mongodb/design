import { ComponentStory, Meta } from '@storybook/react';
import { startCase } from 'lodash';

type ModuleType = {
  default: Meta<any>;
} & {
  [key: string]: ComponentStory<any>;
};

export async function getComponentStory(
  kebabName: string,
): Promise<ModuleType> {
  return import(
    `@leafygreen-ui/${kebabName}/src/${startCase(kebabName)}.story`
  );
}
