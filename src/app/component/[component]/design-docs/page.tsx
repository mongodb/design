import { fetchComponentService } from '@/lib/contentStack/contentStackService';
import { DesignDocsContent } from './client';

export default async function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
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
