import fs from 'fs';
import path from 'path';
import util from 'util';
import markdownToHtml from 'utils/markdownToHtml';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { getNamespaceFromPkgName } from './getNamespaceFromPkgName';

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
    const namespace = getNamespaceFromPkgName(componentName);

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
    const namespace = getNamespaceFromPkgName(componentName);

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
  if (typeof componentName !== 'string') return null;

  const namespace = getNamespaceFromPkgName(componentName);

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
