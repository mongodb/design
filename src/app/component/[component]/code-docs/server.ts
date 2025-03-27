'use server';

import { TSDocResponse } from '@/components/code-docs';
import { PageTitle } from '@/utils';
import { getScopeFromPkgName } from '@/utils/getScopeFromPkgName';
import { marked } from 'marked';

export async function fetchTSDocs(
  componentName: PageTitle,
): Promise<Array<TSDocResponse> | null> {
  if (typeof componentName !== 'string') return null;

  try {
    return await import(
      `/node_modules/${getScopeFromPkgName(
        componentName,
      )}/${componentName}/tsdoc.json`
    ).then(response => {
      return response.default;
    });
  } catch (error) {
    console.warn(error);
    return null;
  }
}

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
