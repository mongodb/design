import { ComponentStoryFn, Meta } from '@storybook/react';
import { fetchComponentStories, ModuleType } from 'utils/fetchComponentStories';
import { CustomComponentDoc } from 'utils/tsdoc.utils';
import { assign, EventObject, TransitionConfig } from 'xstate';

export interface LiveExampleStateContext {
  componentName?: string;
  // tsDoc?: Array<CustomComponentDoc> | null;
  meta?: Meta<any>;
  StoryFn?: ComponentStoryFn<any>;
  //   knobValues?: { [arg: string]: any };
  //   knobsArray?: Array<KnobType>;
  //   storyCode?: string;
}
interface ResetEvent extends EventObject {
  type: 'RESET';
  componentName: string;
  tsDoc: Array<CustomComponentDoc>;
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
