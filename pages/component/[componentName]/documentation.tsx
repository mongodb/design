import CodeDocs from 'components/CodeDocs';
import ComponentLayout from 'layouts/ComponentLayout';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponent, getComponents } from 'utils/getContentfulResources'
import getKebabCaseName from 'utils/getKebabCaseName';

const ComponentDocumentation = ({ component, changelog, readme }) => {
  return (
    <CodeDocs
      componentName={component.fields.name}
      componentKebabCaseName={getKebabCaseName(component.fields.name)}
      changelog={changelog}
      readme={readme}
    />
  );
}

ComponentDocumentation.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.component.fields}>
      {page}
    </ComponentLayout>
  )
}

// todo: do this once on the app level
export async function getStaticPaths() {
  const components = await getComponents();

  const paths = components.map((component) => ({
    params: {
      id: component.sys.id,
      componentName: getKebabCaseName(component.fields.name)
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { changelog, readme } = (await getDependencyDocumentation(params.componentName)).props;
  return {
    props: {
      component: await getComponent(params.componentName),
      changelog,
      readme,
    },
  };
}

export default ComponentDocumentation