import type { NextApiRequest, NextApiResponse } from 'next';
import { getContentPageService } from '../../../../utils/ContentStack/contentstackService';
import { ContentPage } from '@/utils/ContentStack/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentPage | { message: string } | undefined>,
) {
  if (req.method === 'GET') {
    const { title } = req.query;
    if (!title || typeof title !== 'string') {
      return res
        .status(400)
        .json({ message: 'Content page title is required.' });
    }

    try {
      const contentPage = await getContentPageService(title);
      if (!contentPage) {
        return res
          .status(404)
          .json({ message: `Content page "${title}" not found.` });
      }
      res.status(200).json(contentPage);
    } catch (error: any) {
      console.error('API Route Error: /api/content-pages/[title]', error);
      res
        .status(500)
        .json({ message: error.message || 'Failed to fetch content page' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
