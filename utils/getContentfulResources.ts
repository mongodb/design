import { ContentfulClientApi, EntryCollection } from 'contentful';
import { ComponentFields, ContentPageSectionFields } from './types';
import titlecase from 'utils/titlecase';

const contentful = require('contentful');
const isProd = process.env.NODE_ENV === 'production'

export function createContentfulClient(): ContentfulClientApi {
  const client = contentful.createClient({
    environment: 'master',
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: isProd ? process.env.CONTENTFUL_DELIVERY_TOKEN : process.env.CONTENTFUL_PREVIEW_TOKEN,
    host: isProd ? 'cdn.contentful.com' : 'preview.contentful.com',
  });

  return client
}

export async function getContentTypes() {
  try {
    return await createContentfulClient().getContentTypes();
  } catch (error) {
    console.error(error);
    return;
  }
}


export async function getComponents(): Promise<EntryCollection<ComponentFields>['items']> {
  try {
    const client = createContentfulClient()
    const entries = await client.getEntries<ComponentFields>({
      content_type: 'component',
      order: 'fields.name',
    });
    // remove the related components field for now to avoid circular references
    return entries.items.map(item => { return { ...item, fields: { ...item.fields, relatedComponents: [] } } })
  } catch (error) {
    console.error('No Component pages found', error)
    // Return no component pages
    return [] as EntryCollection<ComponentFields>['items']
  }
}

export async function getComponent(kebabCaseName: string) {
  console.log(titlecase(kebabCaseName.replaceAll('-', ' ')))
  try {
    const components = await getComponents() ?? []
    const component = components.find(item => item?.fields?.name === titlecase(kebabCaseName.replaceAll('-', ' ')))
    return component;
  } catch (error) {
    console.error(error);
  }
}

export async function getContentPageSections(): Promise<EntryCollection<ContentPageSectionFields>['items']> {
  try {
    const entries = await createContentfulClient().getEntries<ContentPageSectionFields>({
      content_type: 'contentPageGroup',
    });
    return entries.items;
  } catch (error) {
    console.error('No Page Groups found', error)
    // Return no sections
    return [] as EntryCollection<ContentPageSectionFields>['items']
  }
}

export async function getContentPage(contentPageGroupTitle: string, contentPageTitle: string) {
  // eslint-disable-next-line no-console
  console.log(contentPageGroupTitle, contentPageTitle)
  try {
    const contentPageGroups = await getContentPageSections();
    const contentPageGroup = contentPageGroups.find(item => item?.fields?.title === contentPageGroupTitle)
    // @ts-expect-error since we're in a try block
    const contentPage = contentPageGroup.fields.contentPages.find(item => item?.fields?.title === contentPageTitle)
    return contentPage;
  } catch (error) {
    // noop
  }
}