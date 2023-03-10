import axios from 'axios';
import { ObjectId } from 'mongodb';
import { calcNewVersion } from 'utils/api/calcNewVersion';

import { LibraryPublishEvent } from '../../utils/api/figma.types';
import { getFigmaVersionHistory } from '../../utils/api/getFigmaVersionHistory';
import {
  connectToFigmaVersionsCollection,
  getLatestEntries,
  updateFigmaUrl,
} from '../../utils/api/mdbConnect';
import { parseUpdatesFromFigmaDescription } from '../../utils/api/parseDescription';

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
    const [currentVersion, prevVersion] = versions;
    const currVersionUrl = getVersionUrl(currentVersion);
    const prevVersionUrl = getVersionUrl(prevVersion);

    const { collection, close: closeDB } =
      await connectToFigmaVersionsCollection();
    const entries = getLatestEntries({ collection, updates });

    // For each updated component:

    entries.forEach(group => {
      const { _id: component, latest: doc } = group;

      // 2. PUT the previous Figma Link on the _last_ FigmaVersion entry
      if (prevVersionUrl && doc.figma_url !== prevVersionUrl?.href) {
        updateFigmaUrl({ collection, id: doc._id, url: prevVersionUrl });
      }

      // 3. Calculate the new version based on the last FigmaVersion
      // and whether `versionUpdate` is a PATCH, MINOR, or MAJOR
      const { major, minor, patch, version } = calcNewVersion({
        component,
        updates,
        doc,
      });

      // 4. POST a new entry to MDB with the new version, Component, and description
      collection.insertOne({
        _id: new ObjectId(),
        component,
        major,
        minor,
        patch,
        version,
        figma_url: currVersionUrl?.href,
      });
    });

    closeDB();
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
