'use server';

import { TSDocResponse } from '@/components/code-docs';
import { mappedComponents, Component, Pattern } from '@/utils';
import { getNamespaceFromPkgName } from '@/utils/getNamespaceFromPkgName';
import { marked } from 'marked';

export async function fetchTSDocs(
  componentName: Component | Pattern,
): Promise<Array<TSDocResponse> | null> {
  if (typeof componentName !== 'string') return null;

  const mappedComponentName = mappedComponents[componentName] ?? componentName;
  console.log('🥎', { componentName, mappedComponentName });

  try {
    return await import(
      `/node_modules/${getNamespaceFromPkgName(
        mappedComponentName,
      )}/${mappedComponentName}/tsdoc.json`
    ).then(response => {
      return response.default;
    });
  } catch (error) {
    console.warn(error);
    return null;
  }
}

// TODO: firgure out correct changelog for private packages
export async function fetchChangelog(
  componentName: string,
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@leafygreen-ui/${componentName}/CHANGELOG.md`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch Markdown file');
    }
    const markdown = await response.text();
    const parsedMarkdown = marked(markdown);

    return parsedMarkdown;
  } catch (error) {
    console.warn(error);
    return null;
  }
}
