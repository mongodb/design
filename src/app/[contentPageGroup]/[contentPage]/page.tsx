import {
  fetchContentPageService,
  fetchIsContentPagePrivateService,
} from '@/app/api/contentstack/contentStackService';

import startCase from 'lodash/startCase';
import { ContentPage } from '@/components/content-page';
import { auth } from '@/app/api/auth/auth/auth';
import { NotFound, PrivateContentWall } from '@/components/global';

export default async function Page({
  params: { contentPage: contentPageTitleParam },
}: {
  params: { contentPage: string };
}) {
  const [isPrivate, session] = await Promise.all([
    fetchIsContentPagePrivateService(startCase(contentPageTitleParam)),
    auth(),
  ]);

  if (isPrivate === undefined) {
    return <NotFound />;
  }

  const isLoggedIn = !!session?.user;

  if (isPrivate && !isLoggedIn) {
    return <PrivateContentWall />;
  }

  // This can directly call the ContentStack SDK to fetch the content page since this is a server component
  const contentPage = await fetchContentPageService(
    startCase(contentPageTitleParam),
  );

  return (
    <div>
      <ContentPage contentPage={contentPage} />
    </div>
  );
}
