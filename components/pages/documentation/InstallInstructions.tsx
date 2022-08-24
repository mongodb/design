import React, { useState } from 'react';
import Copyable from '@leafygreen-ui/copyable';
import { breakpoints, spacing } from '@leafygreen-ui/tokens';
import { Body, Subtitle } from '@leafygreen-ui/typography';
import { GridContainer, GridItem } from 'components/Grid';
import { css, cx } from '@emotion/css';
import ActivityFeedIcon from '@leafygreen-ui/icon/dist/ActivityFeed';
import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import Modal from '@leafygreen-ui/modal';
import { palette } from '@leafygreen-ui/palette';
import { useViewportSize } from '@leafygreen-ui/hooks';
import { maxWidth, mt3 } from './documentationPageStyles';

interface InstallProps {
  componentKebabCaseName: string;
  version?: string;
  changelog: string;
}

const topAlignment = css`
  margin-top: ${spacing[4]}px;
  padding-top: ${spacing[3]}px;
  margin-bottom: ${spacing[3]}px;
`;

const versionCardDesktopMargin = css`
  margin-left: 20px;
`;

const mb1 = css`
  margin-bottom: ${spacing[1]}px;
`;

const copyableStyles = css`
  width: 100%;
  max-width: 400px;
`;

const mobileInstallMargin = css`
  margin-top: 50px;
  margin-bottom: ${spacing[3]}px;
`;

const versionCard = css`
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
    <Card className={cx(topAlignment, versionCard)}>
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

VersionCard.displayName = 'VersionCard';

function MobileInstall({
  componentKebabCaseName,
  version,
  changelog,
}: InstallProps) {
  return (
    <GridContainer>
      <GridItem sm={12}>
        <div className={mobileInstallMargin}>
          <Subtitle as="h2">Installation</Subtitle>
          <Body weight="medium" className={mt3}>
            Yarn
          </Body>
          <Copyable
            className={copyableStyles}
          >{`yarn add @leafygreen-ui/${componentKebabCaseName}`}</Copyable>
          <Body weight="medium" className={mt3}>
            NPM
          </Body>
          <Copyable
            className={copyableStyles}
          >{`npm install @leafygreen-ui/${componentKebabCaseName}`}</Copyable>
        </div>
      </GridItem>
      <GridItem sm={12}>
        <div>
          <VersionCard version={version} changelog={changelog} isMobile />
        </div>
      </GridItem>
    </GridContainer>
  );
}

MobileInstall.displayName = 'MobileInstall';

function DesktopInstall({
  componentKebabCaseName,
  changelog,
  version,
}: InstallProps) {
  return (
    <>
      <GridContainer
        justify="space-between"
        align="flex-start"
        className={maxWidth}
      >
        <GridItem md={7} lg={7}>
          <div className={topAlignment}>
            <Subtitle
              as="h2"
              className={css`
                margin-bottom: ${spacing[3]}px;
              `}
            >
              Installation
            </Subtitle>
            <Body weight="medium" className={mb1}>
              Yarn
            </Body>
            <Copyable>{`yarn add @leafygreen-ui/${componentKebabCaseName}`}</Copyable>
          </div>
        </GridItem>
        <GridItem md={5} lg={5}>
          <div className={versionCardDesktopMargin}>
            <VersionCard changelog={changelog} version={version} />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer align="flex-start" justify="flex-start">
        <GridItem md={7} lg={7}>
          <Body weight="medium" className={mb1}>
            NPM
          </Body>
          <Copyable>{`npm install @leafygreen-ui/${componentKebabCaseName}`}</Copyable>
        </GridItem>
      </GridContainer>
    </>
  );
}

DesktopInstall.displayName = 'DesktopInstall';

export const InstallInstructions = ({ componentKebabCaseName, changelog }) => {
  const version = changelog?.split('h2')[1]?.replace(/[>/<]+/g, '');
  const viewport = useViewportSize();
  const isMobile = viewport?.width
    ? viewport?.width < breakpoints.Tablet
    : false;

  return isMobile ? (
    <MobileInstall
      componentKebabCaseName={componentKebabCaseName}
      version={version}
      changelog={changelog}
    />
  ) : (
    <DesktopInstall
      componentKebabCaseName={componentKebabCaseName}
      version={version}
      changelog={changelog}
    />
  );
};
