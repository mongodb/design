import {startCase} from 'lodash'

import { FigmaComponentUpdate, FigmaVersionsMDBDocument } from './figma.types';

export function calcNewVersion({
  component,
  updates,
  doc
}: {
  component: string,
  updates: Array<FigmaComponentUpdate>,
  doc: FigmaVersionsMDBDocument
}) {
  const update = updates.find(
    up => startCase(up.component) === startCase(component),
  );
  let { major, minor, patch } = doc;
  if (update?.type === 'MAJOR') major++;
  else if (update?.type === 'MINOR') minor++;
  else if (update?.type === 'PATCH') patch++;

  const version = `${major}.${minor}.${patch}`;

  return {version, major, minor, patch}

}