import kebabCase from 'lodash/kebabCase';

const GITHUB_ORGS = {
  private: '10gen',
  public: 'mongodb',
};

export const getGithubLink = (isPrivate, componentTitle) =>
  `https://github.com/${
    isPrivate ? GITHUB_ORGS.private : GITHUB_ORGS.public
  }/leafygreen-ui${isPrivate ? '-private' : ''}/tree/main/packages/${kebabCase(
    componentTitle,
  )}`;
