import fs from 'fs';
import path from 'path';
import util from 'util';
import markdownToHtml from 'utils/markdownToHtml';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { PRIVATE_PACKAGES } from './constants';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return null;
}

const getFileContent = util.promisify(fs.readFile);

export const getDependencyDocumentation = async (
  componentKebabCaseName: any,
): Promise<{
  props: {
    componentKebabCaseName: string;
    changelog: string | null;
    readme: string | null;
    tsDoc: Array<CustomComponentDoc> | null;
  };
}> => {
  if (typeof componentKebabCaseName !== 'string') {
    return {
      props: {
        componentKebabCaseName: '',
        changelog: null,
        readme: null,
        tsDoc: null,
      },
    };
  }

  return {
    props: {
      componentKebabCaseName,
      changelog: await getChangelog(componentKebabCaseName),
      readme: await getReadme(componentKebabCaseName),
      tsDoc: await getTSDoc(componentKebabCaseName),
    },
  };
};

export async function getChangelog(
  componentName: string,
): Promise<string | null> {
  try {
    let namespace = '@leafygreen-ui';

    if (PRIVATE_PACKAGES.includes(componentName)) {
      namespace = '@lg-private';
    }

    const changelogMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `${namespace}/${componentName}`,
        '/CHANGELOG.md',
      ),
    );
    return await markdownToHtml(changelogMarkdown);
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function getReadme(componentName: string): Promise<string | null> {
  try {
    let namespace = '@leafygreen-ui';

    if (PRIVATE_PACKAGES.includes(componentName)) {
      namespace = '@lg-private';
    }

    const readmeMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `${namespace}/${componentName}`,
        '/README.md',
      ),
      'utf-8',
    );

    return readmeMarkdown;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function getTSDoc(
  componentName: string,
): Promise<Array<CustomComponentDoc> | null> {
  let namespace = '@leafygreen-ui';
  if (typeof componentName !== 'string') return null;

  if (PRIVATE_PACKAGES.includes(componentName)) {
    namespace = '@lg-private';
  }

  try {
    return JSON.parse(
      await getFileContent(
        path.join(
          './node_modules',
          `${namespace}/${componentName}`,
          '/tsdoc.json',
        ),
        'utf-8',
      ),
    );
  } catch (error) {
    console.warn(error);
    return null;
  }
}
