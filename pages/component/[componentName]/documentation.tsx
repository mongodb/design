import CodeDocs from 'components/pages/documentation/CodeDocs';
import ComponentLayout from 'layouts/ComponentLayout';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { getStaticComponentPaths } from 'utils/ContentStack/getStaticComponent';
import { CustomComponentDoc } from 'utils/tsdoc.utils';
import { containerPadding } from 'styles/globals';
import { css, cx } from '@emotion/css';
import { spacing } from '@leafygreen-ui/tokens';

interface DocsPageProps {
  componentName: string;
  changelog: string;
  readme: string;
  tsDoc: Array<CustomComponentDoc>;
}

const ComponentDocumentation = ({
  componentName,
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
        componentName={componentName}
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
    <ComponentLayout component={page.props.component}>{page}</ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export async function getStaticProps({ params: { componentName } }) {
  const {
    props: { changelog, readme, tsDoc },
  } = await getDependencyDocumentation(componentName);

  const component = await getComponent(componentName);
  return { props: { componentName, component, changelog, readme, tsDoc } };
}

export default ComponentDocumentation;
