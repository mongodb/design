import { css, cx } from '@leafygreen-ui/emotion';
import { mq } from 'utils/mediaQuery';
import { spacing, breakpoints } from '@leafygreen-ui/tokens';
import { palette } from '@leafygreen-ui/palette';
import { useViewportSize } from '@leafygreen-ui/hooks';

const knobContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  ${mq({
    padding: [
      `${spacing[3]}px ${spacing[4]}px`,
      `${spacing[3]}px ${spacing[5]}px`,
    ],
  })}
`;

const mobileKnobContainerStyle = css`
  > * {
    display: block;
    margin: 8px 0;
  }

  > *:not(label) {
    width: 100%;
  }
`;

interface KnobRowProps {
  children: React.ReactNode;
  darkMode?: boolean;
  className?: string;
}

function KnobRow({ children, className, darkMode = false }: KnobRowProps) {
  const viewport = useViewportSize();
  const isTouchDevice =
    viewport !== null ? viewport.width < breakpoints.Tablet : false;

  return (
    <div
      className={cx(
        {
          [knobContainerStyle]: !isTouchDevice,
          [mobileKnobContainerStyle]: isTouchDevice,
        },
        css`
          border-top: 1px solid
            ${darkMode ? palette.gray.dark2 : palette.gray.light2};
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default KnobRow;
