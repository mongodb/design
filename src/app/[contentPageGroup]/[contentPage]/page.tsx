import { getContentPage } from '@/utils/ContentStack/getContentstackResources';

import startCase from 'lodash/startCase';
import { auth } from '@/auth';
import { PrivateContent } from '@/components/global/PrivateContent';
import { ContentPage } from '@/components/content-page';

export default async function Page({
  params: { contentPage: contentPageName },
}: {
  params: { contentPage: string };
}) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const contentPage = await getContentPage(startCase(contentPageName));
  const isContentPrivate = contentPage?.is_private;
  const isPrivate = Boolean(isContentPrivate && !isLoggedIn);

  return (
    <div>
      {isPrivate ? (
        <PrivateContent />
      ) : (
        <ContentPage contentPage={contentPage} />
      )}
    </div>
  );
}
