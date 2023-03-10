import { parseComponentUpdateDescription } from './figma-publish';

const sampleDescription = `[PATCH] Rectangle - Rectangle color changed

[PATCH] Rectangle2 - Rectangle2 color changed`;

parseComponentUpdateDescription(sampleDescription);

// describe.only('figma-publish', () => {
//   describe('parseComponentUpdateDescription', () => {
//   })
// })
