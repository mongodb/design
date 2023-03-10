import {
  type ObjectId,
  Collection,
  MongoClient,
  ServerApiVersion,
} from 'mongodb';

import type {
  FigmaComponentUpdate,
  FigmaVersionsMDBDocument,
} from './figma.types';

const uri = `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASSWORD}@figmaversions.fctbuvl.mongodb.net/?retryWrites=true&w=majority`;

export const MDBClient = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

export async function connectToFigmaVersionsCollection() {
  await MDBClient.connect();
  const collection: Collection<FigmaVersionsMDBDocument> =
    MDBClient.db('FigmaVersions').collection('versions');
  return {
    collection,
    close: () => MDBClient.close(),
  };
}

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
