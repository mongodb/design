import { css } from '@emotion/css';

import { ContentstackRichText } from '@/components/content-stack';
import { fetchComponent } from '@/utils/ContentStack/getContentstackResources';
import { DesignDocsContent } from './client';

export default async function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
  const component = await fetchComponent(componentName, {
    includeContent: true,
  });

  return (
    <div
      className={css`
        max-width: 700px; // TODO: Make this responsive
      `}
    >
      <DesignDocsContent content={component?.designguidelines} />
    </div>
  );
}
