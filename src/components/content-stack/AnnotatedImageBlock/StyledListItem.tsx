import { css } from "@emotion/css";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { color, spacing } from "@leafygreen-ui/tokens";

export const StyledListItem = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useDarkMode();

  return (
    <li
      className={css`
        counter-increment: step-counter;
        margin-bottom: ${spacing[400]}px;
        position: relative;
        display: flex;
        align-items: flex-start;

        &::before {
          content: counter(step-counter);
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: ${color[theme].text.primary.default};
          border: 1px solid ${color[theme].border.primary.default};
          border-radius: 50%;
          flex-basis: 18px;
          flex-grow: 0;
          flex-shrink: 0;
          height: 18px;
          line-height: 18px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 1px 1px 0px ${color[theme].border.primary.default};
          margin-top: 3px;
        }
      `}
    >
      {children}
    </li>
  );
};
