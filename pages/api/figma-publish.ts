import axios from 'axios';

const WEBHOOK_ID = '494792';
// const FILENAME = 'LeafyGreen Design System'
const FILENAME = 'Skunkworks Test DS';

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
    componentUpdates.forEach(componentUpdate => {
      console.log(componentUpdate)
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
    console.log(figmaWebhooks.data)
    res.status(200).json(figmaWebhooks.data)
  } else {
    res.status(404).error('Incorrect request method.')
  }
}