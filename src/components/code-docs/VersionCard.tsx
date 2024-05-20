"use client";

import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Button from "@leafygreen-ui/button";
import Card from "@leafygreen-ui/card";
// @ts-expect-error
import ActivityFeed from "@leafygreen-ui/icon/dist/ActivityFeed";
import Modal from "@leafygreen-ui/modal";
import { CardSkeleton } from "@leafygreen-ui/skeleton-loader";
import { spacing } from "@leafygreen-ui/tokens";
import { Subtitle } from "@leafygreen-ui/typography";
import { color } from "@leafygreen-ui/tokens";

export const VersionCard = ({
  component,
  getChangelog,
}: {
  component: string;
  getChangelog: (arg0: string) => Promise<string | null>;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changelog, setChangelog] = useState<string | null>(null);
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    getChangelog(component)
      .then((response) => {
        setChangelog(response);
      })
      .finally(() => setIsLoading(false));
  }, [component, getChangelog]);

  useEffect(() => {
    setVersion(changelog?.split("h2")[1]?.replace(/[>/<]+/g, "") ?? null);
  }, [changelog]);

  if (isLoading) {
    return <CardSkeleton />;
  }

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
            View Changelog
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
