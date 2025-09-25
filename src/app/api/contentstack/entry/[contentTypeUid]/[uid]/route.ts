import { NextRequest, NextResponse } from 'next/server';
import { fetchEntryByIdService } from '@/app/api/contentstack/contentStackService';
import { ContentTypeUID } from '@/components/content-stack/types';
import { auth } from '@/app/api/auth/auth/auth';

/**
 * API Route to get an entry by content type UID and entry UID
 *
 * @param id - The content type UID (e.g. 'badge_block', 'callout_block')
 * @param uid - The unique identifier for the specific entry
 *
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { contentTypeUid: ContentTypeUID; uid: string } },
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

    const entry = await fetchEntryByIdService(contentTypeUid, uid);

    if (entry.private) {
      const session = await auth();

      if (!session?.user) {
        return NextResponse.json(
          {
            message:
              'Unauthorized - This entry is private and requires authentication',
          },
          { status: 401 },
        );
      }
    }

    console.log(
      '➡️ App Router API: GET /api/contentstack/entry/[contentTypeUid]/[uid]',
      {
        contentTypeUid, // This is the content type UID (e.g., 'badge_block')
        uid, // This is the entry UID
        url: request.url,
        isPrivate: entry.private,
      },
    );

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
