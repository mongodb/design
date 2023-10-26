import { ReactElement } from 'react';
import NewComponentLayout from 'layouts/NewComponentLayout';
import { containerPadding } from 'styles/globals';
import { getTSDoc } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { getStaticComponentPaths } from 'utils/ContentStack/getStaticComponent';
import { ComponentPageMeta } from 'utils/ContentStack/types';
import isEmptyRichText from 'utils/isEmptyRichText';

import ComingSoon from 'components/ComingSoon';
import ContentstackRichText from 'components/ContentstackRichText';

import { ExamplePageProps } from './example';

const ComponentGuidelines = ({ component }) => {
  const guidelines = component.designguidelines;
  return !guidelines || isEmptyRichText(guidelines) ? (
    <ComingSoon />
  ) : (
    <div className={containerPadding}>
      {<ContentstackRichText content={guidelines} />}
    </div>
  );
};

ComponentGuidelines.getLayout = function getLayout(page: ReactElement) {
  return (
    <NewComponentLayout
      componentName={page.props.componentName}
      component={page.props.component}
      tsDoc={page.props.tsDoc}
    >
      {page}
    </NewComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;
export const getStaticProps = async ({
  params,
}): Promise<{ props: ExamplePageProps }> => {
  const { componentName } = params;
  const component: ComponentPageMeta | null =
    (await getComponent(componentName, {
      includeContent: true,
    })) ?? null;

  const tsDoc = await getTSDoc(componentName);

  return {
    props: {
      componentName,
      component,
      tsDoc,
    },
  };
};

export default ComponentGuidelines;
