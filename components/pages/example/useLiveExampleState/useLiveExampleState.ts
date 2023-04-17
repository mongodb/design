import { Dispatch, useReducer } from 'react';
import { cloneDeep, merge } from 'lodash';

import { matchTypes } from '../utils';

import {
  LiveExampleAction,
  LiveExampleActionType,
  LiveExampleContext,
} from './LiveExampleState.types';
import { invalidActionWarning } from './utils';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

export const defaultLiveExampleContext: LiveExampleContext = {
  state: 'idle',
};

const liveExampleStateReducer = (
  ctx: LiveExampleContext,
  action: LiveExampleAction,
): LiveExampleContext => {
  // Return a new object so we force a rerender
  // const mergedState: LiveExampleContext = merge(
  //   cloneDeep(state),
  //   cloneDeep(newState),
  // );
  // return mergedState;

  switch (action.type) {
    case LiveExampleActionType.LOAD: {
      break;
    }

    case LiveExampleActionType.PARSE: {
      break;
    }

    case LiveExampleActionType.READY: {
      break;
    }

    case LiveExampleActionType.RESET: {
      break;
    }

    case LiveExampleActionType.UPDATE: {
      break;
    }

    case LiveExampleActionType.ERROR: {
      break;
    }
  }
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

  const reset = (componentName: string) => {
    dispatch({
      type: LiveExampleActionType.RESET,
      componentName,
    });
  };

  return {
    state,
  };
}
