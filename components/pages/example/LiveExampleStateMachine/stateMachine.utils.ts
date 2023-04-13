import { isUndefined } from 'lodash';

import { LiveExampleStateContext } from './stateMachine.types';

export function isContextDefined(
  context: Partial<LiveExampleStateContext>,
  keys: Array<keyof LiveExampleStateContext> = [
    'componentName',
    'meta',
    'StoryFn',
  ],
): context is Required<LiveExampleStateContext> {
  return keys.every(key => !isUndefined(context?.[key]));
}
