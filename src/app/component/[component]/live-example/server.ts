import { StoryData } from '@/components/live-example/types';
import { composeStories } from '@storybook/react';

export async function loadStories(componentName: string) {
  try {
    const stories = await import(`@leafygreen-ui/${componentName}/stories`);
    const { LiveExample, default: extractMeta } = composeStories(stories);
    const meta = extractMeta ?? stories.default;

    return { LiveExample, meta } as StoryData;
  } catch (error) {
    console.log('ERROR LOADING STORIES');
    console.error(error);
    return;
  }
}
