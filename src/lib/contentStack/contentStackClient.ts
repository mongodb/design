import {
  BlockPropsMap,
  ContentTypeUID,
} from '@/components/content-stack/types';

/**
 * Client-safe function to fetch an entry by ID and content type
 * Uses the API route instead of directly using Contentstack SDK  d
 */
export async function getEntryById<T extends ContentTypeUID>(
  contentTypeUid: T,
  entryUid: string,
): Promise<BlockPropsMap[T] | undefined> {
  try {
    // Use the API route we've already set up
    const response = await fetch(
      `/api/contentstack/entry/${encodeURIComponent(
        contentTypeUid,
      )}/${encodeURIComponent(entryUid)}`,
    );

    if (!response.ok) {
      if (response.status === 404) return undefined;

      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Failed to fetch entry ${entryUid}`,
        );
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error(
      `Error fetching entry ${entryUid} of type ${contentTypeUid}:`,
      error,
    );
    return undefined;
  }
}
