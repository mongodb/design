import { NextRequest, NextResponse } from 'next/server';
import { fetchEntryByIdService } from '@/lib/contentStack/contentStackService';
import { auth } from '@/lib/auth';
import { Session } from 'next-auth';

interface NextAuthRequest extends NextRequest {
  auth: Session | null;
}

/**
 * API Route to get an entry by content type UID and entry UID
 *
 * @param id - The content type UID (e.g. 'badge_block', 'callout_block')
 * @param uid - The unique identifier for the specific entry
 *
 */

export const GET = auth(async function GET(
  request: NextAuthRequest,
  context: any,
) {
  const { params } = context;

  if (!params) {
    return NextResponse.json(
      { message: 'Invalid request parameters' },
      { status: 400 },
    );
  }

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

    if (!entry) {
      return NextResponse.json({ message: 'Entry not found' }, { status: 404 });
    }

    if (entry.private) {
      if (!request.auth) {
        return NextResponse.json(
          {
            message:
              'Unauthorized: You must be logged in to access this endpoint.',
          },
          {
            status: 401,
          },
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
});
