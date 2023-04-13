import { ComponentStoryFn, Meta } from '@storybook/react';
import { assign, EventObject, TransitionConfig } from 'xstate';

export interface LiveExampleStateContext {
  componentName?: string;
  meta?: Meta<any>;
  StoryFn?: ComponentStoryFn<any>;
}
interface ResetEvent extends EventObject {
  type: 'RESET';
  componentName: string;
}
interface ErrorEvent extends EventObject {
  type: 'ERROR';
  err: any;
}

export const RESET: TransitionConfig<
  LiveExampleStateContext,
  ResetEvent,
  LiveExampleEvents
> = {
  target: 'init',
  actions: assign({
    componentName: (ctx, evt) => evt.componentName ?? ctx.componentName,
    meta: undefined,
    StoryFn: undefined,
  }),
};

export type LiveExampleEvents = ResetEvent | ErrorEvent | { type: 'PARSED' };
