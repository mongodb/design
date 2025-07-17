import { getContentPage } from '@/lib/contentStackService';

import startCase from 'lodash/startCase';
import { ContentPage } from '@/components/content-page';

export default async function Page({
  params: { contentPage: contentPageTitleParam },
}: {
  params: { contentPage: string };
}) {
  const contentPage = await getContentPage(startCase(contentPageTitleParam));

  // const isLoggedIn = !!session?.user;
  // const isContentPrivate = contentPage?.is_private;
  // const shouldRenderPrivateContentWall = Boolean(
  //   isContentPrivate && !isLoggedIn,
  // );

  return (
    <div>
      <ContentPage contentPage={contentPage} />
    </div>
  );
}
