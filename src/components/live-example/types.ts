import React from 'react';
import { Meta } from '@storybook/react';

export interface StoryData {
  LiveExample: React.ReactElement;
  meta: Meta;
}

export type KnobProps = {
  [key: string]: { [key: string]: any };
};

export type ComponentProps = { [key: string]: any };

export type Knobs =
  | 'string'
  | 'text'
  | 'number'
  | 'range'
  | 'date'
  | 'boolean'
  | 'array'
  | 'enum'
  | 'select'
  | 'radio'
  | 'none';
