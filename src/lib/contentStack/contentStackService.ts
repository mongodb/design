import Contentstack from 'contentstack';
import startCase from 'lodash/startCase';
import defaults from 'lodash/defaults';

import { ComponentFields, ContentPage, ContentPageGroup } from './types';
import {
  BlockPropsMap,
  ContentTypeUID,
} from '@/components/content-stack/types';

const ENV_MAP = {
  main: 'main',
  production: 'main',
  staging: 'staging',
  dev: 'staging',
} as const;

type EnvMapKey = keyof typeof ENV_MAP;

const isValidEnv = (env: string | undefined): env is EnvMapKey => {
  return !!env && Object.keys(ENV_MAP).includes(env);
};

const environment = ((): string => {
  // Only log the last four characters of the keys for security
  const apiKey = process.env.CONTENTSTACK_API_KEY || '';
  const publicEnvKey = process.env.NEXT_PUBLIC_ENVIRONMENT || '';
  const deliverykey = process.env.CONTENTSTACK_DELIVERY_TOKEN || '';
  console.log('1️⃣ CONTENTSTACK_API_KEY:', `...${apiKey.slice(-4)}`);
  console.log('2️⃣ NEXT_PUBLIC_ENVIRONMENT:', `...${publicEnvKey.slice(-4)}`);
  console.log('3️⃣ CONTENTSTACK_DELIVERY_TOKEN:', `...${deliverykey.slice(-4)}`);

  const environmentVariable = process.env.NEXT_PUBLIC_ENVIRONMENT;
  if (isValidEnv(environmentVariable)) {
    return ENV_MAP[environmentVariable];
  }
  // Log the error more verbosely for debugging on the server
  console.error(`Error: Could not find Contentstack environment for "${environmentVariable}".
    Please ensure NEXT_PUBLIC_ENVIRONMENT is set in your .env.local or deployment environment.`);
  throw new Error(`Could not find environment "${environmentVariable}"`);
})();

// Initialize Contentstack Stack only once on the server
const Stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN as string,
  environment,
});

const componentProperties = [
  'uid',
  'title',
  'description',
  'url',
  'figmaurl',
  'private',
  'codesandbox_url',
];
const optionalComponentProperties = ['designguidelines'];

interface QueryOptions {
  includeContent?: boolean; // Made optional as it has a default
}

/**
 * @returns All component objects, optionally with all associated content (i.e. guidelines)
 */
export async function getComponentsService(
  options?: QueryOptions,
): Promise<Array<ComponentFields>> {
  try {
    options = defaults(options, { includeContent: false });

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
    console.error('Server Error: No Component pages found', error);
    throw new Error('Failed to fetch components.'); // Throw error to be caught by API route
  }
}

/**
 * @returns the component meta & optionally content for a given componentName
 */
export async function fetchComponentService(
  componentName: string,
  options?: QueryOptions,
): Promise<ComponentFields | undefined> {
  try {
    const query = Stack.ContentType('component').Query();
    const startCaseName = startCase(componentName);
    const result = await query
      .where('title', startCaseName)
      .only([
        ...componentProperties,
        ...(options?.includeContent ? optionalComponentProperties : []),
      ])
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error('Server Error: Component page not found', error);
    throw new Error(`Failed to fetch component: ${componentName}.`);
  }
}

/**
 * @returns All content page groups with
 */
export async function getContentPageGroupsService(): Promise<
  Array<ContentPageGroup>
> {
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
    console.error('Server Error: No Content Page Groups found', error);
    throw new Error('Failed to fetch content page groups.');
  }
}

export async function getContentPageService(
  contentPageTitle: string,
): Promise<ContentPage | undefined> {
  try {
    const query = Stack.ContentType('content_page').Query();
    const result = await query
      .where('title', contentPageTitle)
      .includeEmbeddedItems()
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error('Server Error: Content page not found', error);
    throw new Error(`Failed to fetch content page: ${contentPageTitle}.`);
  }
}

export async function getEntryByIdService<T extends ContentTypeUID>(
  content_type_uid: T,
  uid: string,
): Promise<BlockPropsMap[T]> {
  try {
    const query = Stack.ContentType(content_type_uid).Entry(uid);
    const result = await query.includeEmbeddedItems().toJSON().fetch();
    return result as BlockPropsMap[T];
  } catch (error) {
    console.error('Server Error: Entry not found', error);
    throw new Error(
      `Failed to fetch entry by ID: ${uid} for type ${content_type_uid}.`,
    );
  }
}
