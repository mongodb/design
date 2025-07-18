import { NextRequest, NextResponse } from 'next/server';
import { getComponentsService } from '../../../../lib/contentStack/contentStackService';

/**
 * API Route to get all components
 */
export async function GET(request: NextRequest) {
  try {
    // Get the searchParams from the request URL
    const searchParams = request.nextUrl.searchParams;
    const includeContent = searchParams.get('includeContent') === 'true';

    console.log('App Router API: GET /api/contentstack/components', {
      includeContent,
      url: request.url,
    });

    const components = await getComponentsService({ includeContent });

    // Return JSON response
    return NextResponse.json(components, { status: 200 });
  } catch (error: any) {
    console.error('API Error: getComponentsService', error);
    return NextResponse.json(
      { message: error.message || 'Failed to fetch components' },
      { status: 500 },
    );
  }
}
