import { NextRequest, NextResponse } from 'next/server';
import { getContentPage } from '../../../../../lib/contentStackService';

/**
 * API Route to get a content page by title
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { title: string } },
) {
  try {
    const { title } = params;
    if (!title) {
      return NextResponse.json(
        { message: 'Content page title is required' },
        { status: 400 },
      );
    }

    console.log('App Router API: GET /api/contentstack/content-pages/[title]', {
      title,
      url: request.url,
    });

    const contentPage = await getContentPage(title);

    if (!contentPage) {
      return NextResponse.json(
        { message: `Content page '${title}' not found` },
        { status: 404 },
      );
    }

    // Return JSON response
    return NextResponse.json(contentPage, { status: 200 });
  } catch (error: any) {
    console.error('API Error: getContentPageByTitle', error);
    return NextResponse.json(
      { message: error.message || 'Failed to fetch content page' },
      { status: 500 },
    );
  }
}
