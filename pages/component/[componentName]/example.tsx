import ComponentLayout from 'layouts/ComponentLayout';
import React, { ReactElement, useEffect, useState } from 'react';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { H2 } from '@leafygreen-ui/typography';
import { getComponent } from 'utils/getContentfulResources';
import { getComponentStory } from 'utils/getComponentStory';
import { kebabCase, startCase } from 'lodash';
import dynamic from 'next/dynamic';

const ComponentExample = ({ component }) => {
  const kebabName = kebabCase(component?.fields.name);

  // const StoryFn = dynamic(
  //   () => {
  //     // return import(
  //     //   `@leafygreen-ui/${kebabName}/src/${startCase(kebabName)}.story.tsx`
  //     // );
  //     return import(`../../../deprecated/${kebabName}/example.tsx`)
  //     // return import(`@leafygreen-ui/button/src/Button.story`);
  //     // .then(
  //     //   m => m.default,
  //     // );
  //   },
  //   {
  //     ssr: false,
  //     //   loading: () => <h1>Loading</h1>,
  //   },
  // );
  // console.log(StoryFn);

  const [StoryFn, setStory] = useState<any | null>(null);

  useEffect(() => {
    // import(`@leafygreen-ui/${kebabName}/src/${startCase(kebabName)}.story`)
    import(`@leafygreen-ui/button/src/Button.story`)
      // import(`../../../deprecated/${kebabName}/example.tsx`)
      .then(module => {
        // const meta = module?.default;
        // const mainStoryName = module.args.mainName
        // const Component = meta?.component;
        // const StoryFn: ComponentStory<any> =
        //   module['Default'] || module['Primary'] || module['Basic'];
        // const args = { ...meta.args, ...StoryFn?.args };
        setStory(module.default);
      });
  }, [component, kebabName]);

  console.log(StoryFn);

  return (
    <>
      <H2>Example {component?.fields.name}</H2>
      {/* {Component && <Component />} */}
      {/* {StoryFn} */}
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
