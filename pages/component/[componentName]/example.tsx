import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import { LiveExample } from 'components/pages/example/LiveExample';
import { getStaticComponentPaths } from 'utils/ContentStack/getStaticComponent';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { getTSDoc } from 'utils/_getComponentResources';
import { CustomComponentDoc, findComponentDoc } from 'utils/tsdoc.utils';
import { ComponentPageMeta } from 'utils/ContentStack/types';

interface ExamplePageProps {
  componentName: string;
  component?: ComponentPageMeta;
  componentDoc?: CustomComponentDoc;
}

const ComponentExample = ({
  componentName,
  componentDoc,
}: ExamplePageProps) => {
  return (
    <LiveExample componentName={componentName} componentDoc={componentDoc} />
  );
};

ComponentExample.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout component={page.props.component}>{page}</ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export const getStaticProps = async ({
  params,
}): Promise<{ props: ExamplePageProps }> => {
  const { componentName } = params;
  const component = await getComponent(componentName, {
    includeContent: false,
  });

  // Find the TSDoc object only for the primary component
  const componentDoc = findComponentDoc(
    componentName,
    await getTSDoc(componentName),
  );

  return {
    props: {
      componentName,
      component,
      componentDoc,
    },
  };
};

export default ComponentExample;
