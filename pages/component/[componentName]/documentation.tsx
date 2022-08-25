import CodeDocs from 'components/pages/documentation/CodeDocs';
import { ComponentDoc } from 'react-docgen-typescript';
import ComponentLayout from 'layouts/ComponentLayout';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { ReactElement } from 'react';
import { getComponent } from 'utils/getContentfulResources';
import { getStaticComponentPaths } from 'utils/getStaticComponent';
import kebabCase from 'lodash/kebabCase';
import uniqBy from 'lodash/uniqBy';
import isUndefined from 'lodash/isUndefined';

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

  let tsDoc: Array<ComponentDoc> | null;

  try {
    const { default: _tsDoc } = (await import(
      `../../../node_modules/@leafygreen-ui/${kebabCase(
        params.componentName,
      )}/tsdoc.json`
    )) as { default: Array<ComponentDoc> };

    tsDoc = uniqBy(
      _tsDoc
        // Only show docs for functions that are explicitly related to the component.
        // TODO: this should be removed in favor of consistent use of `@internal`
        .filter(doc =>
          doc.displayName.toLowerCase().startsWith(params.componentName),
        )
        // and are not tagged as internal
        .filter(doc => isUndefined(doc.tags?.internal)),
      'displayName',
    );
  } catch (error) {
    tsDoc = null;
  }

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
