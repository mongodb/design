import { type ObjectId, Collection } from 'mongodb';

import { FigmaVersionsMDBDocument } from './mongodb.types';

/**
 * Updates the `figma_url` field of an entry
 */
export function updateFigmaUrl({
  collection,
  id,
  url,
}: {
  collection: Collection<FigmaVersionsMDBDocument>;
  id: ObjectId;
  url: URL;
}): void {
  collection.updateOne(
    { _id: id },
    {
      $set: {
        figma_url: url.href,
      },
    },
  );
}