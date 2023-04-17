import { isUndefined } from 'lodash';

import { LiveExampleStateContext } from './stateMachine.types';

export function isContextDefined(
  context: Partial<LiveExampleStateContext>,
  keys: Array<keyof LiveExampleStateContext> = [
    'componentName',
    'tsDoc',
    'meta',
    'StoryFn',
    'knobValues',
  ],
): context is Required<LiveExampleStateContext> {
  return keys.every(key => !isUndefined(context?.[key]));
}
