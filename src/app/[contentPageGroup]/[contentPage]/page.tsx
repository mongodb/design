import { getContentPage } from '@/utils/ContentStack/contentstackClient';

import startCase from 'lodash/startCase';
// import { auth } from '@/auth';
// import { PrivateContentWall } from '@/components/global';
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
      {/* {shouldRenderPrivateContentWall ? (
        <PrivateContentWall />
      ) : (
        <ContentPage contentPage={contentPage} />
      )} */}
      <ContentPage contentPage={contentPage} />
    </div>
  );
}
