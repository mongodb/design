import { isUndefined } from 'lodash';

import {
  LiveExampleActionType,
  LiveExampleContext,
  LiveExampleState,
  ReadyStateContext,
} from './LiveExampleState.types';

export function invalidActionWarning(
  state: LiveExampleState,
  action: LiveExampleActionType,
) {
  console.warn(`Invalid action ${action} from state ${state}`);
}

/** TS utility to assert that context has defined properties */
export function assertContext<P extends Array<keyof LiveExampleContext>>(
  context: Partial<LiveExampleContext>,
  properties: P,
): context is Omit<
  Required<LiveExampleContext>, // Context contains all the keys...
  Exclude<keyof LiveExampleContext, P extends Array<infer U> ? U : never> // ... except those _not_ included in the properties array
> {
  return properties.every(prop => !isUndefined(context[prop]));
}

export function isReady(
  context: Partial<LiveExampleContext>,
): context is ReadyStateContext {
  return (
    context.state === 'ready' &&
    assertContext(context, [
      'state',
      'componentName',
      'tsDoc',
      'StoryFn',
      'meta',
      'knobsArray',
      'knobValues',
    ])
  );
}

export function isState(
  state: LiveExampleState,
  context: Partial<LiveExampleContext>,
): boolean {
  return context.state === state;
}
