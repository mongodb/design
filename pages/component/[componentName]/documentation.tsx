import CodeDocs from 'components/pages/documentation/CodeDocs';
import ComponentLayout from 'layouts/ComponentLayout';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponent } from 'utils/getContentfulResources';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { CustomComponentDoc } from 'utils/tsdoc.utils';
import { ComponentFields } from 'utils/types';

interface DocsPageProps {
  componentName: string;
  fields: Omit<ComponentFields, 'designGuidelines'>;
  changelog: string;
  readme: string;
  tsDoc: Array<CustomComponentDoc>;
}

const ComponentDocumentation = ({
  componentName,
  fields,
  changelog,
  readme,
  tsDoc,
}: DocsPageProps) => {
  return (
    <CodeDocs
      componentName={fields.name}
      componentKebabCaseName={componentName}
      changelog={changelog}
      readme={readme}
      tsDoc={tsDoc}
    />
  );
};

ComponentDocumentation.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.fields}>
      {page}
    </ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export async function getStaticProps({ params: { componentName } }) {
  const {
    props: { changelog, readme, tsDoc },
  } = await getDependencyDocumentation(componentName);

  // Here we pull out the designGuidelines to ensure we're not passing that to this page unnecessarily
  const {
    fields: { designGuidelines, ...meta },
  } = (await getComponent(componentName)) ?? {
    fields: { designGuidelines: null },
  };

  return {
    props: {
      componentName,
      fields: meta,
      changelog,
      readme,
      tsDoc,
    },
  };
}

export default ComponentDocumentation;
