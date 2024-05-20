import React from "react";
import { css } from "@emotion/css";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { color } from "@leafygreen-ui/tokens";

export const ImageContainer = ({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient: string;
}) => {
  const { theme } = useDarkMode();

  return (
    <div
      className={css`
        background: ${color[theme].background.secondary.default};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: none;
        margin-bottom: 10px;
        position: relative;
        overflow: hidden;
        > img {
          max-width: 100%;
        }
        &::after {
          content: "";
          position: absolute;
          height: 32px;
          width: 100%;
          bottom: 0px;
          left: 0;
          background: linear-gradient(
            to bottom,
            transparent 26px,
            ${gradient} 8px
          );
        }
      `}
    >
      {children}
    </div>
  );
};
