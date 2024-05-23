'use server';

import { TSDocResponse } from '@/components/code-docs';
import { marked } from 'marked';

export async function fetchTSDocs(
  componentName: string,
): Promise<Array<TSDocResponse> | null> {
  if (typeof componentName !== 'string') return null;

  try {
    return await import(`@leafygreen-ui/${componentName}/tsdoc.json`).then(
      response => {
        return response.default;
      },
    );
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
