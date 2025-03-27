import { fetchComponent } from '@/utils/ContentStack/getContentstackResources';
import { DesignDocsContent } from './client';

export default async function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
  const component = await fetchComponent(componentName, {
    includeContent: true,
  });

  console.log('🏈', { component });

  return (
    <div>
      <DesignDocsContent content={component?.designguidelines} />
    </div>
  );
}
