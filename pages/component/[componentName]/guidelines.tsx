import ComingSoon from 'components/ComingSoon';
import ContentstackRichText from 'components/ContentstackRichText';
// import ContentfulRichText from 'components/ContentfulRichText';
import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import { containerPadding } from 'styles/globals';
import {
  getStaticComponentPaths,
  getStaticComponentProps,
} from 'utils/getStaticComponent';

const ComponentGuidelines = ({ component }) => {
  const guidelines = component.designguidelines;
  return !guidelines ? (
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
