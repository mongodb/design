// import startCase from 'lodash/startCase';
// import { ContentfulClientApi, Entry, EntryCollection } from 'contentful';
// import {
//   ComponentFields,
//   ContentPageFields,
//   ContentPageGroupFields,
// } from './types';
import Contentstack, { Entry } from 'contentstack';
import startCase from 'lodash/startCase';

const Stack = Contentstack.Stack({
  'api_key': process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY as string,
  'delivery_token': process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN as string,
  'environment': 'main',
});

export async function getComponents(): Promise<
  any
> {
  try {
    const results = await Stack.ContentType('component').Query().toJSON().find()
    return results[0]
  } catch (error) {
    console.error('No Component pages found', error);
    // Return no component pages
    return []
  }
}

export async function getComponent(
  componentName: string
): Promise<any> {
  try {
    const query = Stack.ContentType('component').Query()
    const result = await query.where('name', startCase(componentName)).toJSON().find()
    return result[0][0]
  } catch (error) {
    console.error(error);
  }
}

export async function getContentPageGroups(): Promise<
  any
> {
  try {
    const query = Stack.ContentType('content_page_group').Query()
    const pageGroups = await query.includeReference('content_pages').toJSON().find()
    return pageGroups[0]
  } catch (error) {
    console.error('No Content Page Groups found', error);
    // Return no component pages
    return []
  }
}

export async function getContentPages(): Promise<
  Array<Entry>
> {
  try {
    Stack.ContentType('content_page').Query().find().then(
      (entries) => {
        return entries[0]
      },
      (error) => {
        console.error(error)
        throw (error)
      }
    )
  } catch (error) {
    console.error('No Content Pages found', error);
    // Return no component pages
    return []
  }

  return []
}

export async function getContentPage(entryId: string) {
  try {
    Stack.ContentType('content_page').Entry(entryId).fetch().then(
      (entry) => {
        console.log(entry)
        return entry
      },
      (error) => {
        console.error(error)
      }
    )
  } catch (error) {
    console.error(error);
  }
}

export async function getEntryById(sysId: string) {
  return { sysId }
}
