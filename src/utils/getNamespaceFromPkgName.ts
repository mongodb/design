export const PRIVATE_PACKAGES: Array<string> = ['canvas-header', 'cloud-nav'];

export const getNamespaceFromPkgName = (pkgName: string) => {
  return PRIVATE_PACKAGES.includes(pkgName) ? '@lg-private' : '@leafygreen-ui';
};
