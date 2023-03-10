import { Stack } from './Stack';

interface FigmaVersionField {
  uid: string;
  title: string;
  react_version: string;
  figma_link: string;
  updated_at: string;
}

function parseVersionString(versionString: string): Array<number> | undefined {
  return versionString.match(/[0-9]+/g)?.map(str => Number(str));
}

function sortVersions(a: FigmaVersionField, z: FigmaVersionField) {
  const aVersion = parseVersionString(a.title);
  const zVersion = parseVersionString(z.title);

  if (aVersion?.length === 3 && zVersion?.length === 3) {
    const [aMaj, aMin, aPatch] = aVersion;
    const [zMaj, zMin, zPatch] = zVersion;

    // if the major versions are the same
    if (aMaj === zMaj) {
      if (aMin === zMin) {
        if (aPatch === zPatch) {
          console.error('Two FigmaVersion entries have the same version', a, z);
          return 0; // the entire versions are the same // error
        }

        return aPatch > zPatch ? -1 : 1;
      }

      return aMin > zMin ? -1 : 1;
    }

    return aMaj > zMaj ? -1 : 1;
  }

  return 0;
}

/**
 * @returns all FigmaVersion entries for given component
 */
export async function getComponentFigmaVersions(
  componentUid: string,
): Promise<Array<FigmaVersionField> | undefined> {
  try {
    const query = Stack.ContentType('figma_version').Query();
    const result: Array<Array<FigmaVersionField>> = await query
      .where('component.uid', componentUid)
      .toJSON()
      .find();
    return result[0].sort(sortVersions);
  } catch (error) {
    console.error('Component figma versions not found', error);
  }
}

/**
 * @returns the last FigmaVersion for the given component
 */
export async function getLastComponentFigmaVersion(
  componentUid: string,
): Promise<FigmaVersionField | undefined> {
  try {
    const query = Stack.ContentType('figma_version').Query();
    const result = await query
      .where('component.uid', componentUid)
      .descending('version')
      .limit(1)
      .toJSON()
      .find();
    return result[0];
  } catch (error) {
    console.error('Component figma versions not found', error);
  }
}
