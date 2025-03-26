export const PRIVATE_PACKAGES: Array<string> = [
  'canvas-header',
  'cloud-nav',
  'feature-walls',
];

// Note: this implementation will need to be tweaked for charts because charts namespace is `lg-charts` and the package name is `core`, `lg-charts/core`. There will need to be some kind of mapping set up for charts when the page on contentstack is created.
export const getNamespaceFromPkgName = (pkgName: string) => {
  let namespace = '@leafygreen-ui';

  if (PRIVATE_PACKAGES.includes(pkgName)) {
    namespace = '@lg-private';
  }

  return namespace;
};
