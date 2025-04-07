export const PRIVATE_PACKAGES: Array<string> = [
  'canvas-header',
  'cloud-nav',
  'feature-walls',
];

// Note: this implementation will need to be tweaked for charts because charts scope is `lg-charts` and the package name is `core`, `lg-charts/core`. There will need to be some kind of mapping set up for charts when the page on contentstack is created.
export const getScopeFromPkgName = (pkgName: string) => {
  let scope = '@leafygreen-ui';

  if (PRIVATE_PACKAGES.includes(pkgName)) {
    scope = '@lg-private';
  }

  return scope;
};
