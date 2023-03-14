import FigmaIcon from 'components/icons/FigmaIcon';
import ReactIcon from 'components/icons/ReactIcon';

import { css } from '@leafygreen-ui/emotion';
import {
  SegmentedControl,
  SegmentedControlOption,
} from '@leafygreen-ui/segmented-control';
import { spacing } from '@leafygreen-ui/tokens';

const controlOptionStyles = css`
  display: flex;
  align-items: center;
`;

const controlOptionTextStyles = css`
  margin-left: ${spacing[1]}px;
`;

const LogsControl = ({ setDisplayedLogs, figmaEntries, reactVersion }) => {
  return (
    <div style={{ width: '400px' }}>
      <SegmentedControl onChange={setDisplayedLogs}>
        {figmaEntries && (
          <SegmentedControlOption value="figma">
            <div className={controlOptionStyles}>
              <FigmaIcon />
              <span className={controlOptionTextStyles}>
                Figma - v{figmaEntries[0].version}
              </span>
            </div>
          </SegmentedControlOption>
        )}
        <SegmentedControlOption value="react">
          <div className={controlOptionStyles}>
            <ReactIcon />
            <span className={controlOptionTextStyles}>
              React - v{reactVersion}
            </span>
          </div>
        </SegmentedControlOption>
      </SegmentedControl>
    </div>
  );
};

export default LogsControl;
