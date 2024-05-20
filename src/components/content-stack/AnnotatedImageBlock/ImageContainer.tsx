import React from "react";
import { css } from "@emotion/css";
import { borderRadius, color, spacing } from "@leafygreen-ui/tokens";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";

const bottomBorderHeight = 6;

export const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useDarkMode();

  return (
    <div
      className={css`
        background: ${color[theme].background.secondary.default};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${spacing[1600] - bottomBorderHeight}px 32px ${spacing[1600]}px;
        border-radius: ${borderRadius[400]}px;
        border: none;
        margin-bottom: ${spacing[400]}px;
        position: relative;

        > img {
          max-width: 100%;
        }

        &::after {
          content: "";
          position: absolute;
          height: ${spacing[800]}px;
          width: 100%;
          bottom: 0px;
          left: 0;
          border-radius: 0 0 16px 16px;
          background: linear-gradient(
            to bottom,
            transparent ${spacing[800] - bottomBorderHeight}px,
            ${color[theme].background.secondary.default} 8px
          );
        }
      `}
    >
      {children}
    </div>
  );
};
