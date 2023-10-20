import kebabCase from 'lodash/kebabCase';

import { getComponent, getComponents } from './getContentstackResources';
import { ComponentFields } from './types';

interface StaticComponentPaths {
  paths: Array<{
    params: {
      id: string;
      componentName: string;
    };
  }>;
  fallback: boolean;
}
/**
 * Retrieves the id & component names for all components
 */
export async function getStaticComponentPaths(): Promise<StaticComponentPaths> {
  const components = await getComponents();

  const paths = components.map(component => ({
    params: {
      id: component.uid,
      componentName: kebabCase(component.title),
    },
  }));

  return { paths, fallback: false };
}

interface StaticComponentProps {
  props: {
    component?: ComponentFields;
    componentName: string;
  };
  // revalidate: number;
}
/**
 * Retrieves the {@link ComponentFields} for a given component name
 */
export async function getStaticComponentProps({
  params,
}): Promise<StaticComponentProps> {
  return {
    props: {
      componentName: params.componentName,
      component: await getComponent(params.componentName, {
        includeContent: true,
      }), // this is in kebabCase
    },
    // revalidate: 300, // in seconds
  };
}
