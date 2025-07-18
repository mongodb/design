'use client';

import { SubPath } from '@/utils';
import { titleCase } from '@/utils/titleCase';
import { useSession } from '@/hooks';

import { useContentStackContext } from '@/contexts/ContentStackContext';

import { LiveExampleContent } from './content';
import { NotFound } from '@/components/global/NotFound';

export default function Page({ params }: { params: { component: SubPath } }) {
  const { isLoggedIn } = useSession();
  const { components: componentsFromContext } = useContentStackContext();
  // canvas-header => Canvas Header
  const componentTitle = titleCase(params.component.split('-').join(' '));
  // Find component in context. This will include the data from Contentstack
  const component = componentsFromContext.find(
    component => component.title === componentTitle,
  );

  if (!component) return <NotFound />;

  const isComponentPrivate = component?.private;
  const shouldReturnNull = Boolean(isComponentPrivate && !isLoggedIn);

  if (shouldReturnNull) return null;

  return <LiveExampleContent component={params.component} />;
}
