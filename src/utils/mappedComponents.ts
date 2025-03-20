import { Component, Pattern } from '.';

export const mappedComponents: Partial<Record<Component | Pattern, string>> = {
  [Pattern.CloudNavLayout]: 'cloud-nav',
  [Component.ProductFeatureWall]: 'feature-walls', // TODO: do i need this anymore?
};
