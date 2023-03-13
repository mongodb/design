import FigmaIcon from 'components/icons/FigmaIcon';
import ReactIcon from 'components/icons/ReactIcon';

import {
  SegmentedControl,
  SegmentedControlOption,
} from '@leafygreen-ui/segmented-control';

const LogsControl = ({ setDisplayedLogs, figmaEntries, reactVersion }) => {
  return (
    <div style={{ width: '400px' }}>
      <SegmentedControl onChange={setDisplayedLogs}>
        {figmaEntries && (
          <SegmentedControlOption value="figma">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FigmaIcon />
              <span style={{ marginLeft: '4px' }}>
                Figma - v{figmaEntries[0].version}
              </span>
            </div>
          </SegmentedControlOption>
        )}
        <SegmentedControlOption value="react">
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ReactIcon />
            <span style={{ marginLeft: '4px' }}>React - v{reactVersion}</span>
          </div>
        </SegmentedControlOption>
      </SegmentedControl>
    </div>
  );
};

export default LogsControl;
