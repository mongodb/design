import type { Collection } from 'mongodb';

import type { FigmaComponentUpdate } from './figma.types';

export async function updateFigmaVersionLinks({
  collection,
  updates,
  prevVersionUrl,
}: {
  collection: Collection<Document>;
  updates: Array<FigmaComponentUpdate>;
  prevVersionUrl: URL;
}) {
  // Get the latest entries
  const entries = collection.aggregate([
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

  entries.forEach(doc => {
    collection.updateOne(
      { _id: doc.latest._id },
      {
        $set: {
          figma_url: prevVersionUrl?.href,
        },
      },
    );
  });
}
