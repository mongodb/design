import { getContentPageService } from '@/lib/contentStack/contentStackService';

import startCase from 'lodash/startCase';
import { ContentPage } from '@/components/content-page';

export default async function Page({
  params: { contentPage: contentPageTitleParam },
}: {
  params: { contentPage: string };
}) {
  // This can directly call the ContentStack SDK to fetch the content page since this is a server component
  const contentPage = await getContentPageService(
    startCase(contentPageTitleParam),
  );

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
