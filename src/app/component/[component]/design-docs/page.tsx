import {
  fetchComponentService,
  fetchIsComponentPrivateService,
} from '@/app/api/contentstack/contentStackService';
import { DesignDocsContent } from './client';
import { auth } from '@/app/api/auth/auth/auth';

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
    return null;
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
