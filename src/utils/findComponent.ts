import kebabCase from 'lodash/kebabCase';
import { components } from './components';
import { patterns } from './patterns';
import { foundations } from './foundations';
import { Components } from './mappedTitles';

const allComponents = [...components, ...patterns, ...foundations];

/**
 * Returns the static component object matching a given name
 */
export const findComponent = (componentName: Components) => {
  return allComponents.find(
    c => kebabCase(c.name) === kebabCase(componentName),
  );
};
