import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import {
  getStaticComponentPaths,
  getStaticComponentProps,
} from 'utils/getStaticComponent';
import kebabCase from 'lodash/kebabCase';

// This might be useful later when moving over to generating live examples from Storybook files.
// const getStoryFile = (component) => dynamic(() => import(`node_modules/${component.fields.packageName}/src/${component.fields.name}.story.tsx`), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

const getExampleFile = (component) =>
  dynamic(
    () => import(`../../../deprecated/${kebabCase(component.fields.name)}/example.tsx`),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    }
  );

const ComponentExample = ({ component }) => {
  // todo: replace with Storybook generated live examples
  const ExampleFile = getExampleFile(component);
  return <ExampleFile />;
};

ComponentExample.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.component.fields}>
      {page}
    </ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;
export const getStaticProps = getStaticComponentProps;

export default ComponentExample;
