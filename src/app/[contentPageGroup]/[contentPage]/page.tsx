import { ContentstackRichText } from '@/components/content-stack';
import { getContentPage } from '@/utils/ContentStack/getContentstackResources';

import { titleCase } from '@/utils';
import startCase from 'lodash/startCase';
import { auth } from '@/auth';
import { PrivateContent } from '@/components/global/PrivateContent';

export default async function ContentPage({
  params: { contentPage: contentPageName },
}: {
  params: { contentPage: string };
}) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const contentPage = await getContentPage(startCase(contentPageName));
  const contentName = contentPage?.url.split('/').filter(Boolean).pop() || '';
  const currentContent = titleCase(contentName);
  const isContentPrivate = contentPage?.is_private;
  const isPrivate = Boolean(isContentPrivate && !isLoggedIn);

  return (
    <div>
      {isPrivate ? (
        <PrivateContent />
      ) : (
        <ContentstackRichText content={contentPage?.content} />
      )}
    </div>
  );
}
