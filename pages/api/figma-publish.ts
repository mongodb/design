import axios from 'axios';
import { ObjectId } from 'mongodb';

import { calcNewVersion } from '../../utils/Figma/calcNewVersion';
import { LibraryPublishEvent } from '../../utils/Figma/figma.types';
import { getFigmaVersionHistory } from '../../utils/Figma/getFigmaVersionHistory';
import { parseUpdatesFromFigmaDescription } from '../../utils/Figma/parseDescription';
import { connectToFigmaVersionsCollection } from '../../utils/MongoDB/connect';
import { getLatestEntries } from '../../utils/MongoDB/getLatestEntries';

const WEBHOOK_ID = '494792';
// const FILENAME = 'LeafyGreen Design System'
const FILENAME = 'Skunkworks Test DS';

export default async function handleFigmaPublish(
  req: {
    method: 'POST' | 'GET' | 'PUT';
    body: LibraryPublishEvent;
  },
  res,
) {
  if (req.method === 'POST') {
    const body = req.body;
    const updatedFile = body.file_name;
    const requestWebhookId = body.webhook_id;

    const figmaUpdateList = parseUpdatesFromFigmaDescription(body.description);

    if (
      updatedFile !== FILENAME ||
      requestWebhookId !== WEBHOOK_ID ||
      !figmaUpdateList
    ) {
      res.status(403);
      return;
    }

    // 1. GET the URL to the _second last_ publish from Figma's version history API
    // (the _last_ publish is the current one)
    const { versions, getVersionUrl } = await getFigmaVersionHistory(body);
    const [currentVersion] = versions;
    const currVersionUrl = getVersionUrl(currentVersion);

    const { collection, close: closeDB } =
      await connectToFigmaVersionsCollection();
    const entries = await getLatestEntries({
      collection,
      updates: figmaUpdateList,
    }).toArray();

    // For each updated component:
    figmaUpdateList.forEach(update => {
      // The latest entry on MDB
      const entryGroup = entries.find(e => e._id === update.component);

      // Calculate the new version based on the last FigmaVersion
      // and whether `versionUpdate` is a PATCH, MINOR, or MAJOR
      // if there is no `doc`, version is set to 1.0.0
      const { major, minor, patch, version } = calcNewVersion({
        update,
        doc: entryGroup?.latest,
      });

      // POST a new entry to MDB with the new version, Component, and description
      collection.insertOne({
        _id: new ObjectId(),
        component: update.component,
        update_type: update.type,
        description: update.description,
        updated_on: new Date(),
        major,
        minor,
        patch,
        version,
        figma_url: currVersionUrl?.href,
      });
    });

    closeDB();
    // send status code 200
    res.status(200);
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
