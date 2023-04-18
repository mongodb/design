import { useReducer } from 'react';
import { kebabCase, merge } from 'lodash';
import { clone } from 'lodash';
import { getComponentStories, ModuleType } from 'utils/getComponentStories';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { useAsyncEffect } from '../useAsyncEffect';
import {
  getDefaultStoryFn,
  getInitialKnobValues,
  getKnobsArray,
  matchTypes,
} from '../utils';

import {
  LiveExampleAction,
  LiveExampleActionType,
  LiveExampleContext,
} from './LiveExampleState.types';
import { assertContext } from './utils';

export const defaultLiveExampleContext: LiveExampleContext = {
  state: 'loading',
  componentName: undefined,
  tsDoc: undefined,
  meta: undefined,
  StoryFn: undefined,
  knobValues: undefined,
  // knobsArray: undefined,
};

const liveExampleStateReducer = (
  ctx: LiveExampleContext,
  action: LiveExampleAction,
): LiveExampleContext => {
  switch (action.type) {
    case LiveExampleActionType.RESET: {
      ctx = {
        ...defaultLiveExampleContext,
        state: 'loading',
        componentName: action.componentName,
        tsDoc: action.tsDoc,
      };
      break;
    }

    // case LiveExampleActionType.PARSE: {
    //   // Set 'state' to 'parsing'
    //   ctx.state = 'parsing';
    //   ctx.meta = action.meta;
    //   ctx.StoryFn = action.StoryFn;

    //   // Assert that context has the expected props
    //   if (assertContext(ctx, expectedContextProps)) {
    //     const knobsArray = getKnobsArray({
    //       componentName: ctx.componentName,
    //       tsDoc: ctx.tsDoc,
    //       meta: ctx.meta,
    //       StoryFn: ctx.StoryFn,
    //     });

    //     const knobValues = getInitialKnobValues(
    //       knobsArray,
    //       ctx.meta,
    //       ctx.StoryFn,
    //     );

    //     ctx.state = 'ready';
    //     ctx.knobValues = knobValues;
    //   } else {
    //     // TODO: Something went wrong
    //     ctx.state = 'error';
    //   }
    //   break;
    // }

    case LiveExampleActionType.READY: {
      ctx.state = 'ready';
      ctx.meta = action.meta;
      ctx.StoryFn = action.StoryFn;
      ctx.knobValues = action.knobValues;
      ctx.knobsArray = action.knobsArray;

      break;
    }

    case LiveExampleActionType.UPDATE: {
      // TODO use 'propName' & 'newValue' to update knobValues
      break;
    }

    case LiveExampleActionType.ERROR: {
      // set 'state' to error
      break;
    }

    case LiveExampleActionType.NOT_FOUND: {
      // set 'state' to not_found
      ctx = {
        ...defaultLiveExampleContext,
        state: 'not_found',
        componentName: action.componentName,
      };
      break;
    }
  }

  // Clone
  return clone(ctx);
};

export function useLiveExampleState(
  componentName: string,
  tsDoc?: Array<CustomComponentDoc> | null,
) {
  const initialState = merge(
    { componentName, tsDoc },
    defaultLiveExampleContext,
  );
  const [context, dispatch] = useReducer(liveExampleStateReducer, initialState);

  /** Update the value of a knob */
  const updateKnobValue = (propName: string, newValue: any) => {
    const value = matchTypes(context.knobValues?.[propName], newValue);
    dispatch({
      type: LiveExampleActionType.UPDATE,
      propName,
      newValue: value,
    });
  };

  /** Reset the live example */
  const RESET = (componentName: string, tsDoc: Array<CustomComponentDoc>) => {
    dispatch({
      type: LiveExampleActionType.RESET,
      componentName,
      tsDoc,
    });
  };

  /**
   * Parses the story module
   * @internal
   */
  const parse = (module: ModuleType) => {
    const { default: meta, ...stories } = module;
    const StoryFn = getDefaultStoryFn(meta, stories);

    if (assertContext(context, ['state', 'componentName', 'tsDoc'])) {
      const knobsArray = getKnobsArray({
        componentName: context.componentName,
        tsDoc: context.tsDoc,
        meta,
        StoryFn,
      });

      const knobValues = getInitialKnobValues(knobsArray, meta, StoryFn);

      dispatch({
        type: LiveExampleActionType.READY,
        meta,
        StoryFn,
        knobsArray,
        knobValues,
      });
    } else {
      dispatch({
        type: LiveExampleActionType.ERROR,
      });
    }
  };

  /**
   * When state changes to 'loading', kickoff the async call.
   * We can't do this inside `RESET` since we have no way of knowing whether
   * the component is still mounted outside this useAsyncEffect
   */
  useAsyncEffect(
    () => getComponentStories(kebabCase(componentName)),
    {
      then: module => {
        if (module) {
          parse(module);
        } else {
          dispatch({
            type: LiveExampleActionType.NOT_FOUND,
            componentName,
          });
        }
      },
      catch: err => {
        console.warn(err);
        dispatch({
          type: LiveExampleActionType.NOT_FOUND,
          componentName,
        });
      },
    },
    context.state === 'loading',
    [componentName, context.state],
  );

  return {
    context,
    updateKnobValue,
    RESET,
  };
}
