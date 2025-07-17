import defaults from 'lodash/defaults';
import { ComponentFields, ContentPage } from './types';

interface QueryOptions {
  includeContent: boolean;
}

/**
 * @returns All component objects, optionally with all associated content (i.e. guidelines)
 * Fetches data from Next.js API route
 */
export async function getComponents(
  options?: QueryOptions,
): Promise<Array<ComponentFields>> {
  try {
    options = defaults(options, { includeContent: false });
    const params = new URLSearchParams();
    if (options.includeContent) {
      params.append('includeContent', 'true');
    }

    // Get base URL that works in both client and server contexts
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXTAUTH_URL || 'http://localhost:3000';

    // Use absolute URL to avoid URL parsing errors
    const url = new URL('/api/contentstack/components', baseUrl);
    if (params.toString()) {
      url.search = params.toString();
    }

    const response = await fetch(url.toString(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Check content type before attempting to parse JSON
    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      if (contentType?.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch components');
      } else {
        // Handle HTML error responses
        const text = await response.text();
        console.error('Non-JSON error response:', text.substring(0, 200));
        throw new Error(
          `Server returned ${response.status} ${response.statusText}`,
        );
      }
    }

    // Verify we received JSON before parsing
    if (!contentType?.includes('application/json')) {
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
    options = defaults(options, { includeContent: false });
    const params = new URLSearchParams();
    if (options.includeContent) {
      params.append('includeContent', 'true');
    }

    // Get base URL that works in both client and server contexts
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXTAUTH_URL || 'http://localhost:3000';

    // Use absolute URL with proper encoding
    const url = new URL(
      `/api/contentstack/components/${encodeURIComponent(componentName)}`,
      baseUrl,
    );
    if (params.toString()) {
      url.search = params.toString();
    }

    const response = await fetch(url.toString(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Check content type before attempting to parse JSON
    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      if (response.status === 404) return undefined; // Component not found

      if (contentType?.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch component');
      } else {
        // Handle HTML error responses
        const text = await response.text();
        console.error('Non-JSON error response:', text.substring(0, 200));
        throw new Error(
          `Server returned ${response.status} ${response.statusText}`,
        );
      }
    }

    // Verify we received JSON before parsing
    if (!contentType?.includes('application/json')) {
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
        : process.env.NEXTAUTH_URL || 'http://localhost:3000';

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
    if (!response.ok) {
      if (response.status === 404) return undefined;

      if (contentType?.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch content page');
      } else {
        // Handle HTML error responses
        const text = await response.text();
        console.error('Non-JSON error response:', text.substring(0, 200));
        throw new Error(
          `Server returned ${response.status} ${response.statusText}`,
        );
      }
    }

    // Verify we received JSON before parsing
    if (!contentType?.includes('application/json')) {
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
