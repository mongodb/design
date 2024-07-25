"use client";

import React from "react";
import { css } from "@emotion/css";
import { spacing } from "@leafygreen-ui/tokens";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={css`
        margin-left: ${spacing[800]}px;
        margin-right: ${spacing[1200]}px;
        min-height: 100vh;
      `}
    >
      {children}
    </div>
  );
}
