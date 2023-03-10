import { FigmaComponentUpdate, FigmaVersionsMDBDocument } from './figma.types';

export function calcNewVersion({
  update,
  doc,
}: {
  update: FigmaComponentUpdate;
  doc?: FigmaVersionsMDBDocument;
}) {
  let { major, minor, patch } = doc || { major: 1, minor: 0, patch: 0 };
  if (update?.type === 'MAJOR') major++;
  else if (update?.type === 'MINOR') minor++;
  else if (update?.type === 'PATCH') patch++;

  const version = `${major}.${minor}.${patch}`;

  return { version, major, minor, patch };
}
