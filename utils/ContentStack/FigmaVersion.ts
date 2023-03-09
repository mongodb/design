import { Stack } from './Stack';
import { ComponentFields } from './types';

/**
 * @returns all FigmaVersion entries for given component
 */
export async function getComponentFigmaVersions(
  componentUid: string,
): Promise<ComponentFields | undefined> {
  try {
    const query = Stack.ContentType('figma_version').Query();
    const result = await query
      .where('component.uid', componentUid)
      .descending('version')
      .toJSON()
      .find();
    return result[0];
  } catch (error) {
    console.error('Component figma versions not found', error);
  }
}

/**
 * @returns the last FigmaVersion for the given component
 */
export async function getLastComponentFigmaVersion(
  componentUid: string,
): Promise<ComponentFields | undefined> {
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
