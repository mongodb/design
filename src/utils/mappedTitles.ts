import { Component, Pattern, Foundation } from '.';

export type AllComponents = Component | Pattern | Foundation;

/**
 * There are instances where the title of a component in different in contentStack than the package name. This returns the correct package name for the component.
 */
export const mappedTitles: Partial<Record<AllComponents, string>> = {
  [Pattern.CloudNavLayout]: 'cloud-nav',
};
