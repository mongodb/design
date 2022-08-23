import fs from 'fs';
import path from 'path';
import util from 'util';
import markdownToHtml from 'utils/markdownToHtml';
import type { BaseLayoutProps } from 'utils/types';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return null;
}

const getFileContent = util.promisify(fs.readFile);

export const getDependencyDocumentation = async (
  componentKebabCaseName: BaseLayoutProps['componentKebabCaseName']
) => {
  if (typeof componentKebabCaseName !== 'string') {
    return { props: { changelog: null, readme: null } };
  }

  const props: Partial<BaseLayoutProps> = { componentKebabCaseName };

  let changelogMarkdown: '' | Buffer = '';
  let readmeMarkdown = '';

  try {
    changelogMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `@leafygreen-ui/${componentKebabCaseName}`,
        '/CHANGELOG.md'
      )
    );
  } catch (error) {
    console.warn(error);
  }

  try {
    readmeMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `@leafygreen-ui/${componentKebabCaseName}`,
        '/README.md'
      ),
      'utf-8'
    );
  } catch (error) {
    console.warn(error);
  }

  props.changelog = await markdownToHtml(changelogMarkdown);

  props.readme = readmeMarkdown;

  return {
    props,
  };
};
