import ComponentLayout from 'layouts/ComponentLayout';
import React, {
  ReactElement,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { H2 } from '@leafygreen-ui/typography';
import { getComponent } from 'utils/getContentfulResources';
import { getComponentStory } from 'utils/getComponentStory';
import { kebabCase, startCase } from 'lodash';
import dynamic from 'next/dynamic';
import { ComponentStory, Meta } from '@storybook/react';

const ComponentExample = ({ component }) => {
  const [meta, setMeta] = useState<Meta<any>>();
  const [StoryFn, setStoryFn] = useState<any>();
  const [StoryComponent, setStoryComponent] = useState<ReactNode>();

  // Fetch Story if/when component changes
  useEffect(() => {
    const kebabName = kebabCase(component?.fields.name);
    getComponentStory(kebabName).then(module => {
      const { default: meta, ...stories } = module;
      const StoryFn = Object.values(stories)[0];
      const args = { ...meta.args, ...StoryFn?.args };
      const Component = StoryFn.bind({})(args);
      setMeta(meta);
      setStoryFn(StoryFn);
      setStoryComponent(Component);
    });
  }, [component]);

  // const args = useMemo(
  //   () => ({ ...meta?.args, ...StoryFn?.args }),
  //   [meta, StoryFn],
  // );

  // const StoryComponent = useMemo(() => {
  //   console.log(StoryFn);
  //   if (StoryFn) return StoryFn.bind({})(args);
  //   return <></>;
  // }, [StoryFn, args]);

  // console.log(StoryComponent);

  return (
    <>
      <H2>Example {component?.fields.name}</H2>
      {StoryComponent}
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
