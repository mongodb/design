import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { H2 } from '@leafygreen-ui/typography';
import { getComponent } from 'utils/getContentfulResources';
import { getTSDoc } from 'utils/_getComponentResources';
import { startCase } from 'lodash';
import { Props } from 'react-docgen-typescript';

const ComponentExample = ({ component, componentProps }) => {
  // todo: replace with Storybook generated live examples
  componentProps = JSON.parse(componentProps) as Props;

  return (
    <>
      <H2>Example {component?.fields.name}</H2>
      <code>{JSON.stringify(Object.keys(componentProps))}</code>
    </>
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

  const componentProps = tsDoc?.find(
    doc => doc.displayName === startCase(componentName),
  )?.props[startCase(componentName) + 'Props'];

  return {
    props: {
      component: await getComponent(componentName), // this is in kebabCase
      componentProps: JSON.stringify(componentProps),
    },
  };
};

export default ComponentExample;
