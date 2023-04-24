import { PropItem } from 'react-docgen-typescript';
import { SBScalarType, SBType } from '@storybook/csf';
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

export type KnobOptionType = string | number;

/**
 * A custom type based on TSDoc PropItem
 */
export type KnobType = PropItem & {
  controlType: TypeString;
  /**
   * For types with options. Set to an empty array for irrelevant types
   */
  options: Array<KnobOptionType>;

  /**
   * Any other args to pass into the knobs
   */
  args?: {
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    [key: string]: any;
  };
};
