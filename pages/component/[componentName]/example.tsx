import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import { getComponent, getComponents } from 'utils/getContentfulResources'
import dynamic from 'next/dynamic'

// This will probably be useful later when moving over to generating live examples from Storybook files.
// const getStoryFile = (component) => dynamic(() => import(`node_modules/${component.fields.packageName}/src/${component.fields.name}.story.tsx`), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

const getExampleFile = (component) => dynamic(() => import(`../deprecated/${component.fields.kebabCaseName}/example.tsx`), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ComponentExample = ({ component }) => {
  // todo: replace with Storybook generated live examples
  const ExampleFile = getExampleFile(component);
  return <ExampleFile />
}

ComponentExample.getLayout = function getLayout(page: ReactElement) {
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
  return {
    props: {
      component: await getComponent(params.componentName),
    },
  };
}

export default ComponentExample