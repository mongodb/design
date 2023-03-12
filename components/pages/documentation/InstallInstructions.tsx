import { useState } from 'react';

import Card from '@leafygreen-ui/card';
import Copyable from '@leafygreen-ui/copyable';
import { css, cx } from '@leafygreen-ui/emotion';
import { useViewportSize } from '@leafygreen-ui/hooks';
import {
  SegmentedControl,
  SegmentedControlOption,
} from '@leafygreen-ui/segmented-control';
import { breakpoints, spacing } from '@leafygreen-ui/tokens';
import { Subtitle } from '@leafygreen-ui/typography';

const topAlignment = css`
  margin-top: ${spacing[4]}px;
  padding-top: ${spacing[3]}px;
  margin-bottom: ${spacing[3]}px;
`;

const cardStyle = css`
  min-height: 106px;
  padding: ${spacing[3]}px ${spacing[4]}px;
`;

const subtitlePadding = css`
  padding-bottom: ${spacing[3]}px;
`;

export const InstallInstructions = ({ componentKebabCaseName }) => {
  const viewport = useViewportSize();
  const isMobile = viewport?.width
    ? viewport?.width < breakpoints.Tablet
    : false;

  const [packageMgr, setPackageMgr] = useState('yarn');

  return (
    <div
      className={css`
        display: flex;
        gap: ${spacing[3]}px;
        flex-direction: ${isMobile ? 'column' : 'row'};
      `}
    >
      <Card className={cx(topAlignment, cardStyle)}>
        <Subtitle as="h2" className={subtitlePadding}>
          Installation
        </Subtitle>
        <div
          className={css`
            display: flex;
            gap: ${spacing[2]}px;
          `}
        >
          <SegmentedControl
            value={packageMgr}
            onChange={setPackageMgr}
            aria-controls="install-instructions"
          >
            <SegmentedControlOption value="yarn">yarn</SegmentedControlOption>
            <SegmentedControlOption value="npm">npm</SegmentedControlOption>
          </SegmentedControl>

          <Copyable
            id="install-instructions"
            className={css`
              margin: unset;
            `}
          >
            {packageMgr === 'yarn'
              ? `yarn add @leafygreen-ui/${componentKebabCaseName}`
              : `npm i @leafygreen-ui/${componentKebabCaseName}`}
          </Copyable>
        </div>
      </Card>
    </div>
  );
};
