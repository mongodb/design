'use client';

import React, { useState } from 'react';
import { css } from '@emotion/css';
import Card from '@leafygreen-ui/card';
import Copyable from '@leafygreen-ui/copyable';
import {
  SegmentedControl,
  SegmentedControlOption,
} from '@leafygreen-ui/segmented-control';
import { spacing } from '@leafygreen-ui/tokens';
import { Subtitle } from '@leafygreen-ui/typography';

import { getScopeFromPkgName } from '@/utils/getScopeFromPkgName';
import { getMappedComponentName, type SubPath } from '@/utils';

export const InstallCard = ({ component }: { component: SubPath }) => {
  const [packageManager, setPackageManager] = useState('yarn');

  const mappedComponentName = getMappedComponentName[component] ?? component;

  return (
    <Card>
      <Subtitle
        as="h2"
        className={css`
          margin-bottom: ${spacing[400]}px;
        `}
      >
        Installation
      </Subtitle>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        `}
      >
        <SegmentedControl
          value={packageManager}
          onChange={setPackageManager}
          aria-controls="install-instructions"
        >
          <SegmentedControlOption value="yarn">yarn</SegmentedControlOption>
          <SegmentedControlOption value="npm">npm</SegmentedControlOption>
        </SegmentedControl>

        <Copyable
          id="install-instructions"
          className={css`
            margin: unset;
            width: unset;
          `}
        >
          {packageManager === 'yarn'
            ? `yarn add ${getScopeFromPkgName(mappedComponentName)}/${mappedComponentName}`
            : `npm i ${getScopeFromPkgName(mappedComponentName)}/${mappedComponentName}`}
        </Copyable>
      </div>
    </Card>
  );
};
