import { useMachine } from '@xstate/react';
import { kebabCase } from 'lodash';
import { fetchComponentStories } from 'utils/fetchComponentStories';
import { assign, createMachine } from 'xstate';

import { getDefaultStory } from '../utils/getDefaultStory';

import {
  LiveExampleEvents,
  LiveExampleStateContext,
  RESET,
} from './stateMachine.types';

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
          src: ctx => fetchComponentStories(kebabCase(ctx.componentName)),
          // when the async call is done, set the machine state
          onDone: {
            target: 'loaded',
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
      // parsing: {

      //   invoke: {
      //     src: (ctx, evt) => (send) => {
      //       const knobsArray = getKnobsArray({
      //         componentName: ctx.componentName,
      //         tsDoc: ctx.tsDoc,
      //         meta: ctx.meta,
      //         StoryFn: ctx.StoryFn,
      //       });
      //     },
      //   },
      //   on: {
      //     RESET,
      //     PARSED: {
      //       target: 'loaded',
      //     },
      //     ERROR: {
      //       target: 'error',
      //     },
      //   },
      //   always: {
      //     target: 'error',
      //     cond: (ctx) => !isContextDefined(ctx)
      //   }
      // },
      loaded: {
        on: {
          RESET,
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
