import { fetchTSDocs, fetchChangelog } from './server';
import { CodeDocsContent } from './client';
import { parseComponentPropsFromTSDocs } from './utils';
import { Component, mappedTitles, Pattern, type AllComponents } from '@/utils';

export default async function Page({
  params,
}: {
  params: { component: AllComponents };
}) {
  const componentName = params.component;
  const mappedComponentName = mappedTitles[componentName] ?? componentName;
  const tsDocs = await fetchTSDocs(mappedComponentName as AllComponents);
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
