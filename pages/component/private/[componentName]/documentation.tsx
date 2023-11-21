import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { containerPadding } from 'styles/globals';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';

import CodeDocs from 'components/pages/documentation/CodeDocs';
import Unauthorized from 'components/Unauthorized';

import { spacing } from '@leafygreen-ui/tokens';

import { DocsPageProps } from '../../[componentName]/documentation';

import { css, cx } from '@emotion/css';

const ComponentDocumentation = ({
  componentName,
  changelog,
  readme,
  tsDoc,
}: DocsPageProps) => {
  const { data: session } = useSession();

  if (!session) {
    return <Unauthorized />;
  }

  return (
    <div
      className={cx(
        containerPadding,
        css`
          padding-bottom: ${spacing[6]}px;
        `,
      )}
    >
      <CodeDocs
        componentName={componentName}
        componentKebabCaseName={componentName}
        changelog={changelog}
        readme={readme}
        tsDoc={tsDoc}
      />
    </div>
  );
};

ComponentDocumentation.getLayout = function getLayout(page: ReactElement) {
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
  const {
    props: { changelog, readme, tsDoc },
  } = await getDependencyDocumentation(componentName);
  const component = session
    ? await getComponent(componentName, {
        includeContent: false,
      })
    : null;

  return {
    props: {
      componentName,
      component,
      changelog: session ? changelog : null,
      readme: session ? readme : null,
      tsDoc: session ? tsDoc : null,
    },
  };
}

export default ComponentDocumentation;
