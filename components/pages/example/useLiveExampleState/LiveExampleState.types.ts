import { ComponentStoryFn, Meta } from '@storybook/react';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { KnobType } from '../types';

export type LiveExampleState = 'loading' | 'ready' | 'error' | 'not_found';

export enum LiveExampleActionType {
  PARSE = 'PARSE',
  READY = 'READY',
  ERROR = 'ERROR',
  NOT_FOUND = 'NOT_FOUND',
  RESET = 'RESET',
  UPDATE = 'UPDATE',
}

export interface LiveExampleContext {
  state: LiveExampleState;
  componentName?: string;
  tsDoc?: Array<CustomComponentDoc> | null;
  meta?: Meta<any>;
  StoryFn?: ComponentStoryFn<any> & React.FunctionComponent<any>;
  knobValues?: { [arg: string]: any };
  knobsArray?: Array<KnobType>;
  errorMessage?: string;
}

export type LiveExampleAction =
  | {
      type: LiveExampleActionType.RESET;
      componentName: string;
      tsDoc: Array<CustomComponentDoc>;
    }
  | {
      type: LiveExampleActionType.READY;
      meta: Meta<any>;
      StoryFn: ComponentStoryFn<any>;
      knobsArray: Array<KnobType>;
      knobValues?: { [arg: string]: any };
    }
  | {
      type: LiveExampleActionType.UPDATE;
      propName: string;
      newValue: any;
    }
  | {
      type: LiveExampleActionType.ERROR;
      message?: string;
    }
  | {
      type: LiveExampleActionType.NOT_FOUND;
      componentName: string;
    };