import CheckmarkWithCircleIcon from '@leafygreen-ui/icon/dist/CheckmarkWithCircle';
import ImportantWithCircleIcon from '@leafygreen-ui/icon/dist/ImportantWithCircle';
import InfoWithCircleIcon from '@leafygreen-ui/icon/dist/InfoWithCircle';
import XWithCircle from '@leafygreen-ui/icon/dist/XWithCircle';
import { palette } from '@leafygreen-ui/palette';

import { Variant } from './types';

export const Icons: Record<Variant, React.ComponentType<any>> = {
  [Variant.Info]: InfoWithCircleIcon,
  [Variant.Caution]: ImportantWithCircleIcon,
  [Variant.Dont]: XWithCircle,
  [Variant.Do]: CheckmarkWithCircleIcon,
};

export const BorderColors: Record<Variant, string> = {
  [Variant.Info]: palette.blue.base,
  [Variant.Caution]: palette.yellow.base,
  [Variant.Dont]: palette.red.base,
  [Variant.Do]: palette.green.dark1,
};

export const IconColors: Record<Variant, string> = {
  [Variant.Info]: palette.blue.base,
  [Variant.Caution]: palette.yellow.dark2,
  [Variant.Dont]: palette.red.base,
  [Variant.Do]: palette.green.dark1,
};

export const TextColors: Record<Variant, string> = {
  [Variant.Info]: palette.blue.dark2,
  [Variant.Caution]: palette.yellow.dark2,
  [Variant.Dont]: palette.red.base,
  [Variant.Do]: palette.green.dark2,
};

export const VariantHeaders: Record<Variant, string> = {
  [Variant.Info]: 'Info',
  [Variant.Caution]: 'Use with caution',
  [Variant.Dont]: "Don't",
  [Variant.Do]: 'Do',
};
