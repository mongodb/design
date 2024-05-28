import { css } from '@emotion/css';
import startCase from 'lodash/startCase';

import { ContentstackRichText } from '@/components/content-stack';
import { getContentPage } from '@/utils/ContentStack/getContentstackResources';

export default async function ContentPage({
  params: { contentPage: contentPageName },
}: {
  params: { contentPage: string };
}) {
  const contentPage = await getContentPage(startCase(contentPageName));

  return (
    <div
      className={css`
        max-width: 700px; // TODO: Make this responsive
      `}
    >
      <ContentstackRichText content={contentPage?.content} />
    </div>
  );
}
