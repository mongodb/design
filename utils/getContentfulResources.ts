import startCase from 'lodash/startCase';
import { ContentfulClientApi, Entry, EntryCollection } from 'contentful';
import { ComponentFields, ContentPageFields, ContentPageGroupFields } from './types';

const contentful = require('contentful');
const isProd = process.env.NODE_ENV === 'production';

export function createContentfulClient(): ContentfulClientApi {
  const client = contentful.createClient({
    environment: 'master',
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: isProd
      ? process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN
      : process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
    host: isProd ? 'cdn.contentful.com' : 'preview.contentful.com',
  });

  return client;
}

export async function getContentTypes() {
  try {
    return await createContentfulClient().getContentTypes();
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getComponents(): Promise<
  EntryCollection<ComponentFields>['items']
> {
  try {
    const client = createContentfulClient();
    const entries = await client.getEntries<ComponentFields>({
      content_type: 'component',
      order: 'fields.name',
    });
    // remove the related components field for now to avoid circular references
    return entries.items.map(item => {
      return { ...item, fields: { ...item.fields, relatedComponents: [] } };
    });
  } catch (error) {
    console.error('No Component pages found', error);
    // Return no component pages
    return [] as EntryCollection<ComponentFields>['items'];
  }
}

export async function getComponent(kebabCaseName: string) {
  try {
    const components = (await getComponents()) ?? [];
    const component = components.find(
      item => item?.fields?.name === startCase(kebabCaseName),
    );
    return component;
  } catch (error) {
    console.error(error);
  }
}

export async function getContentPageGroups(): Promise<
  EntryCollection<ContentPageGroupFields>['items']
> {
  try {
    const entries =
      await createContentfulClient().getEntries<ContentPageGroupFields>({
        content_type: 'contentPageGroup',
      });
    return entries.items;
  } catch (error) {
    console.error('No Page Groups found', error);
    // Return no sections
    return [] as EntryCollection<ContentPageGroupFields>['items'];
  }
}

export async function getContentPages(): Promise<
  EntryCollection<ContentPageFields>['items']
> {
  try {
    const entries =
      await createContentfulClient().getEntries<ContentPageFields>({
        content_type: 'contentPage',
      });
    return entries.items;
  } catch (error) {
    console.error('No Page Groups found', error);
    // Return no sections
    return [] as EntryCollection<ContentPageFields>['items'];
  }
}

export async function getContentPage(
  contentPageTitle: string,
) {
  try {
    const entries =
      await createContentfulClient().getEntries<ContentPageGroupFields>({
        content_type: 'contentPage',
        'fields.title': startCase(contentPageTitle),
      });
    return entries.items[0];
  } catch (error) {
    console.error('No Page Groups found', error);
    // Return no sections
    return [] as EntryCollection<ContentPageGroupFields>['items'];
  }
}

export async function getEntryById(
  sysId: string,
) {
  try {
    const entry =
      await createContentfulClient().getEntry<Entry<unknown>>(sysId);
    return entry;
  } catch (error) {
    console.error('No entry found', error);
  }
}