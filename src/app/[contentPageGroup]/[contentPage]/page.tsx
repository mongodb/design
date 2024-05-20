"use client";

import { css } from "@emotion/css";
import startCase from "lodash/startCase";
import { useEffect, useState } from "react";

import { ContentstackRichText } from "@/components/content-stack";
import { getContentPage } from "@/utils/ContentStack/getContentstackResources";
import { ContentPage as ContentPageType } from "@/utils/ContentStack/types";

export default function ContentPage({
  params: { contentPage: contentPageName },
}: {
  params: { contentPage: string };
}) {
  const [contentPage, setContentPage] = useState<ContentPageType>();

  useEffect(() => {
    (async function () {
      const contentPageObj = await getContentPage(startCase(contentPageName));
      setContentPage(contentPageObj);
    })();
  }, [contentPageName]);

  return (
    <div
      className={css`
        max-width: 1000px; // TODO: Make this responsive
      `}
    >
      <ContentstackRichText content={contentPage?.content} />
    </div>
  );
};
