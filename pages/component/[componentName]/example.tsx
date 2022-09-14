import ComponentLayout from 'layouts/ComponentLayout';
import React, {
  ReactElement,
  useEffect,
  useState,
  useMemo,
  ReactNode,
  useReducer,
} from 'react';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { H2 } from '@leafygreen-ui/typography';
import Card from '@leafygreen-ui/card';
import { getComponent } from 'utils/getContentfulResources';
import { getComponentStory } from 'utils/getComponentStory';
import { kebabCase, startCase } from 'lodash';
import { css } from '@leafygreen-ui/emotion';

const ComponentExample = ({ component }) => {
  const [{ meta, args, StoryFn, StoryComponent }, setState] = useReducer(
    (state, newState) => {
      return {
        ...state,
        ...newState,
      };
    },
    {
      meta: undefined,
      args: undefined,
      StoryFn: undefined,
      StoryComponent: undefined,
    },
  );

  // Fetch Story if/when component changes
  useEffect(() => {
    const kebabName = kebabCase(component?.fields.name);
    getComponentStory(kebabName).then(module => {
      const { default: meta, ...stories } = module;
      const StoryFn = Object.values(stories)[0];
      const args = { ...meta.args, ...StoryFn?.args };
      const StoryComponent = StoryFn.bind({})(args);
      setState({
        meta,
        StoryFn,
        args,
        StoryComponent,
      });
    });
  }, [component]);

  // Update the component with new args when the args change
  useEffect(() => {
    if (StoryComponent) {
      setState({
        StoryComponent: React.cloneElement(StoryComponent, { ...args }),
      });
    }
    // This will cause an infinite loop if we include StoryComponent
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args]);

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
    </>
  );
};

ComponentExample.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.component.fields}>
      {page}
    </ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export const getStaticProps = async ({ params }) => {
  const { componentName } = params;

  return {
    props: {
      component: await getComponent(componentName), // this is in kebabCase
      // componentProps: JSON.stringify(componentProps),
      // story: JSON.stringify(Story, null, 2),
    },
  };
};

export default ComponentExample;
