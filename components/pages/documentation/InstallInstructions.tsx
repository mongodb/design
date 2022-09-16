import React, { useState } from 'react';
import Copyable from '@leafygreen-ui/copyable';
import { breakpoints, spacing } from '@leafygreen-ui/tokens';
import { Subtitle } from '@leafygreen-ui/typography';
import ActivityFeedIcon from '@leafygreen-ui/icon/dist/ActivityFeed';
import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import Modal from '@leafygreen-ui/modal';
import { palette } from '@leafygreen-ui/palette';
import { useViewportSize } from '@leafygreen-ui/hooks';
import { css, cx } from '@leafygreen-ui/emotion';
import {
  SegmentedControl,
  SegmentedControlOption,
} from '@leafygreen-ui/segmented-control';

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

const changelogStyles = css`
  color: ${palette.gray.dark3};
  pointer-events: none;

  & > h2 {
    padding-top: ${spacing[3]}px;
    border-top: 1px solid ${palette.gray.light2};
  }

  a {
    color: ${palette.gray.dark3};
    text-decoration: none;
  }
`;

interface VersionCardProps {
  version?: string;
  changelog: string;
  isMobile?: boolean;
}
function VersionCard({
  version,
  changelog,
  isMobile = false,
}: VersionCardProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card className={cx(topAlignment, cardStyle)}>
      <Subtitle as="h2" className={subtitlePadding}>
        Version {version}
      </Subtitle>
      <Button
        size={isMobile ? 'large' : 'default'}
        leftGlyph={<ActivityFeedIcon />}
        onClick={() => setOpenModal(curr => !curr)}
        className={cx({
          [css`
            width: 100%;
          `]: isMobile,
        })}
      >
        View Changelog
      </Button>
      <Modal
        className={css`
          z-index: 1;
        `}
        open={openModal}
        setOpen={setOpenModal}
      >
        <div
          className={changelogStyles}
          dangerouslySetInnerHTML={{ __html: changelog }}
        ></div>
      </Modal>
    </Card>
  );
}

export const InstallInstructions = ({ componentKebabCaseName, changelog }) => {
  const version = changelog?.split('h2')[1]?.replace(/[>/<]+/g, '');
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
          <SegmentedControl value={packageMgr} onChange={setPackageMgr}>
            <SegmentedControlOption value="yarn">yarn</SegmentedControlOption>
            <SegmentedControlOption value="npm">npm</SegmentedControlOption>
          </SegmentedControl>

          <Copyable
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

      <VersionCard version={version} changelog={changelog} />
    </div>
  );
};
