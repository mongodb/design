import { NextRequest, NextResponse } from 'next/server';
import { fetchEntryByIdService } from '../../../../../../lib/contentStack/contentStackService';
import { BlockPropsMap } from '@/components/content-stack/types';

/**
 * API Route to get an entry by content type UID and entry UID
 *
 * @param id - The content type UID (e.g. 'badge_block', 'callout_block')
 * @param uid - The unique identifier for the specific entry
 *
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { contentTypeUid: string; uid: string } },
) {
  try {
    const { contentTypeUid, uid } = params;
    if (!contentTypeUid) {
      return NextResponse.json(
        { message: 'Content type UID is required' },
        { status: 400 },
      );
    }

    if (!uid) {
      return NextResponse.json(
        { message: 'Entry UID is required' },
        { status: 400 },
      );
    }

    console.log(
      'App Router API: GET /api/contentstack/entry/[contentTypeUid]/[uid]',
      {
        contentTypeUid, // This is the content type UID (e.g., 'badge_block')
        uid, // This is the entry UID
        url: request.url,
      },
    );

    // Type assertion is needed here because we've already validated that id is one of the valid content types
    const entry = await fetchEntryByIdService(
      contentTypeUid as keyof BlockPropsMap,
      uid,
    );

    if (!entry) {
      return NextResponse.json(
        {
          message: `Entry with UID '${uid}' not found for content type '${contentTypeUid}'`,
        },
        { status: 404 },
      );
    }

    // Return JSON response
    return NextResponse.json(entry, { status: 200 });
  } catch (error: any) {
    console.error('API Error: fetchEntryByIdService', error);
    return NextResponse.json(
      { message: error.message || 'Failed to fetch entry' },
      { status: 500 },
    );
  }
}
