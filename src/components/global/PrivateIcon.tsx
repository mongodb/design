'use client';

// @ts-expect-error
import LockIcon from '@leafygreen-ui/icon/dist/Lock';
// @ts-expect-error
import UnlockIcon from '@leafygreen-ui/icon/dist/Unlock';
import { LGGlyph } from '@leafygreen-ui/icon';

export function PrivateIcon({
  isPrivate,
  ...rest
}: LGGlyph.ComponentProps & {
  isPrivate: boolean;
}) {
  const Icon = isPrivate ? LockIcon : UnlockIcon;
  return <Icon {...rest} />;
}
