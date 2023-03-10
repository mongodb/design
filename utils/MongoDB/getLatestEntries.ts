import { Collection } from 'mongodb';

import type {
  FigmaComponentUpdate,
  FigmaVersionsMDBDocument,
} from '../Figma/figma.types';

export function getLatestEntries({
  collection,
  updates,
}: {
  collection: Collection<FigmaVersionsMDBDocument>;
  updates: Array<FigmaComponentUpdate>;
}) {
  // Get the latest entries
  const entries = collection.aggregate<{
    _id: string;
    latest: FigmaVersionsMDBDocument;
  }>([
    {
      $match: {
        component: {
          $in: updates.map(u => u.component),
        },
      },
    },
    {
      $sort: {
        major: -1,
        minor: -1,
        patch: -1,
      },
    },
    {
      $group: {
        _id: '$component',
        latest: { $first: '$$ROOT' },
      },
    },
  ]);

  return entries;
}
