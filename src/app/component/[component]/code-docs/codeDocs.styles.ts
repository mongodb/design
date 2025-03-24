import { css } from '@emotion/css';
import { breakpoints, spacing } from '@leafygreen-ui/tokens';

export const codeDocsPageStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing[800]}px;
`;

export const getCodeDocsMetaCardsStyles = (hasVersionCards = true) => css`
  ${hasVersionCards &&
  `display: grid;
  gap: ${spacing[800]}px;
  grid-template-columns: 2fr 1fr;`}

  max-width: 100%;

  @media (max-width: ${breakpoints.Tablet}px) {
    grid-template-columns: 1fr;
  }
`;
