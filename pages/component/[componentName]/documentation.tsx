import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { containerPadding } from 'styles/globals';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { getStaticComponentPaths } from 'utils/ContentStack/getStaticComponent';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import CodeDocs from 'components/pages/documentation/CodeDocs';

import { spacing } from '@leafygreen-ui/tokens';

import { css, cx } from '@emotion/css';

interface DocsPageProps {
  componentName: string;
  readme: string;
  tsDoc: Array<CustomComponentDoc>;
}

const ComponentDocumentation = ({
  componentName,
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
        componentName={componentName}
        componentKebabCaseName={componentName}
        readme={readme}
        tsDoc={tsDoc}
      />
    </div>
  );
};

ComponentDocumentation.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout component={page.props.component}>{page}</ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export async function getStaticProps({ params: { componentName } }) {
  const {
    props: { readme, tsDoc },
  } = await getDependencyDocumentation(componentName);

  const component = await getComponent(componentName, {
    includeContent: false,
  });
  return { props: { componentName, component, readme, tsDoc } };
}

export default ComponentDocumentation;
