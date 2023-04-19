import { cloneDeep } from 'lodash';

import {
  LiveExampleAction,
  LiveExampleActionType,
  LiveExampleContext,
} from './LiveExampleState.types';
import { defaultLiveExampleContext } from '.';

export const liveExampleStateReducer = (
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
