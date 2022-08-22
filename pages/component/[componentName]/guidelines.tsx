import ContentfulRichText from "components/ContentfulRichText";
import ComponentLayout from "layouts/ComponentLayout";
import { ReactElement } from "react";
import {
  getStaticComponentPaths,
  getStaticComponentProps,
} from "utils/getStaticComponent";

const ComponentGuidelines = ({ component }) => {
  return <ContentfulRichText document={component.fields?.designGuidelines} />;
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
