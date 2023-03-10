import { MongoClient, ServerApiVersion } from 'mongodb';

import type { FigmaVersionsMDBDocument } from './mongodb.types';

const uri = `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASSWORD}@figmaversions.fctbuvl.mongodb.net/?retryWrites=true&w=majority`;

export const MDBClient = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

export async function connectToFigmaVersionsCollection() {
  await MDBClient.connect();
  const collection =
    MDBClient.db('FigmaVersions').collection<FigmaVersionsMDBDocument>(
      'versions',
    );

  return {
    collection,
    close: () => MDBClient.close(),
  };
}
