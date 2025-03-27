import kebabCase from 'lodash/kebabCase';
import { getMappedComponentName, type PageTitle } from '@/utils';

const GITHUB_URL = 'https://github.com';

const GITHUB_ORGS = {
  private: '10gen',
  public: 'mongodb',
} as const;

export const getGithubLink = (isPrivate?: boolean, component?: PageTitle) => {
  const rootRepoUrl = `${GITHUB_URL}/${
    isPrivate ? GITHUB_ORGS.private : GITHUB_ORGS.public
  }/leafygreen-ui${isPrivate ? '-private' : ''}`;

  if (!component) {
    return rootRepoUrl;
  }

  const mappedComponent = getMappedComponentName[component] || component;

  return `${rootRepoUrl}/tree/main/packages/${kebabCase(mappedComponent)}`;
};
