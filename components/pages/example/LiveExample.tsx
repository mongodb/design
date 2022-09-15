import { useEffect, useMemo, useReducer } from 'react';
import { kebabCase } from 'lodash';
import Card from '@leafygreen-ui/card';
import { css } from '@leafygreen-ui/emotion';
import { getComponentStory } from 'utils/getComponentStory';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { BaseLayoutProps } from 'utils/types';

interface LiveExampleState {
  meta?: Meta<any>;
  args?: Object;
  StoryFn?: ComponentStoryFn<any>;
}

export const LiveExample = ({
  componentName,
  tsDoc,
}: Partial<BaseLayoutProps>) => {
  const [{ meta, args, StoryFn }, setState] = useReducer(
    (state: LiveExampleState, newState: LiveExampleState) => {
      return {
        ...state,
        ...newState,
      };
    },
    {
      meta: undefined,
      args: undefined,
      StoryFn: undefined,
    } as LiveExampleState,
  );

  // Fetch Story if/when component changes
  useEffect(() => {
    const kebabName = kebabCase(componentName);
    getComponentStory(kebabName).then(module => {
      const { default: meta, ...stories } = module;
      const StoryFn = Object.values(stories)[0];
      const args = { ...meta.args, ...StoryFn?.args };
      setState({ meta, args, StoryFn });
    });
  }, [componentName]);

  const StoryComponent: JSX.Element = useMemo(
    () => (StoryFn ? StoryFn?.bind({})(args) : null),
    [StoryFn, args],
  );

  return (
    <>
      <Card
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          margin-block: 2em;
          min-height: 25vh;
        `}
      >
        {StoryComponent}
      </Card>
      <code>{JSON.stringify(args)}</code>
    </>
  );
};
