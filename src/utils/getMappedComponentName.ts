import { Component, Pattern, Foundation } from '.';

export type PageTitle = Component | Pattern | Foundation;

/**
 * There are instances where the title of a component in different in contentStack than the component package name. This returns the correct component package name.
 */
export const getMappedComponentName: Partial<Record<PageTitle, string>> = {
  [Pattern.CloudNavLayout]: 'cloud-nav',
};
