import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { containerPadding } from 'styles/globals';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import isEmptyRichText from 'utils/isEmptyRichText';

import ComingSoon from 'components/ComingSoon';
import ContentstackRichText from 'components/ContentstackRichText';
import Unauthorized from 'components/Unauthorized';

const ComponentGuidelines = ({ component }) => {
  const { data: session } = useSession();

  if (!session) {
    return <Unauthorized />;
  }

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
    <ComponentLayout
      componentName={page.props.componentName}
      component={page.props.component}
    >
      {page}
    </ComponentLayout>
  );
};

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );
  const { componentName } = context.params;
  const component = session
    ? await getComponent(componentName, {
        includeContent: true,
      })
    : null;

  return {
    props: {
      componentName,
      component,
    },
  };
}

export default ComponentGuidelines;
