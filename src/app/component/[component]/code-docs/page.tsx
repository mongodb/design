import { fetchTSDocs, fetchChangelog } from './server';
import { CodeDocsContent } from './client';
import { parseComponentPropsFromTSDocs } from './utils';
import { findComponent, getMappedComponentName, type SubPath } from '@/utils';
import { auth } from '@/auth';

export default async function Page({
  params,
}: {
  params: { component: SubPath };
}) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const componentName = params.component;
  const mappedComponentName =
    getMappedComponentName[componentName] ?? componentName;
  const isPrivate = findComponent(componentName)?.isPrivate;

  const [tsDocs, changelog] = await Promise.all([
    fetchTSDocs(mappedComponentName),
    isPrivate ? Promise.resolve(null) : fetchChangelog(mappedComponentName),
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
