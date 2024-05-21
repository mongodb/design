import { css } from '@emotion/css';

export function SideNavList({ children }: { children: React.ReactNode }) {
  return (
    <ul
      className={css`
        margin-block-start: 0;
        margin-block-end: 0;
        padding: 0;
      `}
    >
      {children}
    </ul>
  );
}
