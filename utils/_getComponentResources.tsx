import fs from 'fs';
import path from 'path';
import util from 'util';
import markdownToHtml from 'utils/markdownToHtml';
import type { BaseLayoutProps } from 'utils/types';
import { ComponentDoc } from 'react-docgen-typescript';
import { startCase, isUndefined } from 'lodash';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return null;
}

const getFileContent = util.promisify(fs.readFile);

export const getDependencyDocumentation = async (
  componentKebabCaseName: BaseLayoutProps['componentKebabCaseName'],
) => {
  if (typeof componentKebabCaseName !== 'string') {
    return { props: { changelog: null, readme: null, tsDoc: null } };
  }

  const props: Partial<BaseLayoutProps> = { componentKebabCaseName };

  let changelogMarkdown: '' | Buffer = '';
  let readmeMarkdown = '';
  let tsDoc: Array<ComponentDoc> | null = null;

  try {
    changelogMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `@leafygreen-ui/${componentKebabCaseName}`,
        '/CHANGELOG.md',
      ),
    );
  } catch (error) {
    console.warn(error);
  }

  try {
    readmeMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `@leafygreen-ui/${componentKebabCaseName}`,
        '/README.md',
      ),
      'utf-8',
    );
  } catch (error) {
    console.warn(error);
  }

  try {
    const _tsDoc: Array<ComponentDoc> = JSON.parse(
      await getFileContent(
        path.join(
          './node_modules',
          `@leafygreen-ui/${componentKebabCaseName}`,
          '/tsdoc.json',
        ),
        'utf-8',
      ),
    );

    tsDoc = _tsDoc;
  } catch (error) {
    console.warn(error);
  }

  props.changelog = await markdownToHtml(changelogMarkdown);
  props.readme = readmeMarkdown;
  props.tsDoc = tsDoc;

  return {
    props,
  };
};
