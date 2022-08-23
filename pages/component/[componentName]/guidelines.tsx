import ComingSoon from 'components/ComingSoon';
import ContentfulRichText from 'components/ContentfulRichText';
import ComponentLayout from 'layouts/ComponentLayout';
import { ReactElement } from 'react';
import { getComponent, getComponents } from 'utils/getContentfulResources'
import getKebabCaseName from 'utils/getKebabCaseName';

const ComponentGuidelines = ({ component }) => {
  if (!component.fields?.designGuidelines) {
    return <ComingSoon />
  } else {
    return <ContentfulRichText document={component.fields?.designGuidelines} />
  }
}

ComponentGuidelines.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout componentFields={page.props.component.fields}>
      {page}
    </ComponentLayout>
  )
}

// todo: do this once on the app level
export async function getStaticPaths() {
  const components = await getComponents();

  const paths = components.map((component) => ({
    params: {
      id: component.sys.id,
      componentName: getKebabCaseName(component.fields.name),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      component: await getComponent(params.componentName),
    },
  };
}

export default ComponentGuidelines