'use client';

import { css } from '@emotion/css';

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log('🚗🚗🚗🚗');
  return (
    <div
      id="layout"
      className={css`
        max-width: 700px;
      `}
    >
      {children}
    </div>
  );
}
