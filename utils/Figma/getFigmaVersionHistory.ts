import { isUndefined } from 'lodash';
import {
  FigmaVersionEvent,
  LibraryPublishEvent,
} from 'utils/Figma/figma.types';

/**
 * Retrieves the versionn history for a given figma file
 */
export async function getFigmaVersionHistory(requestBody: LibraryPublishEvent) {
  if (isUndefined(process.env.FIGMA_TOKEN)) {
    console.error('Figma token not found');
    return;
  }

  const { versions } = await fetch(
    `https://api.figma.com/v1/files/${requestBody.file_key}/versions`,
    {
      headers: {
        'X-Figma-Token': process.env.FIGMA_TOKEN,
      },
    },
  ).then(data => data.json());

  return {
    versions: versions as Array<FigmaVersionEvent | undefined>,
    getVersionUrl: (version: FigmaVersionEvent | undefined) =>
      version &&
      new URL(
        `https://www.figma.com/file/${requestBody.file_key}/${requestBody.file_name}?version-id=${version.id}`,
      ),
  };
}
