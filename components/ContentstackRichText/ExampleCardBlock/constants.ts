import ImportantWithCircleIcon from '@leafygreen-ui/icon/dist/ImportantWithCircle';
import InfoWithCircleIcon from '@leafygreen-ui/icon/dist/InfoWithCircle';
import XWithCircle from '@leafygreen-ui/icon/dist/XWithCircle';
import CheckmarkWithCircleIcon from '@leafygreen-ui/icon/dist/CheckmarkWithCircle';
import { palette } from '@leafygreen-ui/palette';
import { Variant } from './types';

export const Icons: Record<Variant, React.ComponentType<any>> = {
  [Variant.Info]: InfoWithCircleIcon,
  [Variant.Warning]: ImportantWithCircleIcon,
  [Variant.Danger]: XWithCircle,
  [Variant.Success]: CheckmarkWithCircleIcon,
};

export const BorderColors: Record<Variant, string> = {
  [Variant.Info]: palette.blue.base,
  [Variant.Warning]: palette.yellow.base,
  [Variant.Danger]: palette.red.base,
  [Variant.Success]: palette.green.dark1,
};

export const IconColors: Record<Variant, string> = {
  [Variant.Info]: palette.blue.base,
  [Variant.Warning]: palette.yellow.dark2,
  [Variant.Danger]: palette.red.base,
  [Variant.Success]: palette.green.dark1,
};

export const TextColors: Record<Variant, string> = {
  [Variant.Info]: palette.blue.dark2,
  [Variant.Warning]: palette.yellow.dark2,
  [Variant.Danger]: palette.red.base,
  [Variant.Success]: palette.green.dark2,
};
