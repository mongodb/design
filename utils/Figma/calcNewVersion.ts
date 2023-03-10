import { startCase } from 'lodash';

import { FigmaComponentUpdate, FigmaVersionsMDBDocument } from './figma.types';

export function calcNewVersion({
  component,
  update,
  doc,
}: {
  component: string;
  update: FigmaComponentUpdate;
  doc: FigmaVersionsMDBDocument;
}) {

  let { major, minor, patch } = doc;
  if (update?.type === 'MAJOR') major++;
  else if (update?.type === 'MINOR') minor++;
  else if (update?.type === 'PATCH') patch++;

  const version = `${major}.${minor}.${patch}`;

  return { version, major, minor, patch };
}
