import { connectToFigmaVersionsCollection } from './connect';
import type { FigmaVersionsMDBDocument } from './mongodb.types';

export async function getComponentEntriesArray({
  component,
  limit = 10,
}: {
  component: FigmaVersionsMDBDocument['component'];
  limit?: number;
}) {
  const { collection, close: closeDB } =
    await connectToFigmaVersionsCollection();

  const entries = collection
    .find({
      component,
    })
    .sort({
      major: -1,
      minor: -1,
      patch: -1,
    })
    .limit(limit);
  const entriesArray = await entries.toArray();

  closeDB();
  return entriesArray;
}
