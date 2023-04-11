import { Dispatch, useReducer } from 'react';
import {cloneDeep,merge} from 'lodash';

import { LiveExampleState } from './types';

export const defaultLiveExampleState: LiveExampleState = {
  meta: undefined,
  StoryFn: undefined,
  storyCode: undefined,
  knobValues: undefined,
  knobsArray: undefined,
};

const liveExampleStateReducer = (
  state: Partial<LiveExampleState>,
  newState: Partial<LiveExampleState>,
) => {

  // Return a new object so we force a rerender
  const mergedState: LiveExampleState = merge(cloneDeep(state), cloneDeep(newState))
  return mergedState
}

export function useLiveExampleState(initialStateArg?: Partial<LiveExampleState>): [
  LiveExampleState,
  Dispatch<LiveExampleState>
] {

  const initialState = merge(initialStateArg, defaultLiveExampleState)
  const [state, setState] = useReducer(liveExampleStateReducer, initialState);

  return [
    state, setState
  ]
}