import axios from 'axios';

import {
  FigmaVersionEvent,
  LibraryPublishEvent,
} from '../../utils/api/figma.types';
import { getFigmaVersionHistory } from '../../utils/api/getFigmaVersionHistory';
import {
  connectToFigmaVersionsCollection,
  getLatestEntries,
  MDBClient,
} from '../../utils/api/mdbConnect';
import { parseUpdatesFromFigmaDescription } from '../../utils/api/parseDescription';
import { getComponent } from '../../utils/ContentStack/getContentstackResources';

const WEBHOOK_ID = '494792';
// const FILENAME = 'LeafyGreen Design System'
const FILENAME = 'Skunkworks Test DS';

export default async function handleFigmaPublish(
  req: {
    method: 'POST' | 'GET' | 'PUT';
    body: string;
  },
  res,
) {
  if (req.method === 'POST') {
    console.clear();

    const body: LibraryPublishEvent = JSON.parse(req.body);
    const updatedFile = body.file_name;
    const requestWebhookId = body.webhook_id;

    const updates = parseUpdatesFromFigmaDescription(body.description);

    if (
      updatedFile !== FILENAME ||
      requestWebhookId !== WEBHOOK_ID ||
      !updates
    ) {
      res.status(403);
      return;
    }

    // 1. GET the URL to the _second last_ publish from Figma's version history API
    // (the _last_ publish is the current one)
    const { versions, getVersionUrl } = await getFigmaVersionHistory(body);
    const [_, prevVersion] = versions;
    const prevVersionUrl = getVersionUrl(prevVersion);

    // 2. PUT the previous Figma Link on the _last_ FigmaVersion entry for each updated component
    const { collection, close } = await connectToFigmaVersionsCollection();
    const entries = getLatestEntries({ collection, updates });
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


    // TODO: 3. Calculate the new version based on the last FigmaVersion and whether `versionUpdate` is a PATCH, MINOR, or MAJOR

    // TODO: 4. POST a new entry to Contentstack with the new version, Component reference, and description

    // process figma publish data
    const updateDescription = body.description;
    const componentUpdates = updateDescription.split(/\n\s*\n/);

    // componentUpdates.forEach(async componentUpdate => {
    //   // console.log(`Processing line: ${componentUpdate}`)
    //   await parseComponentUpdateDescription(componentUpdate);
    // });

    // send status code 200
    res.status(200).end();
  } else if (req.method === 'GET') {
    // get latest figma publish
    const figmaWebhooks = await axios.get(
      `https://api.figma.com/v2/webhooks/${WEBHOOK_ID}/requests`,
      {
        headers: {
          'X-Figma-Token': 'figd_5ODeNnl6Vxrzxm_SlWoCPPhryHogBr7ilLxy8u17',
        },
      },
    );
    res.status(200).json(figmaWebhooks.data);
  } else {
    res.status(404).error('Incorrect request method.');
  }
}
