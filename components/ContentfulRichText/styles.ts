import { css } from '@emotion/react';

export const GlobalStyles = css`
  margin-bottom: 40px;

  & li {
    margin: 24px 0;
    & > * {
      margin: 0;
    }
  }

  & button {
    margin: 0; // remove default Safari margin
  }
`;

export const ListItemStyles = css`
  margin: 24px 0;
  & > * {
    margin: 0;
  }
`;

export const SubtitleStyles = css`
  ${GlobalStyles};
  margin-bottom: 16px;
`