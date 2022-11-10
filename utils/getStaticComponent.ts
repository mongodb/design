import kebabCase from 'lodash/kebabCase';
import { getComponent, getComponents } from './getContentstackResources';

export async function getStaticComponentPaths() {
  const components = await getComponents();
  console.log(components)

  const paths = components.map(component => ({
    params: {
      id: component.id,
      componentName: kebabCase(component.name),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticComponentProps({ params }) {
  return {
    props: {
      component: await getComponent(params.componentName), // this is in kebabCase
    },
    revalidate: 300, // in seconds
  };
}
