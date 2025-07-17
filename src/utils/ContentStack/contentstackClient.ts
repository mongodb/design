import defaults from 'lodash/defaults';
import { ComponentFields, ContentPage } from './types';
import {
  BlockPropsMap,
  ContentTypeUID,
} from '@/components/content-stack/types';

interface QueryOptions {
  includeContent: boolean;
}

/**
 * Fetches component data from the ContentStack API.
 *
 * This function makes a request to the ContentStack API endpoint to retrieve component data.
 *
 * @param {QueryOptions} [options] - Optional query parameters
 *
 * @returns {Promise<Array<ComponentFields>>} A promise that resolves to an array of component fields
 *
 * @example
 * const components = await getComponents();
 * const componentsWithContent = await getComponents({ includeContent: true });
 */
export async function getComponents(
  options?: QueryOptions,
): Promise<Array<ComponentFields>> {
  try {
    const mergedOptions = defaults(options, { includeContent: false });

    // Get base URL
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXTAUTH_URL;

    if (!baseUrl) {
      throw new Error('Base URL is not defined. Cannot fetch components.');
    }

    const url = new URL('/api/contentstack/components', baseUrl);

    if (mergedOptions.includeContent) {
      // appends a new key-value pair directly to the URL's query string.
      url.searchParams.append('includeContent', 'true');
    }

    const response = await fetch(url.toString(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Check content type before attempting to parse JSON
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    if (!response.ok) {
      if (isJson) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `API error: ${response.status} ${response.statusText}`,
        );
      } else {
        // Handle HTML error responses
        const text = await response.text();
        console.error('Non-JSON error response:', text.substring(0, 200));
        throw new Error(
          `Server returned non-JSON error: ${response.status} ${response.statusText}`,
        );
      }
    }

    // Verify we received JSON before parsing
    if (!isJson) {
      const text = await response.text();
      console.error(
        'Expected JSON but received:',
        contentType,
        text.substring(0, 200),
      );
      throw new Error('Server returned non-JSON response');
    }

    const results: Array<ComponentFields> = await response.json();
    return results;
  } catch (error) {
    console.error('Client Error: Failed to fetch components', error);
    return [];
  }
}

/**
 * @returns the component meta & optionally content for a given componentName
 * Fetches data from Next.js API route
 */
export async function fetchComponent(
  componentName: string,
  options?: QueryOptions,
): Promise<ComponentFields | undefined> {
  try {
    const mergedOptions = defaults(options, { includeContent: false });

    // Get base URL
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXTAUTH_URL;

    if (!baseUrl) {
      throw new Error('Base URL is not defined. Cannot fetch components.');
    }

    // Use absolute URL with proper encoding
    const url = new URL(
      `/api/contentstack/components/${encodeURIComponent(componentName)}`,
      baseUrl,
    );
    if (mergedOptions.includeContent) {
      // appends a new key-value pair directly to the URL's query string.
      url.searchParams.append('includeContent', 'true');
    }

    const response = await fetch(url.toString(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Check content type before attempting to parse JSON
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    if (!response.ok) {
      if (isJson) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `API error: ${response.status} ${response.statusText}`,
        );
      } else {
        // Handle HTML error responses
        const text = await response.text();
        console.error('Non-JSON error response:', text.substring(0, 200));
        throw new Error(
          `Server returned non-JSON error: ${response.status} ${response.statusText}`,
        );
      }
    }

    // Verify we received JSON before parsing
    if (!isJson) {
      const text = await response.text();
      console.error(
        'Expected JSON but received:',
        contentType,
        text.substring(0, 200),
      );
      throw new Error('Server returned non-JSON response');
    }

    const result: ComponentFields = await response.json();
    return result;
  } catch (error) {
    console.error('Client Error: Failed to fetch component', error);
    return undefined;
  }
}

/**
 * @returns a single content page by its title.
 * Fetches data from Next.js API route
 */
export async function getContentPage(
  contentPageTitle: string,
): Promise<ContentPage | undefined> {
  try {
    // Get base URL that works in both client and server contexts
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXTAUTH_URL;

    // Use absolute URL with proper encoding
    const url = new URL(
      `/api/contentstack/content-pages/${encodeURIComponent(contentPageTitle)}`,
      baseUrl,
    );

    const response = await fetch(url.toString(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Check content type before attempting to parse JSON
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    if (!response.ok) {
      if (isJson) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `API error: ${response.status} ${response.statusText}`,
        );
      } else {
        // Handle HTML error responses
        const text = await response.text();
        console.error('Non-JSON error response:', text.substring(0, 200));
        throw new Error(
          `Server returned non-JSON error: ${response.status} ${response.statusText}`,
        );
      }
    }

    // Verify we received JSON before parsing
    if (!isJson) {
      const text = await response.text();
      console.error(
        'Expected JSON but received:',
        contentType,
        text.substring(0, 200),
      );
      throw new Error('Server returned non-JSON response');
    }

    const result: ContentPage = await response.json();
    return result;
  } catch (error) {
    console.error('Client Error: Failed to fetch content page', error);
    return undefined;
  }
}

/**
 * @returns a single content page by its title.
 * Fetches data from Next.js API route
 */
export async function getEntryById<T extends ContentTypeUID>(
  content_type_uid: T,
  uid: string,
): Promise<BlockPropsMap[T] | undefined> {
  try {
    // Get base URL that works in both client and server contexts
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXTAUTH_URL;

    // Use absolute URL with proper encoding
    const url = new URL(
      `/api/contentstack/entry/${encodeURIComponent(
        content_type_uid,
      )}/${encodeURIComponent(uid)}`,
      baseUrl,
    );

    const response = await fetch(url.toString(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Check content type before attempting to parse JSON
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    if (!response.ok) {
      if (isJson) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `API error: ${response.status} ${response.statusText}`,
        );
      } else {
        // Handle HTML error responses
        const text = await response.text();
        console.error('Non-JSON error response:', text.substring(0, 200));
        throw new Error(
          `Server returned non-JSON error: ${response.status} ${response.statusText}`,
        );
      }
    }

    // Verify we received JSON before parsing
    if (!isJson) {
      const text = await response.text();
      console.error(
        'Expected JSON but received:',
        contentType,
        text.substring(0, 200),
      );
      throw new Error('Server returned non-JSON response');
    }

    const result: BlockPropsMap[T] = await response.json();
    return result;
  } catch (error) {
    console.error('Client Error: Failed to fetch entry', error);
    return undefined;
  }
}
