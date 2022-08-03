import CodeDocs from 'components/CodeDocs';
import ComponentLayout from 'layouts/ComponentLayout';
import { getStaticProps as getComponentResources } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponent, getComponents } from 'utils/getContentfulResources'

const ComponentDocumentation = ({ component, changelog, readme }) => {
  return (
    <CodeDocs
      component={component.fields.kebabCaseName}
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
      componentName: component.fields.kebabCaseName,
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // @ts-expect-error
  const { changelog, readme } = (await getComponentResources(params.componentName)).props;
  return {
    props: {
      component: await getComponent(params.componentName),
      changelog,
      readme,
    },
  };
}

export default ComponentDocumentation