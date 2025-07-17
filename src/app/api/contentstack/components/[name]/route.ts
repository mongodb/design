import { NextRequest, NextResponse } from 'next/server';
import { fetchComponentService } from '../../../../../utils/ContentStack/contentstackService';

/**
 * API Route to get a component by name
 * This is an App Router API route (NextJS 13+)
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } },
) {
  try {
    const { name } = params;
    if (!name) {
      return NextResponse.json(
        { message: 'Component name is required' },
        { status: 400 },
      );
    }

    // Get the searchParams from the request URL
    const searchParams = request.nextUrl.searchParams;
    const includeContent = searchParams.get('includeContent') === 'true';

    console.log('App Router API: GET /api/contentstack/components/[name]', {
      name,
      includeContent,
      url: request.url,
    });

    const component = await fetchComponentService(name, { includeContent });

    if (!component) {
      return NextResponse.json(
        { message: `Component '${name}' not found` },
        { status: 404 },
      );
    }

    // Return JSON response
    return NextResponse.json(component, { status: 200 });
  } catch (error: any) {
    console.error('API Error: getComponentByName', error);
    return NextResponse.json(
      { message: error.message || 'Failed to fetch component' },
      { status: 500 },
    );
  }
}
