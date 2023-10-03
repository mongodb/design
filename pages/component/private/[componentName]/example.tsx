import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { ComponentPageMeta } from 'utils/ContentStack/types';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { LiveExample } from 'components/pages/example/LiveExample';

interface ExamplePageProps {
  componentName: string;
  component: ComponentPageMeta | null;
  tsDoc: Array<CustomComponentDoc> | null;
}

const ComponentExample = ({ componentName, tsDoc }: ExamplePageProps) => {
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

  return {
    props: {
      componentName,
      component: session
        ? await getComponent(componentName, {
            includeContent: false,
          })
        : undefined,
      tsDoc: session ? tsDoc : undefined,
    },
  };
}

export default ComponentExample;
