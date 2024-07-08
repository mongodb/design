import { css } from '@emotion/css';
import { spacing } from '@leafygreen-ui/tokens';

export const searchInputStyle = css`
  margin: ${spacing[400]}px ${spacing[600]}px;
`;

export const descriptionStyle = css`
  text-transform: capitalize;
`;

export const searchResultStyle = css`
  display: flex;
  align-items: center;
  gap: ${spacing[200]}px;
`;
