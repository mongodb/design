const scopes = {
  charts: '@lg-charts',
  private: '@lg-private',
  ui: '@leafygreen-ui',
} as const;

const CHARTS_PACKAGES: Array<string> = [
  'core',
];

const PRIVATE_PACKAGES: Array<string> = [
  'canvas-header',
  'cloud-nav',
  'feature-walls',
];

export const getScopeFromPkgName = (pkgName: string) => {
  if (CHARTS_PACKAGES.includes(pkgName)) {
    return scopes.charts
  }

  if (PRIVATE_PACKAGES.includes(pkgName)) {
    return scopes.private
  }

  return scopes.ui;
};
