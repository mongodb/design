import type { EmotionCache } from '@emotion/css';
import type { EmotionCritical } from '@emotion/server/create-instance';
import createEmotionServer from '@emotion/server/create-instance';

import {
  cache as lgCache,
  extractCritical as extractLgCritical,
} from '@leafygreen-ui/emotion';

import { cache } from '@emotion/css';

const { extractCritical } = createEmotionServer(cache);

export const renderStatic = (callback: () => string) => {
  const html = callback();

  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }

  return {
    html,
    styles: [
      createStylesObjFromCritical(cache, extractCritical(html)),
      // Extract critical styles from the custom LeafyGreen UI Emotion Server
      // https://github.com/mongodb/leafygreen-ui/tree/main/packages/emotion#server-side-rendering
      createStylesObjFromCritical(lgCache, extractLgCritical(html)),
    ],
  };
};

const createStylesObjFromCritical = (
  cache: EmotionCache,
  critical: EmotionCritical,
) => {
  return {
    key: cache.key,
    ids: critical.ids,
    css: critical.css,
  };
};
