import Contentstack from 'contentstack';
import startCase from 'lodash/startCase';

const Stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN as string,
  environment: 'main',
});

export async function getComponents(): Promise<any> {
  try {
    const results = await Stack.ContentType('component')
      .Query()
      .limit(100)
      .toJSON()
      .find();
    return results[0].sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('No Component pages found', error);
    // Return no component pages
    return [];
  }
}

export async function getComponent(componentName: string): Promise<any> {
  try {
    const query = Stack.ContentType('component').Query();
    const result = await query
      .where('title', startCase(componentName))
      .includeEmbeddedItems()
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error(error);
  }
}

export async function getContentPageGroups(): Promise<any> {
  try {
    const query = Stack.ContentType('content_page_group').Query();
    const pageGroups = await query
      .includeReference('content_pages')
      .toJSON()
      .find();
    return pageGroups[0];
  } catch (error) {
    console.error('No Content Page Groups found', error);
    // Return no component pages
    return [];
  }
}

export async function getContentPage(contentPageName: string) {
  try {
    const query = Stack.ContentType('content_page').Query();
    const result = await query
      .where('title', startCase(contentPageName))
      .includeEmbeddedItems()
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error(error);
  }
}

export async function getEntryById(content_type_uid: string, uid: string) {
  try {
    const query = Stack.ContentType(content_type_uid).Entry(uid);
    const result = await query.includeEmbeddedItems().toJSON().fetch();
    return result;
  } catch (error) {
    console.error(error);
  }
}
