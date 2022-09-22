import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { getComponent } from 'utils/getContentfulResources';
import { LiveExample } from 'components/pages/example/LiveExample';
import { getTSDoc } from 'utils/_getComponentResources';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

const ComponentExample = ({ component, tsDoc }) => {
  return (
    <LiveExample
      componentName={component.fields.name}
      tsDoc={JSON.parse(tsDoc) as Array<CustomComponentDoc>}
    />
  );
};

ComponentExample.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.component.fields}>
      {page}
    </ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export const getStaticProps = async ({ params }) => {
  const { componentName } = params;
  const tsDoc = await getTSDoc(componentName);

  return {
    props: {
      component: await getComponent(componentName), // this is in kebabCase
      tsDoc: JSON.stringify(tsDoc),
    },
  };
};

export default ComponentExample;
