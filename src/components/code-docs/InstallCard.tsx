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

import { getNamespaceFromPkgName } from '@/utils/getNamespaceFromPkgName';

export const InstallCard = ({ component }: { component: string }) => {
  const [packageManager, setPackageManager] = useState('yarn');

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
            ? `yarn add ${getNamespaceFromPkgName(component)}/${component}`
            : `npm i ${getNamespaceFromPkgName(component)}/${component}`}
        </Copyable>
      </div>
    </Card>
  );
};
