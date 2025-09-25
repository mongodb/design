import Contentstack from 'contentstack';
import startCase from 'lodash/startCase';
import defaults from 'lodash/defaults';

import type {
  ComponentFields,
  ContentPage,
  ContentPageGroup,
} from '@/lib/contentStack/types';
import type {
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
const initializeStack = () => {
  try {
    const apiKey = process.env.CONTENTSTACK_API_KEY;
    const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN;

    if (!apiKey) {
      throw new Error('CONTENTSTACK_API_KEY environment variable is required');
    }

    if (!deliveryToken) {
      throw new Error(
        'CONTENTSTACK_DELIVERY_TOKEN environment variable is required',
      );
    }

    return Contentstack.Stack({
      api_key: apiKey,
      delivery_token: deliveryToken,
      environment,
    });
  } catch (error) {
    console.error('Failed to initialize Contentstack Stack:', error);
    throw new Error(
      `Contentstack Stack initialization failed: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    );
  }
};

const Stack = initializeStack();

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

const queryContentType = ({
  contentTitle,
  contentFilter,
  contentType,
}: {
  contentTitle: string;
  contentFilter: string[];
  contentType: string;
}) => {
  const query = Stack.ContentType(contentType).Query();
  return query
    .where('title', startCase(contentTitle))
    .only([...contentFilter])
    .toJSON()
    .find();
};

/**
 * @returns All component objects, optionally with all associated content (i.e. guidelines)
 */
export async function fetchComponentsService(
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
    throw new Error('Failed to fetch components.');
  }
}

/**
 * Check if a component is marked as private
 * @param componentName Name of the component to check
 * @returns The component with just the private
 */
export async function fetchIsComponentPrivateService(
  componentName: string,
): Promise<boolean | undefined> {
  try {
    const result = await queryContentType({
      contentTitle: componentName,
      contentFilter: ['private'],
      contentType: 'component',
    });

    const responseObject = result?.[0];
    const contentMetaData = responseObject?.[0];

    if (!contentMetaData) return undefined;

    return contentMetaData.private;
  } catch (error) {
    console.error(
      `Server Error: Failed to check if ${componentName} is private`,
      error,
    );
    throw new Error(`Failed to check if ${componentName} is private.`);
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
    const result = await queryContentType({
      contentTitle: componentName,
      contentFilter: [
        ...componentProperties,
        ...(options?.includeContent ? optionalComponentProperties : []),
      ],
      contentType: 'component',
    });

    const responseObject = result?.[0];
    const contentMetaData = responseObject?.[0];

    return contentMetaData;
  } catch (error) {
    console.error(`Server Error: ${componentName} not found`, error);
    throw new Error(`Failed to fetch component: ${componentName}.`);
  }
}

/**
 * @returns All content page groups with
 */
export async function fetchContentPageGroupsService(): Promise<
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

/**
 * Returns if a content page is private.
 * @param contentPageTitle Name of the content page to fetch
 * @returns The content page
 */
export async function fetchIsContentPagePrivateService(
  contentPageTitle: string,
): Promise<boolean | undefined> {
  try {
    const result = await queryContentType({
      contentTitle: contentPageTitle,
      contentFilter: ['is_private'],
      contentType: 'content_page',
    });

    const responseObject = result?.[0];
    const contentMetaData = responseObject?.[0];

    if (!contentMetaData) return undefined;

    return !!contentMetaData.is_private;
  } catch (error) {
    console.error('Server Error: Content page not found', error);
    throw new Error(`Failed to check if ${contentPageTitle} is private.`);
  }
}

/**
 * Returns a single content page by its title.
 * @param contentPageTitle Name of the content page to fetch
 * @returns The content page
 */
export async function fetchContentPageService(
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
    console.error('Server Error: Content page not found ', error);
    throw new Error(`Failed to fetch content page: ${contentPageTitle}.`);
  }
}

export async function fetchEntryByIdService<T extends ContentTypeUID>(
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
