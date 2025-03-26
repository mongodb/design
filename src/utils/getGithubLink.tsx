import kebabCase from 'lodash/kebabCase';
import { mappedTitles, type Components } from '@/utils';

const GITHUB_URL = 'https://github.com';

const GITHUB_ORGS = {
  private: '10gen',
  public: 'mongodb',
} as const;

export const getGithubLink = (
  isPrivate?: boolean,
  componentTitle?: Components,
) => {
  const rootRepoUrl = `${GITHUB_URL}/${
    isPrivate ? GITHUB_ORGS.private : GITHUB_ORGS.public
  }/leafygreen-ui${isPrivate ? '-private' : ''}`;

  if (!componentTitle) {
    return rootRepoUrl;
  }

  const mappedComponentTitle = mappedTitles[componentTitle] || componentTitle;

  return `${rootRepoUrl}/tree/main/packages/${kebabCase(mappedComponentTitle)}`;
};
