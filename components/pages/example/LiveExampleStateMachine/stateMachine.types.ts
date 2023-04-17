import { ComponentStoryFn, Meta } from '@storybook/react';
import { CustomComponentDoc } from 'utils/tsdoc.utils';
import { assign, EventObject, TransitionConfig } from 'xstate';

export interface LiveExampleStateContext {
  componentName?: string;
  meta?: Meta<any>;
  StoryFn?: ComponentStoryFn<any>;
  tsDoc?: Array<CustomComponentDoc> | null;
  knobValues?: Record<string, any>;
}

export interface ResetEvent extends EventObject {
  type: 'RESET';
  componentName: string;
  tsDoc: Array<CustomComponentDoc>;
}

export interface ErrorEvent extends EventObject {
  type: 'ERROR';
  err: any;
}

export interface ParsedEvent extends EventObject {
  type: 'PARSED';
  knobValues: Record<string, any>;
}

export interface UpdateEvent extends EventObject {
  type: 'UPDATE';
  propName: string;
  newValue: any;
}

export type LiveExampleEvents =
  | ResetEvent
  | ErrorEvent
  | ParsedEvent
  | UpdateEvent;

export const RESET: TransitionConfig<
  LiveExampleStateContext,
  ResetEvent,
  LiveExampleEvents
> = {
  target: 'init',
  actions: assign({
    componentName: (ctx, evt) => evt.componentName ?? ctx.componentName,
    tsDoc: (ctx, evt) => evt.tsDoc ?? ctx.tsDoc,
    meta: undefined,
    StoryFn: undefined,
    knobValues: undefined,
  }),
};
