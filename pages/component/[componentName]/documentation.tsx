import CodeDocs from 'components/pages/documentation/CodeDocs';
import ComponentLayout from 'layouts/ComponentLayout';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponent } from 'utils/getContentfulResources';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import kebabCase from 'lodash/kebabCase';
import { CustomComponentDoc } from 'components/pages/documentation/TSDocPropTable';
import { containerPadding } from 'styles/globals';
import { css, cx } from '@emotion/css';
import { spacing } from '@leafygreen-ui/tokens';

const ComponentDocumentation = ({ component, changelog, readme, tsDoc }) => {
  return (
    <div className={cx(containerPadding, css`padding-bottom: ${spacing[6]}px;`)}>
      <CodeDocs
        componentName={component.fields.name}
        componentKebabCaseName={kebabCase(component.fields.name)}
        changelog={changelog}
        readme={readme}
        tsDoc={JSON.parse(tsDoc) as Array<CustomComponentDoc>}
      />
    </div>
  );
};

ComponentDocumentation.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.component.fields}>
      {page}
    </ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export async function getStaticProps({ params }) {
  const {
    props: { changelog, readme, tsDoc },
  } = await getDependencyDocumentation(params.componentName);

  return {
    props: {
      component: await getComponent(params.componentName),
      changelog,
      readme,
      tsDoc: JSON.stringify(tsDoc),
    },
  };
}

export default ComponentDocumentation;
