import type { NextApiRequest, NextApiResponse } from 'next';
import { getComponentsService } from '../../../../utils/ContentStack/contentstackService';
import { ComponentFields } from '@/utils/ContentStack/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ComponentFields> | { message: string }>,
) {
  console.log('🥳🥳🥳API Route: /api/components', {
    method: req.method,
    query: req.query,
  });

  if (req.method === 'GET') {
    try {
      const includeContent = req.query.includeContent === 'true'; // Convert string to boolean
      const components = await getComponentsService({ includeContent });
      res.status(200).json(components);
    } catch (error: any) {
      console.error('API Error: getComponents', error);
      res
        .status(500)
        .json({ message: error.message || 'Failed to fetch components' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
