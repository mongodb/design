import { fetchTSDocs, fetchChangelog } from './server';
import { CodeDocsContent } from './client';
import { parseComponentPropsFromTSDocs } from './utils';
import { getMappedComponentName, type PageTitle } from '@/utils';
import { auth } from '@/auth';

export default async function Page({
  params,
}: {
  params: { component: PageTitle };
}) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const componentName = params.component;
  const mappedComponentName =
    getMappedComponentName[componentName] ?? componentName;

  const tsDocs = await fetchTSDocs(mappedComponentName);
  const changelog = isLoggedIn ? await fetchChangelog(componentName) : null;

  const componentProps = parseComponentPropsFromTSDocs(tsDocs, componentName);

  return (
    <CodeDocsContent
      componentName={componentName}
      componentProps={componentProps}
      changelog={changelog}
    />
  );
}
