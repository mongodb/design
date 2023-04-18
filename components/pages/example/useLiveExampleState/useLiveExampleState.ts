import { Dispatch, useEffect, useReducer } from 'react';
import { cloneDeep, kebabCase, merge } from 'lodash';
import { isUndefined } from 'lodash';
import { getComponentStories, ModuleType } from 'utils/getComponentStories';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

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

    case LiveExampleActionType.PARSE: {
      const expectedContextProps = [
        'state',
        'meta',
        'StoryFn',
        'componentName',
        'tsDoc',
      ] as Array<keyof LiveExampleContext>;

      // Set 'state' to 'parsing'
      ctx.state = 'parsing';
      ctx.meta = action.meta;
      ctx.StoryFn = action.StoryFn;

      // Assert that context has the expected props
      if (assertContext(ctx, expectedContextProps)) {
        const knobsArray = getKnobsArray({
          componentName: ctx.componentName,
          tsDoc: ctx.tsDoc,
          meta: ctx.meta,
          StoryFn: ctx.StoryFn,
        });

        const knobValues = getInitialKnobValues(
          knobsArray,
          ctx.meta,
          ctx.StoryFn,
        );

        ctx.state = 'ready';
        ctx.knobValues = knobValues;
      } else {
        // TODO: Something went wrong
        ctx.state = 'error';
      }
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

  return ctx;
};

export function useLiveExampleState(
  componentName?: string,
  tsDoc?: Array<CustomComponentDoc> | null,
) {
  const initialState = merge(
    { componentName, tsDoc },
    defaultLiveExampleContext,
  );
  const [state, dispatch] = useReducer(liveExampleStateReducer, initialState);

  // Updates the value of a knob
  const updateKnobValue = (propName: string, newValue: any) => {
    const value = matchTypes(state.knobValues?.[propName], newValue);
    dispatch({
      type: LiveExampleActionType.UPDATE,
      propName,
      newValue: value,
    });
  };

  const reset = (componentName: string, tsDoc: Array<CustomComponentDoc>) => {
    dispatch({
      type: LiveExampleActionType.RESET,
      componentName,
      tsDoc,
    });

    getComponentStories(kebabCase(componentName))
      // .then dispatch({'PARSE', meta, StoryFn})
      .then(module => {
        if (module) {
          parse(module);
          // const { default: meta, ...stories } = module;
          // const StoryFn = getDefaultStoryFn(meta, stories);

          // dispatch({
          //   type: LiveExampleActionType.PARSE,
          //   meta,
          //   StoryFn,
          // });
        } else {
          dispatch({
            type: LiveExampleActionType.NOT_FOUND,
            componentName,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: LiveExampleActionType.NOT_FOUND,
          componentName,
        });
      });
  };

  const parse = (module: ModuleType) => {
    const { default: meta, ...stories } = module;
    const StoryFn = getDefaultStoryFn(meta, stories);

    dispatch({
      type: LiveExampleActionType.PARSE,
      meta,
      StoryFn,
    });
  };

  const notFound = (componentName: string) => {
    dispatch({
      type: LiveExampleActionType.NOT_FOUND,
      componentName,
    });
  };

  return {
    state,
    updateKnobValue,
    reset,
    parse,
    notFound,
  };
}
