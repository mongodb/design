import kebabCase from 'lodash/kebabCase';
import { components } from './components';
import { patterns } from './patterns';

const allComponents = [...components, ...patterns];
/**
 * Returns the component object matching a given name
 */
export const findComponent = (componentName: string) => {
  return allComponents.find(
    c => kebabCase(c.name) === kebabCase(componentName),
  );
};
