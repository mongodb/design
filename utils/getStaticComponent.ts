import kebabCase from 'lodash/kebabCase';
import { getComponent, getComponents } from './getContentfulResources';

export async function getStaticComponentPaths() {
  const components = await getComponents();

  const paths = components.map(component => ({
    params: {
      id: component.sys.id,
      componentName: kebabCase(component.fields.name),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticComponentProps(ctx) {
  const { params, req } = ctx;
  console.log(req.query)
  return {
    props: {
      component: await getComponent(params.componentName), // this is in kebabCase
    },
  };
}
