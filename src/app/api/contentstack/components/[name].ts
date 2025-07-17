import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchComponentService } from '../../../../utils/ContentStack/contentstackService';
import { ComponentFields } from '@/utils/ContentStack/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComponentFields | { message: string } | undefined>,
) {
  if (req.method === 'GET') {
    const { name } = req.query;
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Component name is required.' });
    }

    try {
      const includeContent = req.query.includeContent === 'true';
      const component = await fetchComponentService(name, { includeContent });

      if (!component) {
        return res
          .status(404)
          .json({ message: `Component "${name}" not found.` });
      }

      res.status(200).json(component);
    } catch (error: any) {
      console.error('API Route Error: /api/components/[name]', error);
      res
        .status(500)
        .json({ message: error.message || 'Failed to fetch component' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
