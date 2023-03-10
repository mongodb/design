import {
  FigmaVersionEvent,
  LibraryPublishEvent,
} from 'utils/Figma/figma.types';

export async function getFigmaVersionHistory(requestBody: LibraryPublishEvent) {
  const { versions } = await fetch(
    `https://api.figma.com/v1/files/${requestBody.file_key}/versions`,
    {
      headers: {
        'X-Figma-Token': 'figd_5ODeNnl6Vxrzxm_SlWoCPPhryHogBr7ilLxy8u17',
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
