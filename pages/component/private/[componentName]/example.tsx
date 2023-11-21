import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';

import { LiveExample } from 'components/pages/example/LiveExample';
import Unauthorized from 'components/Unauthorized';

import { ExamplePageProps } from '../../[componentName]/example';

const ComponentExample = ({ componentName, tsDoc }: ExamplePageProps) => {
  const { data: session } = useSession();

  if (!session) {
    return <Unauthorized />;
  }

  return <LiveExample componentName={componentName} tsDoc={tsDoc} />;
};

ComponentExample.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout
      componentName={page.props.componentName}
      component={page.props.component}
    >
      {page}
    </ComponentLayout>
  );
};

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );
  const { componentName } = context.params;
  const {
    props: { tsDoc },
  } = await getDependencyDocumentation(componentName);
  const component = session
    ? await getComponent(componentName, {
        includeContent: false,
      })
    : null;

  return {
    props: {
      componentName,
      component,
      tsDoc: session ? tsDoc : null,
    },
  };
}

export default ComponentExample;
