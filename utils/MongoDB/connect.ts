import {
  Collection,
  MongoClient,
  ServerApiVersion,
} from 'mongodb';

import type {
  FigmaVersionsMDBDocument,
} from './mongodb.types';

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
