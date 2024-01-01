import createEmotionServer from '@emotion/server/create-instance';

import { extractCritical as extractLeafygreenCritical } from '@leafygreen-ui/emotion';

import { cache } from '@emotion/css';

const { extractCritical } = createEmotionServer(cache);

export const renderStatic = async (callback: () => string) => {
  const html = callback();

  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }

  const { ids, css } = extractCritical(html);
  // Extracts critical styles from the custom LeafyGreen UI Emotion Server
  // https://github.com/mongodb/leafygreen-ui/tree/main/packages/emotion#server-side-rendering
  const { ids: leafygreenIds, css: leafygreenCss } =
    extractLeafygreenCritical(html);

  return { html, ids: [...ids, ...leafygreenIds], css: css + leafygreenCss };
};
