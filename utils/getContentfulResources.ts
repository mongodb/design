import { ContentfulClientApi, EntryCollection } from 'contentful';
import { ComponentFields } from './types';

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

export async function getComponent(componentKebabCaseName: string) {
  try {
    const components = await getComponents() ?? []
    const component = components.find(item => item?.fields?.kebabCaseName === componentKebabCaseName)
    return component;
  } catch (error) {
    console.error(error);
  }
}