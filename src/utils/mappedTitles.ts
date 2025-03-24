import { Component, Pattern, Foundation } from '.';

export type AllComponents = Component | Pattern | Foundation;

export const mappedTitles: Partial<Record<AllComponents, string>> = {
  [Pattern.CloudNavLayout]: 'cloud-nav',
};
