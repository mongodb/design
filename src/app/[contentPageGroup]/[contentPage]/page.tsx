import { getContentPage } from '@/utils/ContentStack/getContentstackResources';

import startCase from 'lodash/startCase';
import { auth } from '@/auth';
import { PrivateContentWall } from '@/components/global';
import { ContentPage } from '@/components/content-page';

export default async function Page({
  params: { contentPage: contentPageTitle },
}: {
  params: { contentPage: string };
}) {
  const [session, contentPage] = await Promise.all([
    auth(),
    getContentPage(startCase(contentPageTitle)),
  ]);
  const isLoggedIn = !!session?.user;
  const isContentPrivate = contentPage?.is_private;
  const shouldRenderPrivateContentWall = Boolean(
    isContentPrivate && !isLoggedIn,
  );

  return (
    <div>
      {shouldRenderPrivateContentWall ? (
        <PrivateContentWall />
      ) : (
        <ContentPage contentPage={contentPage} />
      )}
    </div>
  );
}
