import { css } from "@emotion/css";

export function StyledList({ children }: { children: React.ReactNode }) {
  return (
    <ol
      className={css`
        list-style-type: none;
        padding-inline-start: 10px;
      `}
    >
      {children}
    </ol>
  );
}
