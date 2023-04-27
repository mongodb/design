import { useEffect, useState } from 'react';

import { isStateReady } from './useLiveExampleState/utils';
import { getStoryCode } from './utils/getStoryCode';
import { LiveExampleContext } from './useLiveExampleState';

const emptyStateCode = 'No code found';

export const useStoryCode = (
  context: LiveExampleContext,
  showCode: boolean,
) => {
  const [storyCode, setCode] = useState(emptyStateCode);

  useEffect(() => {
    if (showCode && isStateReady(context)) {
      const code = getStoryCode(context) ?? emptyStateCode;
      setCode(code);
    }
  }, [context, showCode]);

  return storyCode;
};
