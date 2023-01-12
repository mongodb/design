import Contentstack from 'contentstack';
import startCase from 'lodash/startCase';
import { ComponentFields, ContentPage, ContentPageGroup } from './types';

const Stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN as string,
  environment: 'main',
});

export async function getComponents(): Promise<Array<ComponentFields>> {
  try {
    const results: Array<ComponentFields> = (await Stack.ContentType('component')
      .Query()
      .toJSON()
      .find())[0]
    return results.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('No Component pages found', error);
    // Return no component pages
    return [];
  }
}

export async function getComponent(componentName: string): Promise<ComponentFields | undefined> {
  try {
    const query = Stack.ContentType('component').Query();
    const result = await query
      .where('title', startCase(componentName))
      .includeEmbeddedItems()
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error('Component page not found', error);
  }
}

export async function getContentPageGroups(): Promise<Array<ContentPageGroup>> {
  try {
    const query = Stack.ContentType('content_page_group').Query();
    const pageGroups: Array<ContentPageGroup> = (await query
      .includeReference('content_pages')
      .toJSON()
      .find())[0];
    pageGroups.forEach(pageGroup => {
      pageGroup.content_pages.sort((a, b) => a.title.localeCompare(b.title));
    })
    return pageGroups
  } catch (error) {
    console.error('No Content Page Groups found', error);
    // Return no component pages
    return [];
  }
}

export async function getContentPage(contentPageName: string): Promise<ContentPage | undefined> {
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
