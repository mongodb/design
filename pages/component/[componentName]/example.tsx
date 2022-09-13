import ComponentLayout from 'layouts/ComponentLayout';
import React, { ReactElement, useEffect, useState } from 'react';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { H2 } from '@leafygreen-ui/typography';
import { getComponent } from 'utils/getContentfulResources';
import { getComponentStory } from 'utils/getComponentStory';
import { kebabCase } from 'lodash';

const ComponentExample = ({ component }) => {
  const [Story, setStory] = useState<ComponentStory<any> | null>(null);

  // getComponentStory(kebabCase(component?.fields.name));

  useEffect(() => {
    getComponentStory(kebabCase(component?.fields.name)).then(module => {
      const meta = module?.default;
      // const mainStoryName = module.args.mainName
      // const Component = meta?.component;
      const StoryFn: ComponentStory<any> =
        module['Default'] || module['Primary'] || module['Basic'];

      const args = { ...meta.args, ...StoryFn?.args };
      setStory(StoryFn?.(args, {}));

      console.log({ ...StoryFn });
    });
  }, [component]);

  return (
    <>
      <H2>Example {component?.fields.name}</H2>
      {/* {Component && <Component />} */}
      {/* {Story && Story} */}
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
  // const tsDoc = await getTSDoc(componentName);

  // const componentProps = tsDoc?.find(
  //   doc => doc.displayName === startCase(componentName),
  // )?.props[startCase(componentName) + 'Props'];

  // const { Story, Component } = await getStory(componentName);

  return {
    props: {
      component: await getComponent(componentName), // this is in kebabCase
      // componentProps: JSON.stringify(componentProps),
      // story: JSON.stringify(Story, null, 2),
    },
  };
};

export default ComponentExample;
