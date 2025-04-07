import { ComponentSubPath, PatternSubPath, FoundationSubPath } from '.';

export type SubPath = ComponentSubPath | PatternSubPath | FoundationSubPath;

/**
 * There are instances where the title of a component in different in contentStack than the component package name. This returns the correct component package name.
 */
export const getMappedComponentName: Partial<Record<SubPath, string>> = {
  [PatternSubPath.CloudNavLayout]: 'cloud-nav',
};
