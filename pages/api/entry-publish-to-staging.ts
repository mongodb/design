/**
 * Endpoint utilized by a Contentstack webhook on successful publish of a component page entry
 */
export default async function handleEntryPublishToStaging(
  req: {
    method: 'POST' | 'GET' | 'PUT';
    body: any;
  },
  res,
) {
  if (req.method === 'POST') {
    const componentName = req.body.data.entry.title;
    const designGuidelines = req.body.data.entry.designguidelines;

    // 1. Identify all embedded entries and assets
    const referenceSubentries = designGuidelines.children.filter(
      child => child.type === 'reference',
    );
    // todo: recursively find all deeply embedded entries and store in array
    // if the Entry.fetch call doesn't accept an array of uid's, each call will have to be a separate fetch call

    // 2. Publish all embedded entries to staging using bulkOperation()

    // 3. Add all embedded entries and this entry itself to the release to main
    const mainReleaseBody = {
      name: componentName,
      description: `Publish component page for ${componentName} to main; created on ${new Date()}`,
    };
    // todo: create release and add relevant items

    const stagingReleaseBody = {
      name: componentName,
      description: `Publish all embedded entries for ${componentName} guidelines to staging; created on ${new Date()}`,
    };
    // todo: create release and add relevant items

    res.status(200).json({});
  }
}
