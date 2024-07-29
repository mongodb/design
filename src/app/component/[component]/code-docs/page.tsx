import { fetchTSDocs, fetchChangelog } from './server';
import { CodeDocsContent } from './client';
import { parseComponentPropsFromTSDocs } from './utils';

export default async function Page({
  params,
}: {
  params: { component: string };
}) {
  const componentName = params.component;

  const tsDocs = await fetchTSDocs(componentName);
  const componentProps = parseComponentPropsFromTSDocs(tsDocs, componentName);
  const changelog = await fetchChangelog(componentName);

  return (
    <CodeDocsContent
      componentName={componentName}
      componentProps={componentProps}
      changelog={changelog}
    />
  );
}
