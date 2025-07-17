import {
  fetchComponent,
  getComponents,
} from '@/utils/ContentStack/contentstackClient';
import { DesignDocsContent } from './client';

export default async function Page({
  params: { component: componentName },
}: {
  params: { component: string };
}) {
  const components = await getComponents({ includeContent: false });

  const component = components.find(
    component => component.title === componentName,
  );

  // check if the component is private
  const isComponentPrivate = component?.private;

  if (isComponentPrivate) return;

  const componentEntry = await fetchComponent(componentName, {
    includeContent: true,
  });

  return (
    <div>
      <DesignDocsContent content={componentEntry?.designguidelines} />
    </div>
  );
}
