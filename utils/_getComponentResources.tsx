import fs from 'fs';
import path from 'path';
import util from 'util';
import markdownToHtml from 'utils/markdownToHtml';
import { CustomComponentDoc } from 'components/pages/documentation/TSDocPropTable';
import dynamic from 'next/dynamic';
import { startCase } from 'lodash';

// import * as Story from '@leafygreen-ui/button/src/Button.story';

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
    const changelogMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `@leafygreen-ui/${componentName}`,
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
    const readmeMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `@leafygreen-ui/${componentName}`,
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
  try {
    return JSON.parse(
      await getFileContent(
        path.join(
          './node_modules',
          `@leafygreen-ui/${componentName}`,
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

// export async function getStory(componentName: string) {
//   try {
//     dynamic(
//       import(
//         `@leafygreen-ui/${componentName}/src/${startCase(
//           componentName,
//         )}.story.tsx`
//       ),
//       {
//         ssr: false,
//         loading: () => <>Loading Story...</>,
//       },
//     );
//   } catch (error) {
//     console.warn(error);
//   }
// }
