import CodeDocs from 'components/pages/documentation/CodeDocs';
import ComponentLayout from 'layouts/ComponentLayout';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponentFields } from 'utils/getContentfulResources';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import { CustomComponentDoc } from 'utils/tsdoc.utils';
import { ComponentFields } from 'utils/types';
import { containerPadding } from 'styles/globals';
import { css, cx } from '@emotion/css';
import { spacing } from '@leafygreen-ui/tokens';

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
    <div
      className={cx(
        containerPadding,
        css`
          padding-bottom: ${spacing[6]}px;
        `,
      )}
    >
      <CodeDocs
        componentName={fields.name}
        componentKebabCaseName={componentName}
        changelog={changelog}
        readme={readme}
        tsDoc={tsDoc}
      />
    </div>
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
  const { designGuidelines, ...fields } = await getComponentFields(
    componentName,
  );

  return {
    props: {
      componentName,
      fields,
      changelog,
      readme,
      tsDoc,
    },
  };
}

export default ComponentDocumentation;
