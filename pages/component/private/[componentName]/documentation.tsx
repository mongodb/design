import { ReactElement } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { containerPadding } from 'styles/globals';
import { getDependencyDocumentation } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import CodeDocs from 'components/pages/documentation/CodeDocs';

import { spacing } from '@leafygreen-ui/tokens';

import { css, cx } from '@emotion/css';

interface DocsPageProps {
  componentName: string;
  changelog: string;
  readme: string;
  tsDoc: Array<CustomComponentDoc>;
}

const ComponentDocumentation = ({
  componentName,
  changelog,
  readme,
  tsDoc,
}: DocsPageProps) => {
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

  return {
    props: {
      componentName,
      component: session
        ? await getComponent(componentName, {
            includeContent: false,
          })
        : undefined,
      changelog: session ? changelog : undefined,
      readme: session ? readme : undefined,
      tsDoc: session ? tsDoc : undefined,
    },
  };
}

export default ComponentDocumentation;
