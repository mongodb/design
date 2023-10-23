import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { containerPadding } from 'styles/globals';
import {
  getStaticComponentPaths,
  getStaticComponentProps,
} from 'utils/ContentStack/getStaticComponent';
import isEmptyRichText from 'utils/isEmptyRichText';

import ComingSoon from 'components/ComingSoon';
import ContentstackRichText from 'components/ContentstackRichText';
import NewComponentLayout from 'layouts/NewComponentLayout';

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
    >
      {page}
    </NewComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;
export const getStaticProps = getStaticComponentProps;

export default ComponentGuidelines;
