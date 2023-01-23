import Contentstack from 'contentstack';
import startCase from 'lodash/startCase';
import { ComponentFields, ContentPage, ContentPageGroup } from './types';

const Stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN as string,
  environment: 'main',
});

interface QueryOptions {
  includeContent: boolean;
}

const componentProperties = ['uid', 'title', 'description', 'url'];
const optionalComponentProperties = ['figmaUrl', 'designguidelines'];

/**
 * @returns All component objects, optionally with all associated content (i.e. guidelines)
 */
export async function getComponents(
  options?: QueryOptions,
): Promise<Array<ComponentFields>> {
  try {
    const results: Array<ComponentFields> = (
      await Stack.ContentType('component')
        .Query()
        .only([
          ...componentProperties,
          ...(options?.includeContent ? optionalComponentProperties : []),
        ])
        .toJSON()
        .find()
    )[0];
    return results.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('No Component pages found', error);
    // Return no component pages
    return [];
  }
}

/**
 * @returns the component meta & optionally content for a given componentName
 */
export async function getComponent(
  componentName: string,
  options?: QueryOptions,
): Promise<ComponentFields | undefined> {
  try {
    const query = Stack.ContentType('component').Query();
    const result = await query
      .where('title', startCase(componentName))
      .only([
        ...componentProperties,
        ...(options?.includeContent ? optionalComponentProperties : []),
      ])
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error('Component page not found', error);
  }
}

/**
 * @returns All content page groups with
 */
export async function getContentPageGroups(): Promise<Array<ContentPageGroup>> {
  try {
    const query = Stack.ContentType('content_page_group').Query();
    const pageGroups: Array<ContentPageGroup> = (
      await query
        .includeReference('content_pages')
        .only(['content_pages', 'uid', 'title', 'url', 'iconname'])
        .toJSON()
        .find()
    )[0].map(({ content_pages, ...meta }: ContentPageGroup) => {
      return {
        ...meta,
        content_pages: content_pages
          // TODO: strip fields in initial query
          // Strip any additional fields
          .map(({ uid, title, url }) => ({ uid, title, url }))
          .sort((a, b) => a.title.localeCompare(b.title)),
      };
    });

    return pageGroups;
  } catch (error) {
    console.error('No Content Page Groups found', error);
    // Return no component pages
    return [];
  }
}

export async function getContentPage(
  contentPageName: string,
): Promise<ContentPage | undefined> {
  try {
    const query = Stack.ContentType('content_page').Query();
    const result = await query
      .where('title', startCase(contentPageName))
      .includeEmbeddedItems()
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error('Content page not found', error);
  }
}

export async function getEntryById(content_type_uid: string, uid: string) {
  try {
    const query = Stack.ContentType(content_type_uid).Entry(uid);
    const result = await query.includeEmbeddedItems().toJSON().fetch();
    return result;
  } catch (error) {
    console.error('Entry not found', error);
  }
}
