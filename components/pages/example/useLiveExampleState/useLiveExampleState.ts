import { useReducer } from 'react';
import { kebabCase, merge } from 'lodash';
import { cloneDeep } from 'lodash';
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
  LiveExampleState,
} from './LiveExampleState.types';
import { assertContext } from './utils';

export const defaultLiveExampleContext: LiveExampleContext = {
  state: 'loading',
  componentName: undefined,
  tsDoc: undefined,
  meta: undefined,
  StoryFn: undefined,
  knobValues: undefined,
  knobsArray: undefined,
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

    case LiveExampleActionType.READY: {
      ctx.state = 'ready';
      ctx.meta = action.meta;
      ctx.StoryFn = action.StoryFn;
      ctx.knobValues = action.knobValues;
      ctx.knobsArray = action.knobsArray;

      break;
    }

    case LiveExampleActionType.UPDATE: {
      if (ctx.knobValues) {
        ctx.knobValues[action.propName] = action.newValue;
        break;
      }

      console.error(
        `Error setting ${action.propName}. \`knobValues\` does not exist on page context`,
      );
      break;
    }

    case LiveExampleActionType.ERROR: {
      // set 'state' to error
      console.error('LiveExample error: ', action.message);
      ctx.state = 'error';

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
  return cloneDeep(ctx);
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
  function updateKnobValue(propName: string, newValue: any) {
    const value = matchTypes(context.knobValues?.[propName], newValue);

    dispatch({
      type: LiveExampleActionType.UPDATE,
      propName,
      newValue: value,
    });
  }

  /** Reset the live example */
  function RESET(componentName: string, tsDoc: Array<CustomComponentDoc>) {
    dispatch({
      type: LiveExampleActionType.RESET,
      componentName,
      tsDoc,
    });
  }

  function ERROR(message: string) {
    dispatch({
      type: LiveExampleActionType.ERROR,
      message,
    });
  }

  /** Returns whether context.state matches the provided state */
  function isState(state: LiveExampleState) {
    return context.state === state;
  }

  /**
   * Parses the story module
   * @internal
   */
  function parse(module: ModuleType) {
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
      ERROR('');
    }
  }

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
    ERROR,
    isState,
  };
}
