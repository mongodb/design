import { isUndefined } from 'lodash';

import { LiveExampleStateContext } from './stateMachine.types';

export function isContextDefined(
  context: Partial<LiveExampleStateContext>,
  keys: Array<keyof LiveExampleStateContext> = [
    'componentName',
    'tsDoc',
    'meta',
    'StoryFn',
  ],
) {
  return keys.every(key => !isUndefined(context?.[key]));
}
