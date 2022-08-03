import { ContentfulClientApi, EntryCollection, EntryFields } from 'contentful';

const contentful = require('contentful');

export function createContentfulClient(): ContentfulClientApi {
  return contentful.createClient({
    space: '5fb8fg2odr3q',
    environment: 'master',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });
}

export async function getContentTypes() {
  try {
    return await createContentfulClient().getContentTypes();
  } catch (error) {
    console.error(error);
    return;
  }
}

export interface ComponentFields {
  name: EntryFields.Text;
  description: EntryFields.Text;
  kebabCaseName: EntryFields.Text;
  packageName: EntryFields.Text;
  figmaUrl?: EntryFields.Text;
  designGuidelines?: EntryFields.RichText;
};


export async function getComponents(): Promise<EntryCollection<ComponentFields>['items']> {
  try {
    const entries = await createContentfulClient().getEntries<ComponentFields>(
      'component',
    );
    return entries.items;
  } catch (error) {
    throw error;
  }
}

export async function getComponent(componentName: string) {
  try {
    const components = await getComponents() ?? []
    const componentId = components.find(item => item?.fields?.kebabCaseName === componentName)?.sys.id ?? '';
    const component = await createContentfulClient().getEntry(componentId);
    return component
  } catch (error) {
    console.error(error);
  }
}