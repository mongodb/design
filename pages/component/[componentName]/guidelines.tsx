import ComingSoon from 'components/ComingSoon';
import ContentstackRichText from 'components/ContentstackRichText';
import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import { containerPadding } from 'styles/globals';
import {
  getStaticComponentPaths,
  getStaticComponentProps,
} from 'utils/ContentStack/getStaticComponent';
import isEmptyRichText from 'utils/isEmptyRichText';

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
    <ComponentLayout component={page.props.component}>{page}</ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;
export const getStaticProps = getStaticComponentProps;

export default ComponentGuidelines;
