import { ComponentProps, ComponentType } from 'react';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { ModuleType } from 'utils/fetchComponentStories';

/**
 * Returns the default story defined in `meta`.
 * Falls back to the first listed story.
 */
export function getDefaultStory<T extends ComponentType>(
  meta: Meta<ComponentProps<T>>,
  stories: Record<string, ComponentStoryFn<T>>,
): ComponentStoryFn<T>;
export function getDefaultStory<T extends ComponentType>(
  module: ModuleType<T>,
): ComponentStoryFn<T>;
export function getDefaultStory<T extends ComponentType>(
  moduleOrMeta: ModuleType<T> | Meta<ComponentProps<T>>,
  storiesOrUndefined?: Record<string, ComponentStoryFn<T>>,
): ComponentStoryFn<T> {
  let meta: Meta<ComponentProps<T>>;
  let stories: Record<string, ComponentStoryFn<T>> = {};

  if (storiesOrUndefined) {
    meta = moduleOrMeta as Meta<ComponentProps<T>>;
  } else {
    const { default: _meta, ..._stories } = moduleOrMeta as ModuleType<T>;
    meta = _meta;
    stories = _stories;
  }

  const defaultStoryName = meta.parameters?.default ?? Object.keys(stories)[0];
  const StoryFn = defaultStoryName
    ? stories[defaultStoryName]
    : Object.values(stories)[0];

  if (defaultStoryName && !StoryFn) {
    // Warn if there's a defined default story name, but it doesn't exist
    console.warn(
      `LiveExample Error: Default story "${defaultStoryName}" not found`,
    );
  }

  return StoryFn;
}
