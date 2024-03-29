import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { getTSDoc } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { getStaticComponentPaths } from 'utils/ContentStack/getStaticComponent';
import { ComponentPageMeta } from 'utils/ContentStack/types';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { LiveExample } from 'components/pages/example/LiveExample';

export interface ExamplePageProps {
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

export const getStaticPaths = getStaticComponentPaths;

export const getStaticProps = async ({
  params,
}): Promise<{ props: ExamplePageProps }> => {
  const { componentName } = params;
  const component: ComponentPageMeta | null =
    (await getComponent(componentName, {
      includeContent: false,
    })) ?? null;

  const tsDoc = await getTSDoc(componentName);

  return {
    props: {
      componentName,
      component,
      tsDoc,
    },
  };
};

export default ComponentExample;
