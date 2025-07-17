// import { fetchComponent } from '@/utils/ContentStack/getContentstackResources';
import { fetchComponent } from '@/utils/ContentStack/contentstackClient';
import { DesignDocsContent } from './client';

export default async function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
  const component = await fetchComponent(componentName, {
    includeContent: true,
  });

  console.log('DESIGN DOC🎃🎃🎃🎃🎃', { component });

  return (
    <div>
      <DesignDocsContent content={component?.designguidelines} />
    </div>
  );
}
