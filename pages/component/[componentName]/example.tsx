import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { getTSDoc } from 'utils/_getComponentResources';
import { getComponent } from 'utils/getContentstackResources';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { LiveExample } from 'components/pages/example/LiveExample';

const ComponentExample = ({
  componentName,
  tsDoc,
}: {
  componentName: string;
  tsDoc: Array<CustomComponentDoc>;
}) => {
  return <LiveExample componentName={componentName} tsDoc={tsDoc} />;
};

ComponentExample.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout component={page.props.component}>{page}</ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export const getStaticProps = async ({ params }) => {
  const { componentName } = params;
  const component = await getComponent(componentName);
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
