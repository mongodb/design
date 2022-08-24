import CodeDocs from 'components/pages/documentation/CodeDocs';
import ComponentLayout from 'layouts/ComponentLayout';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponent } from 'utils/getContentfulResources';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import kebabCase from 'lodash/kebabCase';

const ComponentDocumentation = ({ component, changelog, readme }) => {
  return (
    <CodeDocs
      componentName={component.fields.name}
      componentKebabCaseName={kebabCase(component.fields.name)}
      changelog={changelog}
      readme={readme}
    />
  );
};

ComponentDocumentation.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.component.fields}>
      {page}
    </ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export async function getStaticProps({ params }) {
  const { changelog, readme } = (
    await getDependencyDocumentation(params.componentName)
  ).props;
  return {
    props: {
      component: await getComponent(params.componentName),
      changelog,
      readme,
    },
  };
}

export default ComponentDocumentation;
