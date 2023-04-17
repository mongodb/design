import { ComponentStoryFn, Meta } from '@storybook/react';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { KnobType } from '../types';

export type LiveExampleState =
  | 'idle'
  | 'loading'
  | 'parsing'
  | 'ready'
  | 'error'
  | 'not_found';

export enum LiveExampleActionType {
  LOAD = 'LOAD',
  PARSE = 'PARSE',
  READY = 'READY',
  ERROR = 'ERROR',
  RESET = 'RESET',
  UPDATE = 'UPDATE',
}

export interface LiveExampleContext {
  state: LiveExampleState;
  componentName?: string;
  tsDoc?: Array<CustomComponentDoc> | null;
  meta?: Meta<any>;
  StoryFn?: ComponentStoryFn<any>;
  knobValues?: { [arg: string]: any };
  knobsArray?: Array<KnobType>;
  storyCode?: string;
}

export type LiveExampleAction =
  | {
      type: LiveExampleActionType.LOAD;
      componentName: string;
    }
  | {
      type: LiveExampleActionType.PARSE;
    }
  | {
      type: LiveExampleActionType.READY;
    }
  | {
      type: LiveExampleActionType.RESET;
      componentName: string;
    }
  | {
      type: LiveExampleActionType.UPDATE;
      propName: string;
      newValue: any;
    }
  | {
      type: LiveExampleActionType.ERROR;
    };
