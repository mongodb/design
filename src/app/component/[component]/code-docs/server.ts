"use server";

import { marked } from "marked";

export async function getTSDocs(componentName: string = "button") {
  if (typeof componentName !== "string") return null;

  try {
    return await import(`@leafygreen-ui/${componentName}/tsdoc.json`).then(
      (response) => {
        return response.default;
      }
    );
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function getTSDocFromServer(component: string) {
  return await getTSDocs(component);
}

export async function getChangelog(
  componentName: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@leafygreen-ui/${componentName}/CHANGELOG.md`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Markdown file");
    }
    const markdown = await response.text();
    const parsedMarkdown = marked(markdown);

    return parsedMarkdown;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function getChangelogFromServer(component: string) {
  return await getChangelog(component);
}
