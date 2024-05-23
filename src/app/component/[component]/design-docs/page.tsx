import { css } from '@emotion/css';

import { ContentstackRichText } from '@/components/content-stack';
import { getComponent } from '@/utils/ContentStack/getContentstackResources';

export default async function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
  const component = await getComponent(componentName, { includeContent: true });

  return (
    <div
      className={css`
        max-width: 700px; // TODO: Make this responsive
      `}
    >
      <ContentstackRichText content={component?.designguidelines} />
    </div>
  );
}
