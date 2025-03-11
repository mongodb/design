'use client';

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
// @ts-expect-error
import ActivityFeed from '@leafygreen-ui/icon/dist/ActivityFeed';
import Modal from '@leafygreen-ui/modal';
import { CardSkeleton } from '@leafygreen-ui/skeleton-loader';
import { spacing } from '@leafygreen-ui/tokens';
import { Subtitle } from '@leafygreen-ui/typography';
import { color } from '@leafygreen-ui/tokens';

interface VersionCardProps {
  component: string;
  changelog: string | null;
}

export const VersionCard = ({ component, changelog }: VersionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    setVersion(changelog?.split('h2')[1]?.replace(/[>/<]+/g, '') ?? null);
  }, [changelog]);

  return (
    <Card>
      <Subtitle
        className={css`
          margin-bottom: ${spacing[400]}px;
        `}
      >
        Version {version}
      </Subtitle>
      {changelog && (
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
      )}
    </Card>
  );
};
