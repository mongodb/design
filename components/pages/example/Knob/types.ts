import { HTMLElementProps } from '@leafygreen-ui/lib';

import { KnobOptionType, TypeString } from '../types';

export interface KnobProps extends HTMLElementProps<'input'> {
  propName: string;
  knobType: TypeString;
  knobOptions: Array<KnobOptionType>;
  value: any;
  onChange: (val: any) => void;
  darkMode?: boolean;
  [key: string]: any;
}
