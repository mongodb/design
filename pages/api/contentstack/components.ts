import Contentstack from 'contentstack';
import { NextApiRequest, NextApiResponse } from 'next';
import { ComponentFields } from 'utils/api/types';

const ENV_MAP = {
  main: 'main',
  production: 'main',
  staging: 'staging',
  dev: 'staging',
} as const;

const environment = ((): string => {
  if (
    process.env.NEXT_PUBLIC_ENVIRONMENT &&
    ENV_MAP[process.env.NEXT_PUBLIC_ENVIRONMENT]
  ) {
    return ENV_MAP[process.env.NEXT_PUBLIC_ENVIRONMENT];
  }
  throw new Error(
    `Could not find environment "${process.env.NEXT_PUBLIC_ENVIRONMENT}"`,
  );
})();

const Stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN as string,
  environment,
});

const componentProperties = [
  'uid',
  'title',
  'description',
  'url',
  'figmaurl',
  'private',
];
const optionalComponentProperties = ['designguidelines'];

/**
 * @returns All component objects, optionally with all associated content (i.e. guidelines)
 */
async function getComponents(
  includeContent?: boolean): Promise<Array<ComponentFields>> {
  try {
    const results: Array<ComponentFields> = (
      await Stack.ContentType('component')
        .Query()
        .only([
          ...componentProperties,
          ...(includeContent ? optionalComponentProperties : []),
        ])
        .toJSON()
        .find()
    )[0];
    return results.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('No Component pages found', error);
    // Return no component pages
    return [];
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ error: 'Invalid HTTP request.' })
  }

  try {
    const components = await getComponents(!!req.query.includeContent)
    return res.status(200).json({ components })
  } catch(error) {
    return res.status(500).json({ error })
  }
}