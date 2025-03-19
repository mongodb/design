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

  console.log('👁️👁️👁️👁️', { contentPage });

  return (
    <div>
      <ContentstackRichText content={contentPage?.content} />
    </div>
  );
}
