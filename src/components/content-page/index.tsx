'use client';

import React from 'react';
import { ContentstackRichText } from '@/components/content-stack';

import { css } from '@emotion/css';

import { ContentPage as ContentPageType } from '@/utils/ContentStack/types';

export function ContentPage({
  contentPage,
}: {
  contentPage?: ContentPageType;
}) {
  return (
    <div
      className={css`
        max-width: 700px;
      `}
    >
      <ContentstackRichText content={contentPage?.content} />
    </div>
  );
}
