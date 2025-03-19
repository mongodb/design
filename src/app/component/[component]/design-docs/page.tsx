import { fetchComponent } from '@/utils/ContentStack/getContentstackResources';
import { DesignDocsContent } from './client';

export default async function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
  console.log('🎃', { componentName });

  const component = await fetchComponent(componentName, {
    includeContent: true,
  });

  return (
    <div>
      <DesignDocsContent content={component?.designguidelines} />
    </div>
  );
}
