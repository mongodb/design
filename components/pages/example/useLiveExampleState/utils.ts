import { isUndefined } from 'lodash';

import {
  LiveExampleActionType,
  LiveExampleContext,
  LiveExampleState,
} from './LiveExampleState.types';

export const defaultLiveExampleContext: LiveExampleContext = {
  state: 'loading',
  componentName: undefined,
  tsDoc: undefined,
  meta: undefined,
  StoryFn: undefined,
  knobValues: undefined,
  knobsArray: undefined,
};

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

/** TS utility to assert that context has _all_ properties defined */
export function assertCompleteContext(
  context: Partial<LiveExampleContext>,
): context is Required<LiveExampleContext> {
  return assertContext(context, [
    'state',
    'componentName',
    'tsDoc',
    'StoryFn',
    'meta',
    'knobsArray',
    'knobValues',
  ]);
}

/** TS utility that correctly types `context` when state === 'ready' */
export function isReady(
  context: Partial<LiveExampleContext>,
): context is Required<LiveExampleContext> {
  return context.state === 'ready' && assertCompleteContext(context);
}
