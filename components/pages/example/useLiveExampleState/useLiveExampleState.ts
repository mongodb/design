import { useReducer } from 'react';
import { kebabCase, merge } from 'lodash';
import pascalcase from 'pascalcase';
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
  LiveExampleActionType,
  LiveExampleState,
  LiveExampleStateReturnValue,
} from './LiveExampleState.types';
import { liveExampleStateReducer } from './LiveExampleStateReducer';
import { assertContext, defaultLiveExampleContext } from './utils';

export function useLiveExampleState(
  componentName: string,
  tsDoc?: Array<CustomComponentDoc> | null,
): LiveExampleStateReturnValue {
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
  function resetContext(
    componentName: string,
    tsDoc: Array<CustomComponentDoc>,
  ) {
    dispatch({
      type: LiveExampleActionType.RESET,
      componentName,
      tsDoc,
    });
  }

  /** Log an error */
  function setErrorState(message: string) {
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
    StoryFn.displayName = pascalcase(componentName) + 'Story';

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
      setErrorState('Error parsing live example');
    }
  }

  /**
   * When state changes to 'loading', kickoff the async call.
   * We can't do this inside `resetContext` since we have no way of knowing whether
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
    resetContext,
    setErrorState,
    isState,
  };
}
