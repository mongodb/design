import axios from 'axios';
import { getComponent, getLastComponentFigmaVersion } from 'utils/ContentStack/getContentstackResources';

const WEBHOOK_ID = '494792';
// const FILENAME = 'LeafyGreen Design System'
const FILENAME = 'Skunkworks Test DS';

const parseComponentUpdateDescription = async (description) => {
  const versionUpdate = description.split(/\[(.*?)\]/)[1];
  const componentName = description.split(/\](.*?)\-/)[1].trim();

  // 1. GET the URL to the second last publish from Figma's version history API
  // 2. PUT the Figma Link on the last FigmaVersion entry on Contentstack
  getComponent(componentName).then((component) => {
    getLastComponentFigmaVersion(component ? component.uid : '').then((res) => {
      // 3. Calculate the new version based on the last FigmaVersion and whether `versionUpdate` is a PATCH, MINOR, or MAJOR
      // 4. POST a new entry to Contentstack with the new version, Component reference, and description
    })
  })
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