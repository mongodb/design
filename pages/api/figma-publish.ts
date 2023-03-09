import axios from 'axios';
import { getLastComponentFigmaVersion } from 'utils/ContentStack/getContentstackResources';

const WEBHOOK_ID = '494792';
// const FILENAME = 'LeafyGreen Design System'
const FILENAME = 'Skunkworks Test DS';

const parseComponentUpdateDescription = async (description) => {
  const versionUpdate = description.split(/\[(.*?)\]/)[1];
  const componentName = description.split(/\](.*?)\-/)[1].trim();

  // TODO for Adam!
  // 1. GET last Figma version from Contentstack that has the component's name
  // I've started the work in getContentstackResources/getLastComponentFigmaVersion.ts, but it doesn't quite work yet
  // 2. Calculate the new version based on the latest Figma version and whether `versionUpdate` is a PATCH, MINOR, or MAJOR
  // 3. POST a new entry to Contentstack with the new version, Component reference, and description
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const updatedFile = req.body.file_name
    const requestWebhookId = req.body.webhook_id;
    if (updatedFile !== FILENAME || requestWebhookId !== WEBHOOK_ID) {
      res.status(403)
      return;
    }

    // process figma publish data
    const updateDescription = req.body.description;
    const componentUpdates = updateDescription.split(/\n\s*\n/)

    componentUpdates.forEach(async componentUpdate => {
      console.log(`Processing line: ${componentUpdate}`)
      await parseComponentUpdateDescription(componentUpdate)
    })

    // send status code 200
    res.status(200);
  } else if (req.method === 'GET') {
    // get latest figma publish
    const figmaWebhooks = await axios.get(`https://api.figma.com/v2/webhooks/${WEBHOOK_ID}/requests`, {
      headers: {
        'X-Figma-Token': 'figd_5ODeNnl6Vxrzxm_SlWoCPPhryHogBr7ilLxy8u17',
      }
    })
    res.status(200).json(figmaWebhooks.data)
  } else {
    res.status(404).error('Incorrect request method.')
  }
}