import { PropItem } from 'react-docgen-typescript';
import { SBType, SBScalarType } from '@storybook/csf';
import { ComponentStoryFn, Meta } from '@storybook/react';

export type TypeString =
  | SBScalarType['name']
  | SBType['name']
  | 'text'
  | 'select'
  | 'range'
  | 'radio';

/**
 * Sources of prop metadata. Includes Storybook and TSDoc
 */
export interface MetadataSources {
  meta: Meta<any>;
  StoryFn: ComponentStoryFn<any>;
  TSDocProp: PropItem;
}

/**
 * A custom type based on TSDoc PropItem
 */
export type KnobType = PropItem & {
  controlType: TypeString;
  /**
   * For types with options. Set to an empty array for irrelevant types
   */
  options: Array<string>;
};

export interface LiveExampleState {
  meta?: Meta<any>;
  knobValues?: { [arg: string]: any };
  knobsArray?: Array<KnobType>;
  StoryFn?: ComponentStoryFn<any>;
  storyCode?: string;
}