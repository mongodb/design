'use client';

import { css } from '@emotion/css';

import { ContentStackRichText } from '@/components/content-stack';
import useComponentFields from '@/hooks/useComponentFields';

export default function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
  const component = useComponentFields({ componentName, includeContent: true });

  return (
    <div
      className={css`
        max-width: 700px; // TODO: Make this responsive
      `}
    >
      <ContentStackRichText content={component?.designguidelines} />
    </div>
  );
}
