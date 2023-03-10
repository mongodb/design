import { FigmaComponentUpdate } from './figma.types';

/**
 * Convert the formatted update string to an array of update objects.
 *
 * Expected `desctiption` format:
 * `[PATCH] <ComponentName> - Update text ...
 *  [MINOR] <ComponentName> - Update text ...
 *  ...etc`
 */
export function parseUpdatesFromFigmaDescription(
  description: string,
): Array<FigmaComponentUpdate> | undefined {
  const updateLines = description.match(/\[[A-Z]*\](.+)/g);

  return updateLines?.map(updateStr => {
    // E.g. [MINOR] Banner - something has changed within me
    const type = updateStr.match(/(?<=\[)[A-Z]*(?=\])/g)?.[0].trim(); // MINOR
    const component = updateStr.match(/(?<=\])(.*)(?=-)/g)?.[0].trim(); // Banner
    const description = updateStr.match(/(?<=-)(.*)/g)?.[0].trim(); // something has changed within me

    return {
      type,
      component,
      description,
    } as FigmaComponentUpdate;
  });
}
