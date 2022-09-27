import { Entry } from 'contentful';
import kebabCase from 'lodash/kebabCase';
import { getComponent, getComponents } from './getContentfulResources';
import { ComponentFields } from './types';

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

export interface StaticComponentProps {
  component?: Entry<ComponentFields>;
}
export async function getStaticComponentProps({
  params,
}): Promise<{ props: StaticComponentProps }> {
  return {
    props: {
      component: await getComponent(params.componentName), // this is in kebabCase
    },
    revalidate: 300, // in seconds
  };
}
