import ComingSoon from 'components/ComingSoon';
import ContentfulRichText from 'components/ContentfulRichText/ContentfulRichText';
import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import {
  getStaticComponentPaths,
  getStaticComponentProps,
} from 'utils/getStaticComponent';

const ComponentGuidelines = ({ component }) => {
  const guidelines = component.fields?.designGuidelines;
  return guidelines.content == 0 ? (
    <ComingSoon />
  ) : (
    <ContentfulRichText document={guidelines} />
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
