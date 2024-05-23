import kebabCase from "lodash/kebabCase";

const GITHUB_URL = 'https://github.com';

const GITHUB_ORGS = {
  private: "10gen",
  public: "mongodb",
} as const;

export const getGithubLink = (isPrivate?: boolean, componentTitle?: string) => {
  const rootRepoUrl = `${GITHUB_URL}/${isPrivate ? GITHUB_ORGS.private : GITHUB_ORGS.public
    }/leafygreen-ui${isPrivate ? "-private" : ""}`;

  if (!componentTitle) {
    return rootRepoUrl;
  }

  return `${rootRepoUrl}/tree/main/packages/${kebabCase(componentTitle)}`;
}
