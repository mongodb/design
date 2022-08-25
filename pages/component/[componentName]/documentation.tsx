import CodeDocs from 'components/pages/documentation/CodeDocs';
import { ComponentDoc } from 'react-docgen-typescript';
import ComponentLayout from 'layouts/ComponentLayout';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponent } from 'utils/getContentfulResources';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import kebabCase from 'lodash/kebabCase';
import uniqBy from 'lodash/uniqBy';

const ComponentDocumentation = ({ component, changelog, readme, tsDoc }) => {
  return (
    <CodeDocs
      componentName={component.fields.name}
      componentKebabCaseName={kebabCase(component.fields.name)}
      changelog={changelog}
      readme={readme}
      tsDoc={JSON.parse(tsDoc) as Array<ComponentDoc>}
    />
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
  const { changelog, readme } = (
    await getDependencyDocumentation(params.componentName)
  ).props;

  let { default: tsDoc } = (await import(
    `../../../node_modules/@leafygreen-ui/${kebabCase(
      params.componentName,
    )}/tsdoc.json`
  )) as { default: Array<ComponentDoc> };

  tsDoc = uniqBy(
    tsDoc.filter(doc => {
      return Object.keys(doc.props).length > 0 && !doc.tags?.internal;
    }),
    'displayName',
  );

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
