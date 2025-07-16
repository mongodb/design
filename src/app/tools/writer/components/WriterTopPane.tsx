import { css } from "@emotion/css";
import { palette } from "@leafygreen-ui/palette";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { spacing } from "@leafygreen-ui/tokens";

import Notch from "./Notch";

const notchStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% - 22px); // Magic number, for some reason calc(100% - 1px) doesn't work
  transform: rotate(90deg);
  margin: 0 auto;
	pointer-events: none;
`;

interface TopPaneProps {
  className?: string;
  children?: React.ReactNode;
}

export default function topPane({ children }: TopPaneProps) {
  const { theme } = useDarkMode();
  const borderColor = theme === "dark" ? palette.gray.dark2 : palette.gray.light2;

  const fullBleedSpacing = spacing[1000]; // 40px

  const topPaneStyles = css`
    min-width: 66vw;
    height: 100%;
    position: relative;
    border-bottom: 1px solid ${borderColor};
    display: flex;
    align-items: stretch;
    
    // Negative margin + added padding to make border full-bleed
    padding: 0 ${fullBleedSpacing}px;
    margin-left: -${fullBleedSpacing}px;
    margin-right: -${fullBleedSpacing}px;
  `;

  return (
    <section className={topPaneStyles}>
      <Notch className={notchStyles} />
      {children}
    </section>
  );
}
