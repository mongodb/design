import kebabCase from 'lodash/kebabCase';
import { components } from './components';
import { patterns } from './patterns';
import { foundations } from './foundations';
import { SubPath } from './getMappedComponentName';

const allComponents = [...components, ...patterns, ...foundations];

/**
 * Returns the static component object matching a given name
 */
export const findComponent = (componentName: SubPath) => {
  return allComponents.find(
    c => kebabCase(c.name) === kebabCase(componentName),
  );
};
