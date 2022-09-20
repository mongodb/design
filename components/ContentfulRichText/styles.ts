import { css } from '@emotion/react';

export const GlobalStyles = css`
  &:not(:first-child) {
    margin-top: 40px;
  }

  & li {
    margin: 24px 0;
    & > * {
      margin: 0;
    }
  }

  & button {
    margin: 0; // remove default Safari margin
  }

  &:is(p) + & {
    margin-top: 16px;
  }

  &:is(p) > a {
    line-height: 28px;
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
  margin-top: 8px;
`