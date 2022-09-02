import ComponentLayout from 'layouts/ComponentLayout';
import dynamic from 'next/dynamic';
import { startCase, kebabCase } from 'lodash';
import { ComponentType, ReactElement } from 'react';
import {
  getStaticComponentPaths,
  getStaticComponentProps,
  StaticComponentProps,
} from 'utils/getStaticComponent';

// This might be useful later when moving over to generating live examples from Storybook files.
// const getStoryFile = (component) => dynamic(() => import(`node_modules/${component.fields.packageName}/src/${component.fields.name}.story.tsx`), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

const getExampleFile = component =>
  dynamic(
    () =>
      import(
        `../../../deprecated/${kebabCase(component.fields.name)}/example.tsx`
      ),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    },
  );

// @ts-ignore
const getLiveExample = async ({ component }: StaticComponentProps) => {
  let CSF: ComponentType<any> | null = null;

  try {
    if (component) {
      const {
        fields: { name },
      } = component;

      CSF = dynamic(
        () =>
          import(
            `node_modules/@leafygreen-ui/${name}/src/${startCase(
              name,
            )}.story.tsx`
          ),
        {
          ssr: false,
          loading: () => <h1>ComponentExample</h1>,
        },
      );
    }

    // );
  } catch (err) {
    console.warn(err);
  }

  return CSF;
};

const ComponentExample = ({ component }: StaticComponentProps) => {
  // todo: replace with Storybook generated live examples
  const ExampleFile = getExampleFile(component);
  const Story = getLiveExample({ component });
  console.log(Story);
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
