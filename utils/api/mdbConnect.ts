import {
  type Collection,
  type Document,
  MongoClient,
  ServerApiVersion,
} from 'mongodb';

import type { FigmaComponentUpdate } from './figma.types';

const uri = `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASSWORD}@figmaversions.fctbuvl.mongodb.net/?retryWrites=true&w=majority`;

export const MDBClient = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

export async function connectToFigmaVersionsCollection() {
  await MDBClient.connect();
  const collection = MDBClient.db('FigmaVersions').collection('versions');
  return {
    collection,
    close: () => MDBClient.close(),
  };
}

export function getLatestEntries({
  collection,
  updates,
}: {
  collection: Collection<Document>;
  updates: Array<FigmaComponentUpdate>;
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

  return entries;
}
