import ComingSoon from 'components/ComingSoon';
import ContentfulRichText from 'components/ContentfulRichText';
import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import { containerPadding } from 'styles/globals';
import {
  getStaticComponentPaths,
  getStaticComponentProps,
} from 'utils/getStaticComponent';

const ComponentGuidelines = ({ component }) => {
  const guidelines = component.fields?.designGuidelines;
  return !guidelines || guidelines.content.length == 0 ? (
    <ComingSoon />
  ) : (
    <div className={containerPadding}>
      <ContentfulRichText document={guidelines} />
    </div>
  );
};

ComponentGuidelines.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.component.fields}>
      {page}
    </ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;
export const getStaticProps = getStaticComponentProps;

export default ComponentGuidelines;
