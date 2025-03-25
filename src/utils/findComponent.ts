import kebabCase from 'lodash/kebabCase';
import { components } from './components';
import { patterns } from './patterns';
import { foundations } from './foundations';

const allComponents = [...components, ...patterns, ...foundations];

/**
 * Returns the static component object matching a given name
 */
export const findComponent = (componentName: string) => {
  return allComponents.find(
    c => kebabCase(c.name) === kebabCase(componentName),
  );
};
