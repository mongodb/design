import {
  fetchComponentService,
  fetchIsComponentPrivateService,
} from '@/lib/contentStack/contentStackService';
import { DesignDocsContent } from './client';
import { auth } from '@/auth';
import { NotFound } from '@/components/global';

export default async function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
  const [isPrivate, session] = await Promise.all([
    fetchIsComponentPrivateService(componentName),
    auth(),
  ]);

  if (isPrivate === undefined) {
    return <NotFound />;
  }

  const isLoggedIn = !!session?.user;

  if (isPrivate && !isLoggedIn) {
    return null;
  }

  // This can directly call the ContentStack SDK to fetch the content page since this is a server component
  const component = await fetchComponentService(componentName, {
    includeContent: true,
  });

  return (
    <div>
      <DesignDocsContent content={component?.designguidelines} />
    </div>
  );
}
