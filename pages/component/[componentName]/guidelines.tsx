import ComingSoon from 'components/ComingSoon';
import ContentfulRichText from 'components/ContentfulRichText';
import ComponentLayout from 'layouts/ComponentLayout';
import { NextPageContext } from 'next';
import { ReactElement } from 'react';
import {
  getStaticComponentPaths,
  getStaticComponentProps,
} from 'utils/getStaticComponent';

const ComponentGuidelines = ({ component }) => {
  const guidelines = component.fields?.designGuidelines;
  return !guidelines || guidelines.content.length == 0 ? (
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

export const getInitialProps = async (ctx: NextPageContext) => {
  const { req, query, res } = ctx
  console.log('req', req)
  if (res) res.statusMessage = 'Received!'
}

export const getStaticPaths = getStaticComponentPaths;
export const getStaticProps = getStaticComponentProps;

export default ComponentGuidelines;
