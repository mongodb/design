import { fetchTSDocs, fetchChangelog } from './server';
import { CodeDocsContent } from './client';
import { parseComponentPropsFromTSDocs } from './utils';
import { getMappedComponentName, type PageTitle } from '@/utils';

export default async function Page({
  params,
}: {
  params: { component: PageTitle };
}) {
  const componentName = params.component;
  const mappedComponentName =
    getMappedComponentName[componentName] ?? componentName;

  const [tsDocs, changelog] = await Promise.all([
    fetchTSDocs(mappedComponentName as PageTitle),
    fetchChangelog(componentName),
  ]);

  const componentProps = parseComponentPropsFromTSDocs(tsDocs, componentName);

  return (
    <CodeDocsContent
      componentName={componentName}
      componentProps={componentProps}
      changelog={changelog}
    />
  );
}
