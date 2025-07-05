'use client';

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
// @ts-expect-error
import ActivityFeed from '@leafygreen-ui/icon/dist/ActivityFeed';
import Modal from '@leafygreen-ui/modal';
import { spacing } from '@leafygreen-ui/tokens';
import { Subtitle } from '@leafygreen-ui/typography';
import { color } from '@leafygreen-ui/tokens';
import { findComponent, getMappedComponentName, type SubPath } from '@/utils';

interface VersionCardProps {
  changelog: string | null;
  component: SubPath;
}

export const VersionCard = ({ changelog, component }: VersionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    setVersion(changelog?.split('h2')[1]?.replace(/[>/<]+/g, '') ?? null);
  }, [changelog]);

  const mappedComponentName = getMappedComponentName[component] ?? component;
  const isPrivate = findComponent(component)?.isPrivate;
  const privateChangelog = `https://github.com/10gen/leafygreen-ui-private/blob/main/packages/${mappedComponentName}/CHANGELOG.md`;

  return (
    <Card className={css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: ${spacing[400]}px;
    `}>
      {version && (
        <Subtitle>
          Version {version}
        </Subtitle>
      )}
      {changelog ? (
        <>
          <Button
            leftGlyph={<ActivityFeed />}
            onClick={() => setIsModalOpen(true)}
          >
            View&nbsp;Changelog
          </Button>
          <Modal open={isModalOpen} setOpen={setIsModalOpen}>
            <div
              className={css`
                & a {
                  color: ${color.dark.text.link.default};
                }
              `}
              dangerouslySetInnerHTML={{ __html: changelog }}
            />
          </Modal>
        </>
      ) : (
        isPrivate && (
          <>
            <Button
              leftGlyph={<ActivityFeed />}
              href={privateChangelog}
              target="_blank"
            >
              View&nbsp;Changelog
            </Button>
          </>
        )
      )}
    </Card>
  );
};
