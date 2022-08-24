import { spacing } from '@leafygreen-ui/tokens';
import { pageContainerWidth } from 'styles/constants';
import {css} from '@leafygreen-ui/emotion'

export const tabsPadding = css`
  padding-top: ${spacing[4]}px;
`;

export const mt3 = css`
  margin-top: ${spacing[3]}px;
`;
export const maxWidth = css`
  max-width: ${pageContainerWidth.default}px;
`;
