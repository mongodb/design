import { useMachine } from '@xstate/react';
import { kebabCase } from 'lodash';
import { fetchComponentStories } from 'utils/fetchComponentStories';
import { assign, createMachine, raise } from 'xstate';

import { getInitialKnobValues, getKnobsArray, matchTypes } from '../utils';
import { getDefaultStory } from '../utils/getDefaultStory';

import {
  ErrorEvent,
  LiveExampleEvents,
  LiveExampleStateContext,
  ParsedEvent,
  RESET,
  UpdateEvent,
} from './stateMachine.types';
import { isContextDefined } from './stateMachine.utils';

export const liveExampleStateMachine = createMachine<
  LiveExampleStateContext,
  LiveExampleEvents
>(
  {
    predictableActionArguments: true,
    preserveActionOrder: true,
    id: 'LiveExample',
    initial: 'init',
    context: {},
    states: {
      /** Initial State */
      init: {
        on: {
          RESET,
        },
        always: {
          target: 'loading',
          cond: ctx => Boolean(ctx.componentName),
        },
      },
      /** Loading - automatically fetches stories */
      loading: {
        // Start up an aync call when we enter the `loading` state
        invoke: {
          // TODO: cache, or check whether we're fetching for the same component
          // TODO: set a max timeout
          src: ctx => fetchComponentStories(kebabCase(ctx.componentName)),
          // when the async call is done, set the machine state
          onDone: {
            target: 'parsing',
            actions: assign({
              meta: (_, evt) => evt.data.default,
              StoryFn: (_, evt) => getDefaultStory(evt.data),
            }),
          },
          onError: {
            target: 'error',
          },
        },
      },
      parsing: {
        entry: ctx => {
          console.log('Parsing', ctx);

          if (
            isContextDefined(ctx, ['componentName', 'tsDoc', 'meta', 'StoryFn'])
          ) {
            const knobsArray = getKnobsArray({
              componentName: ctx.componentName,
              meta: ctx.meta,
              StoryFn: ctx.StoryFn,
              tsDoc: ctx.tsDoc,
            });

            const initialKnobs = getInitialKnobValues(
              knobsArray,
              ctx.meta,
              ctx.StoryFn,
            );

            console.log({ knobsArray, initialKnobs });

            raise<LiveExampleStateContext, LiveExampleEvents>({
              type: 'PARSED',
              knobValues: initialKnobs,
            });
          } else {
            raise<LiveExampleStateContext, LiveExampleEvents>({
              type: 'ERROR',
              err: ctx,
            });
          }
        },
        on: {
          RESET,
          PARSED: {
            target: 'ready',
            actions: assign({
              knobValues: (_, evt: ParsedEvent) => evt.knobValues,
            }),
          },
          ERROR: {
            target: 'error',
            actions: (_, evt: ErrorEvent) => {
              console.error('Error in LiveExample', evt.err);
            },
          },
        },
      },
      ready: {
        on: {
          RESET,
          UPDATE: {
            actions: assign({
              knobValues: (ctx, evt: UpdateEvent) => {
                const value = matchTypes(
                  ctx.knobValues?.[evt.propName],
                  evt.newValue,
                );
                return { ...ctx.knobValues, [evt.propName]: value };
              },
            }),
          },
        },
      },
      error: {
        on: {
          RESET,
        },
      },
    },
  },
  {
    actions: {},
  },
);

export const useLiveExampleStateMachine = (
  context: Partial<LiveExampleStateContext>,
) => {
  return useMachine(liveExampleStateMachine, { context });
};
