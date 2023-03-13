import { ReactElement, useMemo, useState } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { startCase } from 'lodash';
import { containerPadding } from 'styles/globals';
import { getChangelog } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { getStaticComponentPaths } from 'utils/ContentStack/getStaticComponent';
import { FigmaVersionsMDBDocument } from 'utils/Figma/figma.types';
import { getComponentEntriesArray } from 'utils/MongoDB/getComponentEntries';

import FigmaChangelogs from 'components/pages/changelogs/FigmaChangelogs';
import LogsControl from 'components/pages/changelogs/LogsControl';
import ReactChangelogs from 'components/pages/changelogs/ReactChangelogs';

import { spacing } from '@leafygreen-ui/tokens';

import { css, cx } from '@emotion/css';

interface DocsPageProps {
  componentName: string;
  reactChangelogs: string;
  reactVersion: string;
  figmaEntries: string;
}

const ComponentChangelogs = ({
  reactChangelogs,
  reactVersion,
  figmaEntries: figmaEntriesString,
}: DocsPageProps) => {
  const figmaEntries: Array<FigmaVersionsMDBDocument> = useMemo(
    () => JSON.parse(figmaEntriesString),
    [figmaEntriesString],
  );

  const [displayedLogs, setDisplayedLogs] = useState<string>('figma');
  return (
    <div
      className={cx(
        containerPadding,
        css`
          padding: ${spacing[4]}px 0;
        `,
      )}
    >
      <LogsControl
        figmaEntries={figmaEntries}
        setDisplayedLogs={setDisplayedLogs}
        reactVersion={reactVersion}
      />
      <div
        className={css`
          padding: ${spacing[3]}px 0;
        `}
      >
        {displayedLogs === 'figma' ? (
          <FigmaChangelogs figmaEntries={figmaEntries} />
        ) : (
          <ReactChangelogs reactChangelogs={reactChangelogs} />
        )}
      </div>
    </div>
  );
};

ComponentChangelogs.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout component={page.props.component}>{page}</ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export async function getStaticProps({ params: { componentName } }) {
  const reactChangelogs = await getChangelog(componentName);
  const reactVersion = reactChangelogs?.split('h2')[1]?.replace(/[>/<]+/g, '');

  const component = await getComponent(componentName, {
    includeContent: false,
  });

  const figmaEntries = (
    await getComponentEntriesArray({
      component: startCase(componentName),
    })
  ).map(({ _id, major, minor, patch, ...rest }) => ({ ...rest }));

  return {
    props: {
      component,
      reactChangelogs,
      reactVersion,
      figmaEntries: JSON.stringify(figmaEntries),
    },
  };
}

export default ComponentChangelogs;
