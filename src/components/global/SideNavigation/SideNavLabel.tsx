import { css } from '@emotion/css';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

export function SideNavLabel({
  label,
  glyph,
}: {
  label: string;
  glyph?: React.ReactNode;
}) {
  const { darkMode } = useDarkMode();

  return (
    <h4
      className={css`
        color: ${darkMode ? palette.green.light1 : palette.green.dark2};
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 0;
        padding: ${spacing[400]}px ${spacing[400]}px ${spacing[200]}px;
        display: flex;
        align-items: center;
      `}
    >
      {glyph}
      {label.split('-').join(' ')}
    </h4>
  );
}
