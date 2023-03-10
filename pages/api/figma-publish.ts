import axios from 'axios';
import {
  getComponentFigmaVersions,
} from 'utils/ContentStack/FigmaVersion';
import { getComponent } from 'utils/ContentStack/getContentstackResources';

import { FigmaVersionEvent, LibraryPublishEvent } from './figma.types';

const WEBHOOK_ID = '494792';
// const FILENAME = 'LeafyGreen Design System'
const FILENAME = 'Skunkworks Test DS';

export const parseComponentUpdateDescription = async (description: string) => {
  const versionUpdate = description.split(/\[(.*?)\]/)[1];
  const componentName = description.split(/\](.*?)-/)[1].trim();
  console.log({ versionUpdate, componentName });



  const component = await getComponent(componentName, {
    includeContent: false,
  });

  if (component) {
    const { uid } = component;
    const allVersions = await getComponentFigmaVersions(uid);

    if (allVersions) {
      const [current, previous, ...rest] = allVersions;
      const { figma_link: prevUrl } = previous;
      console.log(prevUrl);
    }
  }
};


export default async function handleFigmaPublish(
  req: {
    method: 'POST' | 'GET' | 'PUT';
    body: string;
  },
  res,
) {

  if (req.method === 'POST') {

    const body: LibraryPublishEvent = JSON.parse(req.body)

    const updatedFile = body.file_name;
    const requestWebhookId = body.webhook_id;

    if (updatedFile !== FILENAME || requestWebhookId !== WEBHOOK_ID) {
      res.status(403);
      return;
    }

    // 1. GET the URL to the second last publish from Figma's version history API
    const {versions} = await fetch(`https://api.figma.com/v1/files/${body.file_key}/versions`, {
      headers: {
        'X-Figma-Token': 'figd_5ODeNnl6Vxrzxm_SlWoCPPhryHogBr7ilLxy8u17',
      },
    }).then(data => data.json())

    const [_, prevVersion] = versions as Array<FigmaVersionEvent>
    const prevVersionUrl = `https://www.figma.com/file/${body.file_key}/${body.file_name}?version-id=${prevVersion.id}`

    // TODO: 2. PUT the previous Figma Link on the last FigmaVersion entry on Contentstack (we haven't updated that yet)

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
