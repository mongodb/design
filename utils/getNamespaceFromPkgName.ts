export const PRIVATE_PACKAGES: Array<string> = ['mongo-nav'];

export const getNamespaceFromPkgName = (pkgName: string) => {
  let namespace = '@leafygreen-ui';

  if (PRIVATE_PACKAGES.includes(pkgName)) {
    namespace = '@lg-private';
  }

  return namespace;
};
